import { signAccessToken } from "../../helpers/sign-tokens.jwt.helper.js";
import { authModel } from "./auth.schema.js";

class AuthService {
  #_authModel;
  constructor() {
    this.#_authModel = authModel;
  }

  async logInFn({ username, password }) {
    const admin = await this.#_authModel.create({
      username,
      password,
    });
    const accessToken = signAccessToken({ id: admin.id });
    return { accessToken };
  }
}

export default new AuthService();
