function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    this.marks = [];
    this.marks[0] = mark;
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...args) {
  if(this.marks === undefined){
    this.marks = [];
    args.forEach((item, idx) => this.marks[idx] = item);
  } else {
  args.forEach((item) => this.marks.push(item));
  }
}

Student.prototype.getAverage = function () {
  const average = this.marks.reduce((acc, item, idx, arr) => {
    if (idx === arr.length - 1) {
      return (acc + item) / arr.length;
    } else {
      return acc + item;
    }
  });
  return average;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
