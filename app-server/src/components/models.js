import { User } from "./users";
import { Hour } from "./hours";
import { Lesson } from "./lessons";
import { School } from "./schools";
import { Subject } from "./subjects";
import { Teacher } from "./teachers";

export default class Models {
  constructor() {
    this.models = [
      User,
      Hour,
      Lesson,
      //School,
      Subject
      //Teacher
    ];
  }

  initModels(sequelize) {
    this.models.forEach(model => {
      model.init(sequelize);
    });
    this.defineRelations();
  }

  defineRelations() {
    //Hour.belongsTo(School);
    //User.belongsTo(School);

    //Teacher.belongsToMany(School, { through: "SchoolTeacher" });
    //School.belongsToMany(Teacher, { through: "SchoolTeacher" });

    //Subject.belongsToMany(School, { through: "SchoolSubject" });
    //School.belongsToMany(Subject, { through: "SchoolSubject" });

    //Subject.belongsTo(User);

    Lesson.belongsTo(Subject);
    Lesson.belongsTo(User);
    Lesson.belongsTo(Hour);

    Hour.belongsTo(User);
  }
}
