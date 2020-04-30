import Subject from "./subject.model";

class SubjectsService {
  constructor(subject) {
    this.subject = subject;
  }

  async getUsersSubjects() {
    const subjects = await this.subject.findAll();

    return subjects;
  }

  async addSubject({ shortName, longName }) {
    const data = await this.subject.create({
      shortName,
      longName
    });

    return data;
  }
}

export default new SubjectsService(Subject);
