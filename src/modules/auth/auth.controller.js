import authService from "./auth.service.js";

class AuthController {
  #_authService;
  constructor() {
    this.#_authService = authService;
  }

  logIn = async (req, res, next) => {
    try {
      const data = await this.#_authService.logInFn(req.body);
      if (!data) {
        res.status(404).send({
          message: "Username yoki password xato",
        });
        return;
      }
      res.status(200).send({
        message: "success",
        ...data,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default new AuthController();
