import { Router } from "express";

import authentiacte from "../../middlewares/authenticate";
import { HoursService } from "./hours.service";

export default class HoursRouter {
  constructor(route) {
    this.route = route;
    this.router = new Router();
    this.configure();
  }

  configure() {}
}
