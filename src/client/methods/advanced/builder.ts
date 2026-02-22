import Client from '../../client';
import Crypto from '../../crypto';

async function builder(
	this: Client,
	name: string,
	input: object,
	tmp_session: boolean = false,
): Promise<any> {
	if (!this.auth) this.auth = Crypto.secret(32);
	if (!this.key) this.key = Buffer.from(Crypto.passphrase(this.auth), 'utf8');

	let result = await this.network.send({
		input,
		tmp_session,
		method: name,
	});

	if (result) {
		const data_enc = result.data_enc;
		if (data_enc) {
			const decrypted = Crypto.decrypt(data_enc, this.key);
			result = JSON.parse(decrypted);
		}

		const status = result.status;
		const status_det = result.status_det;

		if (status == 'OK' && status_det == 'OK') {
			return result.data;
		}
	}
}

export default builder;
