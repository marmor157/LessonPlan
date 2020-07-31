export const getPath = (endpoint: string): string => {
  if (process.env.NODE_ENV === "production") {
    return endpoint;
  }
  return `http://localhost:3000${endpoint}`;
};

export default getPath;
