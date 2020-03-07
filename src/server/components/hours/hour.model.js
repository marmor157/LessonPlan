import Sequelize from "sequelize";

class Hour extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        //hours stored as minutes past 00:00
        startHour: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            min: 0,
            max: 1440
          }
        },
        finishHour: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            min: 0,
            max: 1440
          }
        }
      },
      { sequelize, modelName: "hour" }
    );
  }
}

export default Hour;
