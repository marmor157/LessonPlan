import { Router } from "express";

import authentiacte from "../../middlewares/authenticate";
import SubjectsService from "./subjects.service";

export default class SubjectsRouter {
  constructor(route) {
    this.route = route;
    this.router = new Router();
    this.configure();
  }

  configure() {}
}
