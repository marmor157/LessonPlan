import Sequelize from "sequelize";

class Subject extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        shortName: {
          type: Sequelize.STRING,
          allowNull: false
        },
        longName: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      { sequelize, modelName: "subject" }
    );
  }
}

export default Subject;
