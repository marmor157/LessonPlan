// Name of database to use
export const databaseConfig = {
  name: process.env.NODE_databaseName || "lesssonplan",
  port: process.env.NODE_databasePort || 27017,
  ip: process.env.NODE_databaseIP || "127.0.0.1"
};

export const jwtSecretCode = process.env.NODE_jwtSecretCode || "superSecret";
