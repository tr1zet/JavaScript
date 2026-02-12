console.log("           ФУНКЦИИ          ")
//Задание 1
console.log("        Задание 1:     ")
// Способ 1
function subtract1(a, b) {
    let result = a - b;
    console.log("Разность чисел " + a + " и " + b + " = " + result);
}
// Способ 2
function subtract2(a, b) {
    return a - b;
}
subtract1(59, 3);
let result = subtract2(59, 3);
console.log("Разность чисел  = " + result);

// Задание 2
console.log("                    ")
console.log("        Задание 2:     ")
function checkAge(age) {
    if (age < 18) {
        console.log("Привет, малыш!");
    } else {
        console.log("Здравствуйте, юноша!");
    }
}

checkAge(3)
checkAge(22);


// Задание 3
console.log("                    ")
console.log("        Задание 3:     ")
function maxOfThree(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

console.log("Наибольшее: " + maxOfThree(22, -2, 88));


// Задание 4
console.log("                    ")
console.log("        Задание 4:     ")
let variable = "Глобальная переменная";
function f() {
    let variable = "Локальная переменная";
    console.log(variable);
}
f();
console.log(variable);


// Задание 5
console.log("                    ")
console.log("        Задание 5:     ")
function calculateU(x, y, z) {
    let max1 = Math.max(x, y);
    let max2 = Math.max(x + y, z);
    let denominator = Math.max(0.5, x + z);
    
    let u = (max1 + max2) / (denominator * denominator);
    return u;
}
console.log("u = " + calculateU(5, 8, 12));



// Задание 6
console.log("                    ")
console.log("        Задание 6:     ")
function perimeter(coordinates) {
    let perimeter = 0;
    let n = coordinates.length / 2;
    
    for (let i = 0; i < n; i++) {
        let x1 = coordinates[i * 2];
        let y1 = coordinates[i * 2 + 1];
        let x2 = coordinates[((i + 1) % n) * 2];
        let y2 = coordinates[((i + 1) % n) * 2 + 1];
        
        let side = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        perimeter += side;
    }
    
    return perimeter;
}
console.log("Периметр: " + perimeter([0, 0, 8, 0, 0, 10]));


// Задание 7
console.log("                    ")
console.log("        Задание 7:     ")
function sequenceElement(n) {
    if (n === 1) return 1;
    
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += sequenceElement(i);
    }
    return Math.sin(sum);
}

console.log("1-й член: " + sequenceElement(1));
console.log("2-й член: " + sequenceElement(2));
console.log("3-й член: " + sequenceElement(3));
console.log("4-й член: " + sequenceElement(4));
console.log("5-й член: " + sequenceElement(5));