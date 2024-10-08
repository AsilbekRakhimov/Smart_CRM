import Joi from "joi";

export const logInSchema = Joi.object({
  username: Joi.string().min(4).max(30).required(),
  password: Joi.string().min(4).max(30).alphanum().required(),
});
