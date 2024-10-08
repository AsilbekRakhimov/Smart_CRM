import { jwtConfig } from "../config/jwt.config.js";
import { UnAuthorizedException } from "../exceptions/unauthorized.exception.js";
import { verifyToken } from "../helpers/sign-tokens.jwt.helper.js";

export const checkAuthGuard = () => {
  return (req, _, next) => {
    const bearerToken = req.headers["authorization"];

    if (
      !bearerToken ||
      !bearerToken.startsWith("Bearer ") ||
      !bearerToken.split("Bearer ")[1]
    ) {
      throw new UnAuthorizedException("There is error with token check it");
    }

    const token = bearerToken.split("Bearer ")[1];
    const response = verifyToken(token, jwtConfig.accessSecretKey);
    next();
  };
};
