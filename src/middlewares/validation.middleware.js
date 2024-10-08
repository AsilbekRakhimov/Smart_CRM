import { ValidationException } from "../exceptions/validation.exception.js";

export const ValidationMiddleware = (schema) => {
  return (req, _, next) => {
    const data = req.body;
    const { value, error } = schema.validate(data);
    if (error) {
      throw new ValidationException(error.message);
    }
    req.body = value;
    next();
  };
};
