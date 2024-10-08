import dotenv from "dotenv";
dotenv.config();

export const jwtConfig = {
  accessSecretKey: process.env.JWT_ACCESS_KEY,
  accessTokenExpire: process.env.JWT_ACCESS_TOKEN_EXPIRE,
  refreshSecretKey: process.env.JWT_REFRESH_KEY,
  refreshTokenExpire: process.env.JWT_REFRESH_TOKEN_EXPIRE,
};
