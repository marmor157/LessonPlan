import User from "./user.model";

class UsersService {
  constructor(user) {
    this.user = user;
  }

  async getUserWhere(where) {
    return await this.user.findOne(where);
  }

  async getUserById(id) {
    return await this.getUserWhere({ where: { id } });
  }

  async getUserByUsername(username) {
    return await this.getUserWhere({ where: { username } });
  }

  async getUsers() {
    return await this.user.findAll();
  }

  async getUsersWhere(where) {
    return await this.user.findAll({ where });
  }

  async saveUser(user) {
    return await this.user.create(user);
  }

  async deleteUserById(id) {
    return await this.user.destroy({ where: { id } });
  }

  async deleteUserByUsername(username) {
    return await this.user.destroy({ where: { username } });
  }

  async updateUserById(id, params) {
    return await this.user.update({ where: { id } }, params);
  }
}

export default new UsersService(User);
