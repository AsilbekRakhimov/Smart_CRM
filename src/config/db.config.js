import dotenv from "dotenv";
dotenv.config();

export const dbConfig = {
  dbUrl: process.env.DATABASE_URL || "mongodb+srv://asilbek:asil4742@cluster0.7cn8s.mongodb.net/",
};
