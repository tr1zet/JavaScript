console.log("              Задание 1        ");

let animal = { jumps: null };

let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log("1:", rabbit.jumps);
delete rabbit.jumps;
console.log("2:", rabbit.jumps);
delete animal.jumps;
console.log("3:", rabbit.jumps);



console.log("              Задание 2        ");

let animal2 = {
    eat() {
        this.full = true;
    }
};

let rabbit2 = {
    __proto__: animal2
};

rabbit2.eat();
console.log("Свойство full у rabbit:", rabbit2.full);



console.log("              Задание 3        ");

let hamster = {
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
    stomach: []
};

let lazy = {
    __proto__: hamster,
    stomach: []
};

speedy.eat("apple");

console.log("Speedy:", speedy.stomach);
console.log("Lazy:", lazy.stomach);



console.log("              Задание 4        ");

String.prototype.size = 12;

String.prototype.write = function () {
    console.log("Цвет:", this.color);
    console.log("Размер:", this.size);
    console.log("Текст:", this.toString());
};

let s = new String("Это строка");
s.color = "red";
s.size = 20;
s.write();

let s2 = new String("Вторая строка");
s2.color = "black";
s2.write();



console.log("              Задание 5        ");

function Rabbit() {}
Rabbit.prototype = { eats: true };

let rabbit3 = new Rabbit();
console.log("eats:", rabbit3.eats);
