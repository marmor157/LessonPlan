import Sequelize from "sequelize";

class Subject extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        shortName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        longName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      { sequelize, modelName: "subject" }
    );

    //Creates default subject at creation of database
    this.afterSync(async (subject) => {
      await this.findOrCreate({
        where: {
          id: 1,
        },
        defaults: {
          id: 1,
          shortName: "default",
          longName: "Default subject",
        },
      });
    });
  }
}

export default Subject;
