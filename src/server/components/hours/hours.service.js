import Hour from "./hour.model";

class HoursService {
  constructor(hour) {
    this.hour = hour;
  }

  async getHourById(id) {
    return await this.hour.findOne({
      where: { id }
    });
  }

  async getHoursByUserId(userId) {
    return await this.hour.find({
      where: { userId }
    });
  }

  async setHourById({ id, startHour, finishHour }) {
    return await this.hour.update(
      {
        startHour,
        finishHour
      },
      { where: { id } }
    );
  }

  async addHourToUser({ startHour, finishHour, userId }) {
    return await this.hour.create({
      startHour,
      finishHour,
      userId
    });
  }
}

export default new HoursService(Hour);
