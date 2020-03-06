import Sequelize from "sequelize";
import bcrypt from "bcrypt";

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        username: { type: Sequelize.STRING, allowNull: false, unique: true },
        password: {
          type: Sequelize.STRING,
          allowNull: false
          /*async set(val) {
            const hash = await bcrypt.hash(val, 10);
            this.setDataValue("password", hash);
          }*/
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true, //works only with mySQL and PostgreSQL server
          unique: true,
          validate: { isEmail: true }
        }
      },
      { sequelize, modelName: "user" }
    );
  }
}

export default User;
