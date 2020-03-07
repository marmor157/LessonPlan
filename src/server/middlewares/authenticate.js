import jwt from "jsonwebtoken";

import { jwtSecretCode } from "../config";
import { UsersService } from "../components/users";

export default async function authenticate(req, res, next) {
  const authorizationHeader = req.headers["authorization"];
  let token = authorizationHeader
    ? authorizationHeader.split(" ")[1]
    : undefined;

  if (token) {
    jwt.verify(token, jwtSecretCode, async (err, decoded) => {
      if (err) {
        res.status(401).json({ error: "Failed to authenticate" });
      } else {
        try {
          await UsersService.getUserById(decoded.id);

          req.userID = decoded.id;
        } catch (error) {
          res.status(401).json({ error: "User not found" });
        }
      }
    });
  } else res.status(403).json({ error: "No token provided" });
  req.userID = 1;
  next();
}
