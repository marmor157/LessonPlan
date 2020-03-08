import Subject from "./subject.model";

class SubjectsService {
  constructor(subject) {
    this.subject = subject;
  }
}

export default new SubjectsService(Subject);
