import NodeRSA from 'node-rsa';
import crypto from 'crypto';

class Crypto {
  static AES_IV: Buffer<ArrayBuffer> = Buffer.alloc(16, 0);

  static decode_auth = (auth: string): string => {
    let n = '';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = lowercase.toUpperCase();
    const digits = '0123456789';

    for (const s of auth) {
      if (lowercase.includes(s)) {
        n += String.fromCharCode(((32 - (s.charCodeAt(0) - 97)) % 26) + 97);
      } else if (uppercase.includes(s)) {
        n += String.fromCharCode(((29 - (s.charCodeAt(0) - 65)) % 26) + 65);
      } else if (digits.includes(s)) {
        n += String.fromCharCode(((13 - (s.charCodeAt(0) - 48)) % 10) + 48);
      } else {
        n += s;
      }
    }
    return n;
  };

  static passphrase(auth: string): string {
    if (auth.length !== 32) {
      throw new Error('auth length should be 32 digits');
    }

    const resultList: string[] = [];
    const chunks = auth.match(/.{8}/g);

    if (!chunks || chunks.length !== 4) {
      throw new Error('Invalid auth format');
    }

    const combined = chunks[2] + chunks[0] + chunks[3] + chunks[1];

    for (const character of combined) {
      const newChar = String.fromCharCode(
        ((character.charCodeAt(0) - 97 + 9) % 26) + 97,
      );
      resultList.push(newChar);
    }

    return resultList.join('');
  }

  static secret(length: number): string {
    if (length <= 0 || !Number.isInteger(length)) {
      throw new Error('Length must be a positive integer');
    }

    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let secret = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      secret += characters[randomIndex];
    }

    return secret;
  }

  static decrypt(data_enc: string, key: Buffer<ArrayBufferLike>): string {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, this.AES_IV);
    let decrypted = decipher.update(data_enc, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  static encrypt(data: string, key: Buffer<ArrayBufferLike>): string {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, this.AES_IV);
    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
  }

  static sign(data_enc: string, privateKey: string): string {
    if (!privateKey) {
      throw new Error('Private key is not defined');
    }
    const sign = crypto.createSign('SHA256');
    sign.update(data_enc);
    sign.end();
    const signature = sign.sign(privateKey, 'base64');
    return signature;
  }

  static createKeys() {
    const keyPair = new NodeRSA({
      b: 1024,
    });
    let publicKey = Crypto.decode_auth(
      Buffer.from(keyPair.exportKey('pkcs1-public-pem'), 'binary').toString(
        'base64',
      ),
    );
    let privateKey = keyPair.exportKey('pkcs1-private-pem');
    return [publicKey, privateKey];
  }

  static decrypt_RSA_OAEP(private_key: string, data: string) {
    const keyPair = new NodeRSA(private_key);
    const decrypted = keyPair.decrypt(data, 'utf8');
    return decrypted;
  }
}

export default Crypto;
