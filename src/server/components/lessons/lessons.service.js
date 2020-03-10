import Lesson from "./lesson.model";
import { User } from "../users";
import { Hour } from "../hours";
import { Op } from "sequelize";
import { Subject } from "../subjects";

class LessonSerivce {
  constructor(lesson) {
    this.lesson = lesson;
  }

  async addLesson({ userId, roomNumber, day, subjectId, hourId }) {
    return await this.lesson.create({
      roomNumber,
      day,
      userId,
      subjectId,
      hourId
    });
  }

  async createUsersDefaultLessons({ userId, hoursId }) {
    for (let day = 1; day < 6; day++) {
      hoursId.forEach(async hourId => {
        await this.addLesson({
          userId,
          roomNumber: "",
          day,
          hourId,
          subjectId: 1
        });
      });
    }
  }

  async getCurrentLesson(userId) {
    const currDate = new Date();
    const minutesPastMidnight =
      currDate.getHours() * 60 + currDate.getMinutes();

    const currentLesson = this.lesson.findOne({
      where: {
        userId,
        day: currDate.getDay()
      },
      include: [
        {
          model: Hour,
          where: {
            [Op.or]: {
              [Op.and]: {
                startHour: {
                  [Op.lte]: minutesPastMidnight
                },
                finishHour: {
                  [Op.gt]: minutesPastMidnight
                }
              }
            }
          }
        },
        {
          model: Subject
        }
      ]
    });

    return currentLesson;
  }
}

export default new LessonSerivce(Lesson);
