import Hour from "./hour.model";

class HoursService {
  constructor(hour) {
    this.hour = hour;
  }

  async getHourById(id) {
    return await this.hour.findOne({
      where: { id },
    });
  }

  async getHoursByUserId(userId) {
    return await this.hour.findAll({
      where: { userId },
    });
  }

  async setHourById({ id, startHour, finishHour }) {
    return await this.hour.update(
      {
        startHour,
        finishHour,
      },
      { where: { id } }
    );
  }

  async addHourToUser({ startHour, finishHour, userId }) {
    return await this.hour.create({
      startHour,
      finishHour,
      userId,
    });
  }

  async createUsersDefaultHours(userId) {
    let hoursIds = [];
    for (let hourId = 0; hourId < 15; hourId++) {
      const ret = await this.addHourToUser({
        userId,
        startHour: 0,
        finishHour: 0,
      });
      hoursIds.push(ret.id);
    }
    return hoursIds;
  }
}

export default new HoursService(Hour);
