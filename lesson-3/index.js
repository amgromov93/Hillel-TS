"use strict";
class School {
    constructor() {
        // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
        this._areas = [];
        this._lecturers = []; // Name, surname, position, company, experience, courses, contacts
    }
    get areas() {
        return this._areas;
    }
    get lecturers() {
        return this._lecturers;
    }
    addArea(area) {
        this._areas.push(area);
    }
    removeArea(area) {
        let index = this._areas.indexOf(area);
        if (index !== -1) {
            this._areas.splice(index, 1);
        }
    }
    addLecturer(lecturer) {
        this._lecturers.push(lecturer);
    }
    removeLecturer(lecturerName) {
        this._lecturers = this._lecturers.filter((lecturer) => lecturer.name !== lecturerName);
    }
}
class Area {
    constructor(name) {
        // implement getters for fields and 'add/remove level' methods
        this._levels = [];
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get levels() {
        return this._levels;
    }
    addLevel(level) {
        this._levels.push(level);
    }
    removeLevel(level) {
        let indexOfLevel = this._levels.indexOf(level);
        if (indexOfLevel !== -1) {
            this._levels.splice(indexOfLevel, 1);
        }
    }
}
class Level {
    constructor(name, description) {
        this._groups = [];
        this._name = name;
        this._description = description;
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    get groups() {
        return this._groups;
    }
    addGroup(group) {
        this._groups.push(group);
    }
    removeGroup(groupName) {
        this._groups = this._groups.filter((group) => group !== groupName);
    }
}
class Group {
    constructor(directionName, levelName) {
        // implement getters for fields and 'add/remove student' and 'set status' methods
        this._status = true;
        this._students = []; // Modify the array so that it has a valid toSorted method*
        this._directionName = directionName;
        this._levelName = levelName;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get students() {
        return this._students;
    }
    addStudent(name, surname, area) {
        const student = {
            name: name,
            surname: surname,
            area: area,
            fullname: `${name} ${surname}`,
        };
        this._students.push(student);
    }
    removeStudent(studentFullName) {
        this._students = this._students.filter((group) => group.fullname !== studentFullName);
    }
    getPerformanceRating() {
        const students = this._students;
        for (const student of students) {
            console.log(student);
        }
    }
    showPerformance() {
        const sortedStudents = this._students.sort((a, b) => a.area - b.area);
        return sortedStudents;
    }
}
class Student {
    constructor(firstName, lastName, birthYear) {
        this._grades = {}; // workName: mark
        this._visits = {}; // lesson: present
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
    setGrade(workName, mark) {
        this._grades[workName] = mark;
    }
    setVisit(lesson, present) {
        this._visits[lesson] = present;
    }
    getPerformanceRating() {
        const gradeValues = Object.values(this._grades);
        const visitValues = Object.values(this._visits);
        if (!gradeValues.length)
            return 0;
        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) /
            gradeValues.length;
        const attendancePercentage = (visitValues.filter((present) => present !== false).length /
            visitValues.length) *
            100;
        return (averageGrade + attendancePercentage) / 2;
    }
}
