//Задача 1
function cachingDecoratorNew(func) {
  let cache = [];

function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш
    let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (objectInCache !== undefined) { // если элемент не найден
        console.log("Из кэша: " + objectInCache.result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + objectInCache.result;
    }

    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({hash, result}) ; // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый)
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
}
return wrapper;
}

//Задача 2
const debounceDecoratorNew = (f, ms) => {
  firstCallFlag = true;
  let timerId;

  return function (...args) {
    if (firstCallFlag) {
      setTimeout(f);
      firstCallFlag = false;
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      f.apply(this, args);
    }, ms);
  }
}


//Задача 3
const debounceDecorator2 = (f, ms) => {
  firstCallFlag = true;
  let timerId;
  f.count = 0;//

  return function (...args) {
    f.count = f.count + 1;//
    if (firstCallFlag) {
      setTimeout(f);
      firstCallFlag = false;
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      f.apply(this, args);
    }, ms);
  }
}
