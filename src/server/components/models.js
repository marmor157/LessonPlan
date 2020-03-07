import { User } from "./users";
import { Hour } from "./hours";
import { Lesson } from "./lessons";

export default class Models {
  constructor() {
    this.models = [User, Hour, Lesson];
  }

  initModels(sequelize) {
    this.models.forEach(model => {
      model.init(sequelize);
    });
    this.defineRelations();
  }

  defineRelations() {
    Hour.belongsTo(User);
    Lesson.belongsTo(User);
    Lesson.belongsTo(Hour);
  }
}
