type Lecturer = {
  name: string;
  surname: string;
  position: number;
  company: string;
  experience: number;
  courses: string;
  contacts: number;
};

class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  _areas: Array<number> = [];
  _lecturers: Array<Lecturer> = []; // Name, surname, position, company, experience, courses, contacts

  get areas(): Array<number> {
    return this._areas;
  }

  get lecturers(): Lecturer[] {
    return this._lecturers;
  }

  addArea(area: number): void {
    this._areas.push(area);
  }

  removeArea(area: number): void {
    let index = this._areas.indexOf(area);

    if (index !== -1) {
      this._areas.splice(index, 1);
    }
  }

  addLecturer(lecturer: Lecturer): void {
    this._lecturers.push(lecturer);
  }

  removeLecturer(lecturerName: string): void {
    this._lecturers = this._lecturers.filter(
      (lecturer) => lecturer.name !== lecturerName
    );
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  _levels: Array<number> = [];
  _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get levels(): Array<number> {
    return this._levels;
  }

  addLevel(level: number): void {
    this._levels.push(level);
  }

  removeLevel(level: number): void {
    let indexOfLevel = this._levels.indexOf(level);

    if (indexOfLevel !== -1) {
      this._levels.splice(indexOfLevel, 1);
    }
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  _name: string;
  _description: string;
  _groups: Array<string> = [];

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get groups(): Array<string> {
    return this._groups;
  }

  addGroup(group: string): void {
    this._groups.push(group);
  }

  removeGroup(groupName: string): void {
    this._groups = this._groups.filter((group) => group !== groupName);
  }
}

type StudentInfo = {
  name: string;
  surname: string;
  area: number;
  fullname: string;
};

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods
  _status: boolean = true;
  _directionName: string;
  _levelName: string;
  _students: Array<StudentInfo> = []; // Modify the array so that it has a valid toSorted method*

  constructor(directionName: string, levelName: string) {
    this._directionName = directionName;
    this._levelName = levelName;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  get students(): Array<StudentInfo> {
    return this._students;
  }

  addStudent(name: string, surname: string, area: number) {
    const student = {
      name: name,
      surname: surname,
      area: area,
      fullname: `${name} ${surname}`,
    };

    this._students.push(student);
  }

  removeStudent(studentFullName: string) {
    this._students = this._students.filter(
      (group: StudentInfo) => group.fullname !== studentFullName
    );
  }

  getPerformanceRating() {
    const students = this._students;

    for (const student of students) {
      console.log(student);
    }
  }

  showPerformance(): Array<StudentInfo> {
    const sortedStudents = this._students.sort(
      (a: StudentInfo, b: StudentInfo) => a.area - b.area
    );
    return sortedStudents;
  }
}

interface Grade {
  [key: string]: number;
}

class Student {
  // implement 'set grade' and 'set visit' methods

  _firstName: string;
  _lastName: string;
  _birthYear: number;
  _grades: { [key: string]: number } = {}; // workName: mark
  _visits: { [key: number]: boolean } = {}; // lesson: present

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName() {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  get age() {
    return new Date().getFullYear() - this._birthYear;
  }

  setGrade(workName: string, mark: number): void {
    this._grades[workName] = mark;
  }

  setVisit(lesson: number, present: boolean): void {
    this._visits[lesson] = present;
  }

  getPerformanceRating(): number {
    const gradeValues = (<any>Object).values(this._grades);
    const visitValues = (<any>Object).values(this._visits);

    if (!gradeValues.length) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) /
      gradeValues.length;

    const attendancePercentage: number =
      (visitValues.filter((present: boolean) => present !== false).length /
        visitValues.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
