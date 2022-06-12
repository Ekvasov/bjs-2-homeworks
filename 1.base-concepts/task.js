'use strict';
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4*a*c;
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr[0] = (-b)/(2*a);
  } else {
    arr[0] = (-b + Math.sqrt(discriminant) )/(2*a);
    arr[1] = (-b - Math.sqrt(discriminant) )/(2*a);
  }
  // код для задачи №1 писать здесь
  return arr; // array
}

'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {//ставка, взнос, сумма кредита, дата
  let totalAmount;
  let message;
  // приводим значение percent к числовому типу, либо возвращаем сообщение
  let percentChecked = checkType(percent);
  if (isNaN(percentChecked)) {
    message = 'Параметр "Процентная ставка" содержит неправильное значение ' + '"' + percent + '"';
    return message;
  }
  // приводим значение contribution к числовому типу, либо возвращаем сообщение
  let contributionChecked = checkType(contribution);
  if (isNaN(contributionChecked)) {
    message = 'Параметр "Начальный взнос" содержит неправильное значение ' + '"' + contribution + '"';
    return message;
  }
  // приводим значение amount к числовому типу, либо возвращаем сообщение
  let amountChecked = checkType(amount);
  if (isNaN(amountChecked)) {
    message = 'Параметр "Общая стоимость" содержит неправильное значение ' + '"' + amount + '"';
    return message;
  }
  // приводим значение date к числовому типу, либо возвращаем сообщение
  let dateChecked = checkType(+date);
  if (isNaN(dateChecked)) {
    message = 'Параметр date содержит неправильное значение ' + date;
    return message;
  }

  //совершаем расчеты
  let creditBody = amount - contribution;//тело кредита
  let start = Date.now();//начало кредитования
  let end = +date;//конец кредитования
  let timeOfCredit = Math.trunc((end - start)/1000/60/60/24/30);//сколько месяцев выплачивать кредит
  let eachMonthPayment = creditBody*((percent/1200) + ((percent/1200)/(((1 + (percent/1200))**timeOfCredit) - 1)));//ежемесячная выплата
  let totalSumm = eachMonthPayment*timeOfCredit;//всего выплачено
  totalAmount = totalSumm.toFixed(2);//округление до двух знаков после точки

  //функция проверки и приведения к числовому типу
  function checkType(variable) {
    if (typeof variable !== 'number') {
      variable = +variable;
    }
    return variable;
  }
  return +totalAmount;
}
