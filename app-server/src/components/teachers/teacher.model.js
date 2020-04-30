import Sequelize from "sequelize";

class Teacher extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        surname: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      { sequelize, modelName: "teacher" }
    );
  }
}

export default Teacher;
