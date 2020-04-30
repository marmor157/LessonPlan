import { Router } from "express";

import authenticate from "../../middlewares/authenticate";
import LessonsService from "./lessons.service";

export default class LessonsRouter {
  constructor(route) {
    this.route = route;
    this.router = new Router();
    this.configure();
  }

  configure() {
    this.router.get("/", authenticate, async (req, res, next) => {
      const data = await LessonsService.getAllLessons(req.userID);

      res.status(200).json(data);
      next();
    });

    this.router.get("/current", authenticate, async (req, res, next) => {
      const data = await LessonsService.getCurrentLesson(req.userID);

      res.status(200).json(data);
      next();
    });

    this.router.get("/today", authenticate, async (req, res, next) => {
      const data = await LessonsService.getTodaysLessons(req.userID);

      res.status(200).json(data);
      next();
    });

    this.router.get("/next", authenticate, async (req, res, next) => {
      const data = await LessonsService.getNextLesson(req.userID);

      res.status(200).json(data);
      next();
    });
  }
}
