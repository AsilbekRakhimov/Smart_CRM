import { signAccessToken } from "../../helpers/sign-tokens.jwt.helper.js";

class AuthService {
  constructor() {}

  async logInFn({ username, password }) {
    if (username == process.env.USERNAME && password == process.env.PASSWORD) {
      const accessToken = signAccessToken({ id:Date.now() });
      return { accessToken };
    }
    return null;
  }
}

export default new AuthService();
