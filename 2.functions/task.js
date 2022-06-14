// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = 100;
  max = -100;
  sum = 0;

  for (i = 0; i < arr.length; i = i + 1) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  avg = sum/arr.length;
  avg = +avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;

  for (k = 0; k < arr.length; k = k + 1) {
    sum = sum + arr[k];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (i = 0; i < arrOfArr.length; i = i + 1) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
  let difference;

  for (k = 0; k < arr.length; k = k + 1) {
    if (arr[k] > max) {
      max = arr[k];
    }
    if (arr[k] < min) {
      min = arr[k];
    }
  }

  difference = max - min;
  return difference;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (i = 0; i < arrOfArr.length; i = i + 1) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }

  return max;
}
