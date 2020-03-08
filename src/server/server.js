import express from "express";
import bodyParser from "body-parser";
import path from "path";
import Sequelize, { Model } from "sequelize";

import { databaseConfig } from "./config";
import { Router, Models } from "./components";

class Server {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.handleErrors();
  }

  async config() {
    this.app.use(bodyParser.json()); // support json encoded bodies
    this.app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

    this.app.use(function(req, res, next) {
      // Website you wish to allow to connect
      res.setHeader("Access-Control-Allow-Origin", "*");

      // Request methods you wish to allow
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );

      // Request headers you wish to allow
      res.setHeader("Access-Control-Allow-Headers", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader("Access-Control-Allow-Credentials", true);

      // Pass to next layer of middleware
      next();
    });

    this.app.use(
      "/",
      express.static(path.join(__dirname, "../../dist/assets"))
    );

    const { name, username, password, host } = databaseConfig;
    const sequelize = new Sequelize(name, username, password, {
      host: host,
      dialect: "mysql"
    });

    try {
      await sequelize.authenticate();
      console.log("Connection to database has been established successfully.");

      this.models = new Models();
      this.models.initModels(sequelize);

      await sequelize.sync();
    } catch (err) {
      console.log("Connection to database failed", err);
    }
  }

  routes() {
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
