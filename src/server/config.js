export const jwtSecretCode = process.env.NODE_jwtSecretCode || "superSecret";

export const databaseConfig = {
  name: process.env.NODE_databaseName || "lessonplanjs",
  host: process.env.NODE_databaseHost || "localhost",
  username: process.env.NODE_databaseUsername || "lessonplanjs",
  password: process.env.NODE_databaePassword || "lessonplanjs"
};
