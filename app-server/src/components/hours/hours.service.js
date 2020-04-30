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
    for (let hour = 0; hour < 15; hour++) {
      const ret = await this.addHourToUser({
        userId,
        startHour: 450 + 55 * hour,
        finishHour: 450 + 55 * hour + 45,
      });
      hoursIds.push(ret.id);
    }
    return hoursIds;
  }
}

export default new HoursService(Hour);
