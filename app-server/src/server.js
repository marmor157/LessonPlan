import express from "express";
import bodyParser from "body-parser";
import path from "path";

import { Router } from "./components";
import Database from "./database";

class Server {
  constructor() {
    this.app = express();
    this.database = new Database();
    this.config();
    this.database.init();
    this.initRoutes();
    this.handleErrors();
  }

  async config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(function (req, res, next) {
      res.setHeader("Access-Control-Allow-Origin", "*");

      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );

      res.setHeader("Access-Control-Allow-Headers", "*");

      next();
    });

    this.app.use("/", express.static(path.join(__dirname, "../static/")));
  }

  initRoutes() {
    this.router = new Router();
    this.router.applyRoutes(this.app);
  }

  handleErrors() {
    this.app.use((err, req, res, next) => {
      const result = { error: err.message };

      if (this.app.get("env") === "production")
        result.error = "Unable to handle the request";

      res.status(500).json(result);
    });
  }
}

export default new Server().app;
