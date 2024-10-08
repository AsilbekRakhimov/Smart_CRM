import Joi from "joi";

export const signTokensViaRefreshTokenSchema = Joi.object({
  refreshToken: Joi.string().token().required(),
});
