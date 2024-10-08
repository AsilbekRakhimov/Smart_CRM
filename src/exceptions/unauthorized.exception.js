import { BaseException } from "./base.exception.js";

export class UnAuthorizedException extends BaseException {
  constructor(message) {
    super();
    this.message = message;
    this.name = "UnAuthorized error";
    this.status = 401;
  }
}
