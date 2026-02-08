console.log("           ЭЛЕМЕНТЫ ЯЗЫКА             ")
// Задание 1
console.log("            Задание 1:       ")
let num = 20;
let str = "Привет";
let bool = true;
let arr = [1, 2, 3, 4, 5];
let obj = { name: "Даниил" };


console.log("Тип num:", typeof num);
console.log("Тип str:", typeof str);
console.log("Тип bool:", typeof bool);
console.log("Тип arr:", typeof arr);
console.log("Тип obj:", typeof obj);

// Задание 2
console.log("                    ")
console.log("            Задание 2:       ")
let x = 20;
let y = 8;
console.log("x == y?", x == y);
console.log("x < y?", x < y);
console.log("x <= y?", x <= y);
console.log("x > y?", x > y);


// Задание 3
console.log("                    ")
console.log("            Задание 3:       ")
let a = false;
let b = null;
let c = undefined;
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

// Задание 4
console.log("                    ")
console.log("            Задание 4:       ")
console.log('"1" + 2 + 3 =', "1" + 2 + 3); 
console.log('1 + 2 + "3" =', 1 + 2 + "3"); 
console.log('"1" - 2 =', "1" - 2); 
console.log('"1" + -2 =', "1" + -2); 
console.log('"1" + "1" - "1" =', "1" + "1" - "1"); 
console.log('"foo" + - "bar" =', "foo" + - "bar"); 
console.log('0 == "0" =', 0 == "0"); 
console.log('0.5 + 0.1 == 0.6 =', 0.5 + 0.1 == 0.6); 
console.log('0.1 + 0.2 == 0.3 =', 0.1 + 0.2 == 0.3); 
console.log('true + true + true == 3 =', true + true + true == 3); 
console.log('true == 1 =', true == 1); 
console.log('true === 1 =', true === 1); 
console.log('1 < 2 < 3 =', 1 < 2 < 3); 
console.log('3 > 2 > 1 =', 3 > 2 > 1); 
console.log('9007199254740991 + 1 == 9007199254740991 + 2 =', 9007199254740991 + 1 == 9007199254740991 + 2); 
console.log('Math.sqrt(-1) == Math.sqrt(-1) =', Math.sqrt(-1) == Math.sqrt(-1));

// Задание 5
console.log("                    ")
console.log("            Задание 5:       ")
let str1 = "Кто ";
let str2 = "ты ";
let str3 = "такой?";
let concatenation = str1 + str2 + str3;      
console.log("concatenation:", concatenation);


// Задание 6
console.log("                    ")
console.log("            Задание 6:       ")
let strNum = "20";
let aNum = 5;
console.log('str + a =', strNum + aNum); 
console.log('str - a =', strNum - aNum); 
console.log('str * "2" =', strNum * "2");
console.log('str / 2 =', strNum / 2)

// Задание 7
console.log("                    ")
console.log("            Задание 7:       ")
let aStr = "12";
let bStr = "7.15";
let remainder = Math.round(Number(aStr) % Number(bStr));
console.log("Остаток от деления:", remainder);


// Задание 8
console.log("                    ")
console.log("            Задание 8:       ")
let xVal = 10;
let result = (xVal ** 2 - 7 * xVal + 10) / (xVal ** 2 - 8 * xVal + 12);
console.log("Результат выражения при x =", xVal, ":", result);

// Задание 9
console.log("                    ")
console.log("            Задание 9:       ")
let email = "1234asd@mail.com";
if (email.includes("@")) {
    console.log("Email корректный (содержит @)");
} else {
    console.log("Внимание: email не содержит символ @!");
}

console.log("                    ")
console.log("           Управление потоком             ")

// Задание 1
console.log("                    ")
console.log("            Задание 1:       ")
let age = 20;

if (age >= 18 && age <= 30) {
    console.log("Для молодежи");
} else if (age >= 1 && age <= 17) {
    console.log("Для детей");
} else {
    console.log("Для всех возрастов");
}

// Задание 2
console.log("                    ")
console.log("            Задание 2:       ")
let num1 = 1;
let num2 = 100;
let max = (num1 > num2) ? num1 : num2;
console.log("Максимальное число:", max);

// Задание 3
console.log("                    ")
console.log("            Задание 3:       ")
let crowCount = 5;

switch (crowCount) {
    case 1:
        console.log("На ветке сидит 1 ворона");
        break;
    case 2:
    case 3:
    case 4:
        console.log(`На ветке сидит ${crowCount} вороны`);
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log(`На ветке сидит ${crowCount} ворон`);
        break;
    default:
        console.log("Число должно быть от 1 до 10");
}


// Задание 4
console.log("                    ")
console.log("            Задание 4:       ")
console.log("Нечётные числа (while):");
let i = 1;
while (i <= 50) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

console.log("Нечётные числа (for):");
for (let j = 1; j <= 50; j++) {
    if (j % 2 !== 0) {
        console.log(j);
    }
}
// Задание 5
console.log("                    ")
console.log("            Задание 5:       ")
let sum = 0;

for (let k = 1; k <= 15; k++) {
    if (k !== 5 && k !== 7) {
        sum += k;
    }
}
console.log("Сумма чисел от 1 до 15 (без 5 и 7):", sum);

// Задание 6
console.log("                    ")
console.log("            Задание 6:       ")
let base = 2;
let exponent = 12;
let powerResult = 1;
let counter = 0;
while (counter < exponent) {
    powerResult *= base;
    counter++;
}

console.log(`${base} в степени ${exponent} = ${powerResult}`);