import Teacher from "./teacher.model";

class TeachersService {
  constructor(teacher) {
    this.teacher = teacher;
  }
}

export default new TeachersService(Teacher);
