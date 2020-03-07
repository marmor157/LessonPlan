import { UsersRouter } from "./users";

export default class Router {
  constructor() {
    this.controllers = [new UsersRouter("/api/users")];
  }

  applyRoutes(app) {
    this.controllers.forEach(controller => {
      app.use(controller.route, controller.router);
    });
  }
}
