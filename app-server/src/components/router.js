import { UsersRouter } from "./users";
import { HoursRouter } from "./hours";
import { LessonsRouter } from "./lessons";
import { SchoolsRouter } from "./schools";
import { SubjectsRouter } from "./subjects";
import { TeachersRouter } from "./teachers";

export default class Router {
  constructor() {
    this.controllers = [
      new UsersRouter("/api/users"),
      new HoursRouter("/api/hours"),
      new LessonsRouter("/api/lessons"),
      //new SchoolsRouter("/api/schools"),
      new SubjectsRouter("/api/subjects")
      //new TeachersRouter("/api/teachers")
    ];
  }

  applyRoutes(app) {
    this.controllers.forEach(controller => {
      app.use(controller.route, controller.router);
    });
  }
}
