import { signAccessToken } from "../../helpers/sign-tokens.jwt.helper.js";

class AuthService {
  constructor() {}

  async logInFn({ username, password }) {
    console.log(username, password);
    if (username == "admin" && password == "12345") {
      const accessToken = signAccessToken({ id: Date.now() });
      return { accessToken };
    }
    return null;
  }
}

export default new AuthService();
