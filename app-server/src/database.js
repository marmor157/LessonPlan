import Sequelize from "sequelize";

import { databaseConfig } from "./config";
import { Models } from "./components";
import { SubjectService } from "./components/services";

class Database {
  async init() {
    const { name, username, password, host, databaseFullUrl } = databaseConfig;

    let sequelize;

    //Allows to pass either credentials and url in one link or sparate
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

      let ret = await sequelize.sync({ force: false, alter: true });
    } catch (err) {
      console.log("Connection to database failed", err);
    }
  }
}

export default Database;
