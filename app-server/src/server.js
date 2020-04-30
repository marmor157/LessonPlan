import express from "express";
import bodyParser from "body-parser";
import path from "path";
import Sequelize from "sequelize";

import { databaseConfig } from "./config";
import { Router, Models } from "./components";

class Server {
  constructor() {
    this.app = express();
    this.config();
    this.initRoutes();
    this.initDatabase();
    this.handleErrors();
  }

  async config() {
    this.app.use(bodyParser.json()); // support json encoded bodies
    this.app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

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

  async initDatabase() {
    const { name, username, password, host, databaseFullUrl } = databaseConfig;

    let sequelize;

    if (!databaseFullUrl) {
      sequelize = new Sequelize(name, username, password, {
        host: host,
        dialect: "mysql",
        logging: false,
      });
    } else {
      sequelize = new Sequelize(databaseFullUrl);
    }

    try {
      await sequelize.authenticate();
      console.log("Connection to database has been established successfully.");

      this.models = new Models();
      this.models.initModels(sequelize);

      await sequelize.sync({ force: false, alter: true });
    } catch (err) {
      console.log("Connection to database failed", err);
    }
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
