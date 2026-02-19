console.log("              Задание 1        ");

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);



console.log("              Задание 2        ");

let myBrowser = {
    name: "Microsoft Internet Explorer",
    version: "9.0"
};

for (let key in myBrowser) {
    console.log(key + ": " + myBrowser[key]);
}



console.log("              Задание 3        ");

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty({}));
console.log(isEmpty({ name: "John" }));



console.log("              Задание 4        ");

const userConst = {
    name: "John"
};

userConst.name = "Pete";
console.log("Изменение свойства работает:", userConst.name);



console.log("              Задание 5        ");

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

let obj = {
    width: 600,
    height: 800,
    name: "Daniil"
};

multiplyNumeric(obj);
console.log(obj);



console.log("              Задание 6        ");

let calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read(8, 13);
console.log("Сумма:", calculator.sum());
console.log("Произведение:", calculator.mul());



console.log("              Задание 7        ");

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log("Ступенька:", this.step);
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();



console.log("              Задание 8        ");

function Browser(name, version) {
    this.name = name;
    this.version = version;

    this.aboutBrowser = function () {
        console.log("Браузер:", this.name, "Версия:", this.version);
    };
}

let myBrowser2 = new Browser("Microsoft Internet Explorer", "9.0");
myBrowser2.aboutBrowser();



console.log("              Задание 9        ");

function Employee(name, department, phone, salary) {
    this.name = name;
    this.department = department;
    this.phone = phone;
    this.salary = salary;

    this.showInfo = function () {
        console.log("Имя:", this.name);
        console.log("Отдел:", this.department);
        console.log("Телефон:", this.phone);
        console.log("Зарплата:", this.salary);
    };
}

let emp1 = new Employee("Даниил", "IT", "777-888", 500000);
emp1.showInfo();



console.log("              Задание 10        ");

function Calculator() {
    this.read = function (a, b) {
        this.a = a;
        this.b = b;
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}

let calc = new Calculator();
calc.read(8, 10);
console.log("Сумма:", calc.sum());
console.log("Произведение:", calc.mul());



console.log("              Задание 11        ");

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function (a) {
        this.value += a;
    };
}

let accumulator = new Accumulator(1);
accumulator.read(10);
accumulator.read(5);
console.log("Текущее значение:", accumulator.value);
