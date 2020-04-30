export default function getPath(endpoint) {
  if (process.env.NODE_ENV === "production") {
    return endpoint;
  }
  return `localhost:3000${endpoint}`;
}
