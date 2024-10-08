import dotenv from "dotenv";
dotenv.config();

export const dbConfig = {
  dbUrl: process.env.DATABASE_URL,
};
