import Sequelize from "sequelize";

class Lesson extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        roomNumber: {
          type: Sequelize.STRING,
          allowNull: false
        },
        day: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            min: 0,
            max: 7
          }
        }
      },
      { sequelize, modelName: "lesson" }
    );
  }
}

export default Lesson;
