import { Router } from "express";

import authenticate from "../../middlewares/authenticate";
import TeachersService from "./teachers.service";

export default class TeachersRouter {
  constructor(route) {
    this.route = route;
    this.router = new Router();
    this.configure();
  }

  configure() {}
}
