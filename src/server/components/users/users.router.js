import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import authenticate from "../../middlewares/authenticate";
import UsersService from "./users.service";
import { jwtSecretCode } from "../../config";

export default class UsersRouter {
  constructor(route) {
    this.route = route;
    this.router = new Router();
    this.configure();
  }

  configure() {
    this.router.get("/", authenticate, async (req, res, next) => {
      const data = await UsersService.getUserById(req.userID);

      res.status(200).json(data);
      next();
    });

    this.router.put("/", async (req, res, next) => {
      const userData = req.body;
      try {
        const data = await UsersService.createUser(userData);

        res.status(200).json(data);
      } catch (err) {
        res.status(400).send(err);
      }
    });

    this.router.post("/auth", async (req, res, next) => {
      const { username, password } = req.body;
      try {
        let user = await UsersService.getUserByUsername(username);
        const match = await bcrypt.compare(password, user.password);

        if (match) {
          const token = jwt.sign(
            {
              id: user.id,
              name: user.username
            },
            jwtSecretCode
          );
          res.status(200).json({ token });
        } else {
          res.status(401).json({
            errors: { password: "Invalid password" }
          });
        }
      } catch (error) {
        console.log(error);
        res.status(401).json({ errors: { form: "Invalid data" } });
      }

      next();
    });
  }
}
