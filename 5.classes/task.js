//Задача №1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  fix() {
    this.state = this.state*1.5;
  }

  set state(value) {
    if(value < 0) {this._state = 0}
    else if(value > 100) {this._state = 100}
    else {this._state = value}
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "detective";
  }
}

//Задача №2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.addBook = function(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    };

    this.findBookBy = function(type, value) {
      for (let i in this.books) {
        if (this.books[i][type] == value) {
          return this.books[i];
        }
      }
        return null;
    };

    this.giveBookByName = function(bookName) {
      for (let i in this.books) {
        if (this.books[i].name == bookName) {
          let findBook = this.books[i];
          this.books.splice(i, 1);
          return findBook;
        }
      }
      return null;
    }
  }
}

//Задача №3
class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];

    this.addMark = function(mark, subject) {
      if(mark > 5 || mark < 1) {
        return console.log("Ошибка, оценка должна быть числом от 1 до 5")
      }

      if(this.marks.subject === undefined){
        this.marks.push(subject);
        this.marks.subject = [];
        this.marks.subject[0] = mark;
      } else {
        this.marks.subject.push(mark);
      }
    };

    this.getAverageBySubject = function(subject) {
      if(this.marks.subject === undefined) {
        return console.log("Несуществующий предмет");
      }

      const average = this.marks.subject.reduce((acc, item, idx, arr) => {
        if (idx === arr.length - 1) {
          return (acc + item) / arr.length;
        } else {
          return acc + item;
        }
      });
      return average;
    };

    this.getAverage = function() {
      let array = [];
      for (let i in this.marks) {
        array[i] = this.getAverageBySubject(this.marks[i])
      }

      for (let item of array) {
        let average = array.reduce((acc, item, idx, arr) => {
          if (idx === arr.length - 1) {
            return (acc + item) / arr.length;
          } else {
            return acc + item;
          }
        });
        return average;
      }
    }
  }
}
