console.log("              Задание 1        ");

class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    showTime() {
        console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
    }
}

let clock1 = new Clock(12, 35, 45);
clock1.showTime();



console.log("              Задание 2        ");

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик");
console.log(rabbit.name);



console.log("              Задание 3        ");

class ExtendedClock extends Clock {
    constructor(hours, minutes, seconds, precision = 1000) {
        super(hours, minutes, seconds);
        this.precision = precision;
    }
}

let extClock = new ExtendedClock(12, 35, 45);
extClock.showTime();
console.log("Точность:", extClock.precision);



console.log("              Задание 4        ");

class Stock {
    constructor() {
        this.boxes = [];
        this.counter = 0;
    }

    add(w, v) {
        this.boxes.push({
            id: this.counter,
            w: w,
            v: v
        });
        this.counter++;
    }

    getByW(min_w) {
        for (let i = 0; i < this.boxes.length; i++) {
            if (this.boxes[i].w >= min_w) {
                let id = this.boxes[i].id;
                this.boxes.splice(i, 1);
                return id;
            }
        }
        return -1;
    }

    getByV(min_v) {
        for (let i = 0; i < this.boxes.length; i++) {
            if (this.boxes[i].v >= min_v) {
                let id = this.boxes[i].id;
                this.boxes.splice(i, 1);
                return id;
            }
        }
        return -1;
    }
}

let stock = new Stock();

stock.add(10, 5);
stock.add(20, 8);
stock.add(15, 12);
stock.add(5, 3);
stock.add(30, 20);
stock.add(25, 10);
stock.add(12, 6);
stock.add(40, 25);

console.log("Выдать по весу >= 12:", stock.getByW(12));
console.log("Выдать по весу >= 30:", stock.getByW(30));
console.log("Выдать по объему >= 10:", stock.getByV(10));
console.log("Выдать по объему >= 25:", stock.getByV(25));
console.log("Если нет подходящей:", stock.getByW(100));