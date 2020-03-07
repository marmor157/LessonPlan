import Sequelize from "sequelize";
import bcrypt from "bcrypt";

class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        username: { type: Sequelize.STRING, allowNull: false, unique: true },
        password: {
          type: Sequelize.STRING,
          allowNull: false
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

    this.beforeCreate(async user => {
      const hash = await bcrypt.hash(user.password, 10);
      user.password = hash;
    });

    this.beforeBulkUpdate(async user => {
      if (user.attributes.password) {
        const hash = await bcrypt.hash(user.attributes.password, 10);
        user.attributes.password = hash;
      }
    });
  }
}

export default User;
