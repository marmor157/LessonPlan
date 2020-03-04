export default class Router {
  constructor() {
    this.controllers = [];
  }

  applyRoutes(app) {
    this.controllers.forEach(controller => {
      app.use(controller.route, controller.router);
    });
  }
}
