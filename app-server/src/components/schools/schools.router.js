import { Router } from "express";

import authenticate from "../../middlewares/authenticate";
import SchoolsService from "./schools.service";

export default class SchoolsRouter {
  constructor(route) {
    this.route = route;
    this.router = new Router();
    this.configure();
  }

  configure() {}
}
