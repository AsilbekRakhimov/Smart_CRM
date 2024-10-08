export class BaseException extends Error {
  constructor() {
    super();
    this.isError = true;
  }
}
