import fs from "fs";
import { SessionType, Session } from "../types/client.type";

class SessionManager {
  private readonly filename: string;
  sessionData: Session | null = null;

  constructor(input: SessionType) {
    const isStringInput = typeof input === "string";

    this.filename = isStringInput
      ? `${input}.json`
      : `${Date.now()}.rubjs.json`;

    if (!isStringInput) {
      this.sessionData = input;
    }
  }

  public saveSession(sessionData: Session): void {
    fs.writeFileSync(this.filename, JSON.stringify(sessionData, null, 2));
  }

  public getSession(): Session {
    if (this.sessionData) {
      return this.sessionData;
    }

    if (!fs.existsSync(this.filename)) {
      const defaultSession: Session = {
        phone: "",
        auth: "",
        guid: "",
        agent: "",
        private_key: "",
      };

      this.saveSession(defaultSession);
      return defaultSession;
    }

    return JSON.parse(fs.readFileSync(this.filename, "utf8"));
  }
}

export default SessionManager;
