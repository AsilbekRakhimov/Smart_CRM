import { BaseException } from "./base.exception.js";

export class ValidationException extends BaseException {
  constructor(message) {
    super();
    this.message = message;
    this.name = "Validation error";
    this.status = 403;
  }
}
