//Задача №1

function parseCount(value) {
  if(isNaN(Number.parseInt(value))) {
    throw new Error("Невалидное значение");
  }
  return Number.parseInt(value);
}

function validateCount(value) {
  try {return parseCount(value)}
  catch(error) {return error}
}


//Задача №2

class Triangle {

  constructor (side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    if ((side1 + side2) < side3 || (side2 + side3) < side1 || (side1 + side3) < side2) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

    getPerimeter() {
      const perimeter = this.side1 + this.side2 + this.side3;
      return perimeter;
    };

    getArea() {
      const p = (this.side1 + this.side2 + this.side3) / 2;
      const area = Math.sqrt(p*(p - this.side1)*(p - this.side2)*(p - this.side3));
      return +area.toFixed(3);
    };
}

function getTriangle(a, b, c) {

  try {
    const triangle = new Triangle(a, b, c);
    return triangle;
  } catch(error) {
    let triangle = {
      getArea: () => {return "Ошибка! Треугольник не существует"},
      getPerimeter: () => {return "Ошибка! Треугольник не существует"}
    }
    return triangle;
  }

}
