import jsonwebtoken from "jsonwebtoken";
import { jwtConfig } from "../config/jwt.config.js";

export const signAccessToken = (data) => {
  return jsonwebtoken.sign(data, jwtConfig.accessSecretKey, {
    expiresIn: jwtConfig.accessTokenExpire,
  });
};


export const verifyToken = (token, secretKey) => {
  let response = null;
  jsonwebtoken.verify(token, secretKey, (err, decoded) => {
    if (decoded) {
      response = decoded;
    }

    if (err instanceof jsonwebtoken.JsonWebTokenError) {
      throw new jsonwebtoken.JsonWebTokenError(
        err.message + " token is invalid"
      );
    }
    if (err instanceof jsonwebtoken.NotBeforeError) {
      throw new jsonwebtoken.NotBeforeError(
        err.message + " token is used before initialized"
      );
    }
    if (err instanceof jsonwebtoken.TokenExpiredError) {
      throw new jsonwebtoken.TokenExpiredError(
        err.message + " token is expired, refresh it"
      );
    }
  });
  return response;
};
