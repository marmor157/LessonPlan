import { Router } from "express";

import authenticate from "../../middlewares/authenticate";
import { LessonsService } from "./lessons.service";

export default class LessonsRouter {
  constructor(route) {
    this.route = route;
    this.router = new Router();
    this.configure();
  }

  configure() {}
}
