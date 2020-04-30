import Sequelize from "sequelize";

class School extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        number: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      { sequelize, modelName: "school" }
    );
  }
}

export default School;
