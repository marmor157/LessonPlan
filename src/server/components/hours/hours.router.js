import { Router } from "express";

import authenticate from "../../middlewares/authenticate";
import HoursService from "./hours.service";

export default class HoursRouter {
  constructor(route) {
    this.route = route;
    this.router = new Router();
    this.configure();
  }

  configure() {
    this.router.get("/", authenticate, async (req, res, next) => {
      const data = await HoursService.getHoursByUserId(req.userID);

      res.status(200).json(data);
    });

    this.router.post("/:hourId", authenticate, async (req, res, next) => {
      const { hourId } = req.params;
      const { userId } = req;
      const { startHour, finishHour } = req.body;

      try {
        const hour = await HoursService.getHourById(hourId);
        if (hour.userId !== userId)
          throw "Given hourId doesnt belengs to given user";

        const data = await HoursService.setHourById({
          id: hourId,
          startHour,
          finishHour,
        });
        res.status(200).json(data);
      } catch (error) {
        res.status(400).json(error);
      }
    });
  }
}
