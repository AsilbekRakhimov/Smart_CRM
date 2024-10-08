import { signAccessToken } from "../../helpers/sign-tokens.jwt.helper.js";

class AuthService {
  constructor() {}

  async logInFn({ username, password }) {
    console.log(password, username);
    console.log(process.env.USERNAME, process.env.PASSWORD);
    if (username == process.env.ADMIN && password == process.env.PASSWORD) {
      const accessToken = signAccessToken({ id:Date.now() });
      return { accessToken };
    }
    return null;
  }
}

export default new AuthService();
