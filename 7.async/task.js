class AlarmClock {
  constructor() {
    this.alarmCollection = [],
    this.timerId = null
  }

  addClock(time, callback, id) {
    if(id === undefined) {
      throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
    }

    let resultOfSome = this.alarmCollection.some((item) => item.id === id);
    if (resultOfSome) {
      return console.error("Будильник с таким id уже существует");
    } else {
      this.alarmCollection.push({id: id, time: time, callback: callback});
    }
  }

  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter((item) => {item.id !== id});
  }

  getCurrentFormattedTime() {
    let date = new Date();
    let hours = addZero(date.getHours());
    let minutes = addZero(date.getMinutes());
    return (hours + ":" + minutes);

    function addZero(item) {
      if (item < 10) {
        item = "0" + item;
      }
      return item;
    }
  }

  start() {
    let checkClock = alarm => {
      if(this.getCurrentFormattedTime() === alarm.time) {
        return alarm.callback;
      }
    }
    if (this.timerId === null) {
      let abc = () => this.alarmCollection.forEach(checkClock);
      this.timerId = setInterval(abc, 500);
    }
  }

  stop() {
    if (this.timerId !== null) {
      this.timerId = null;
      clearInterval(this.timerId)
    }
  }

  printAlarms() {
    console.log("Печать всех будильников в количестве : " + this.alarmCollection.length);
    this.alarmCollection.forEach((item) =>
    console.log("Будильник №" + item.id + " заведен на " + item.time))
  }

  clearAlarms() {
    this.alarmCollection = [];
  }
}
