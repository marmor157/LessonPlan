import School from "./school.model";

class SchoolsService {
  constructor(school) {
    this.school = school;
  }
}

export default new SchoolsService(School);
