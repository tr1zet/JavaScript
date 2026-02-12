console.log("           МАССИВЫ          ");
//Задание 1
console.log("        Задание 1:     ");
let arr = new Array(5);
arr[0] = 20;
arr[1] = 40;
arr[2] = 60;
arr[3] = 90;
arr[4] = 100;
console.log("Элемент  индексом 2: " + arr[2]);
console.log("Количество элементов: " + arr.length);
arr.splice(1, 1);

console.log("Элементы массива:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Задание 2
console.log("                    ");
console.log("        Задание 2:     ");
let countries = ["Россия", "США", "Китай", "Франция"];
let population = [125, 512, 1667, 22];

// Функция для вывода
function printCountries(countries, population) {
    console.log("Цикл for:");
    for (let i = 0; i < countries.length; i++) {
        console.log(countries[i] + ": " + population[i] + " млн");
    }
    console.log("Цикл for in:");
    for (let i in countries) {
        console.log(countries[i] + ": " + population[i] + " млн");
    }
}

printCountries(countries, population);

// Задание 3
console.log("                    ");
console.log("        Задание 3:     ");
let months = ["January", "February", "March", "April", "May", "June"];
let lastElement = months.pop();
console.log(months.join(" "));
console.log(lastElement);

// Задание 4
console.log("                    ");
console.log("        Задание 4:     ");
let sliceArray = [1, 2, 3, 4, 5, 6, 7];
let firstThree = sliceArray.slice(0, 3);
console.log(firstThree);

// Задание 5
console.log("                    ");
console.log("        Задание 5:     ");
let spliceArray = [1, 2, 3, 4, 5, 6, 7];
let removedElements = spliceArray.splice(1, 3);
console.log(spliceArray);
console.log("Удаленные элементы: " + removedElements);


// Задание 6
console.log("                    ");
console.log("        Задание 6:     ");
let reverseArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray.reverse();
console.log(reversedArray);

// Задание 7
console.log("                    ");
console.log("        Задание 7:     ");
let mixedArray = ['c', 5, 2, 'b', 3, 1, 4, 'a'];
mixedArray.sort();
console.log(mixedArray);

// Задание 8
console.log("                    ");
console.log("        Задание 8:     ");
let joinArray = [1, 2, 3, 4, 5];
console.log(joinArray.join('+'));


// Задание 9
console.log("                    ");
console.log("        Задание 9:     ");
let firstArray = [1, 2, 5, 4, 6];
let secondArray = [8, 2, 5, 9, 5];

let combinedArray = firstArray.concat(secondArray);
combinedArray.sort(function(a, b) {
    return a - b;
});

console.log("Отсортированный массив: " + combinedArray);

let middleIndex = Math.floor(combinedArray.length / 2);
let medianValue;

if (combinedArray.length % 2 === 0) {
    medianValue = (combinedArray[middleIndex - 1] + combinedArray[middleIndex]) / 2;
} else {
    medianValue = combinedArray[middleIndex];
}

console.log("Медиана: " + medianValue);

// Задание 10
console.log("                    ");
console.log("        Задание 10:     ");
let randomValues = [];
for (let i = 0; i < 10; i++) {
    randomValues.push(Math.floor(Math.random() * 100));
}

console.log("Исходный массив: " + randomValues);
let maximum = Math.max(...randomValues);
let minimum = Math.min(...randomValues);
console.log("Максимальное значение: " + maximum);
console.log("Минимальное значение: " + minimum);

for (let i = 0; i < randomValues.length; i++) {
    if (randomValues[i] === maximum) {
        randomValues[i] = minimum;
    } else if (randomValues[i] === minimum) {
        randomValues[i] = maximum;
    }
}

console.log("Результат после замены: " + randomValues);


// Задание 11
console.log("                    ");
console.log("        Задание 11:     ");
function checkArrayOrder(arr) {
    let isDescending = true;
    let badIndex = -1;
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            isDescending = false;
            badIndex = i + 1;
            break;
        }
    }
    
    if (isDescending) {
        console.log("Массив упорядочен по убыванию. Обратный порядок:");
        console.log(arr.reverse());
    } else {
        console.log("Первый элемент, нарушающий упорядоченность: индекс " + badIndex);
    }
}

let orderedArray = [5, 4, 3, 2, 1];
let unorderedArray = [5, 4, 6, 2, 1];

checkArrayOrder(orderedArray);
checkArrayOrder(unorderedArray);

// Задание 12
console.log("                    ");
console.log("        Задание 12:     ");

let transformArray = [-1, 2, -3, 4, -5, 6, -7, 8, -9];
console.log("Исходный массив: " + transformArray);
console.log("Индексы:          0, 1,   2,  3,   4,  5,   6,  7,   8");

for (let i = 0; i < transformArray.length; i++) {
    if (i % 2 === 1 && transformArray[i] > 0) {
        console.log(`  Индекс ${i} (нечетный): ${transformArray[i]} * 3 = ${transformArray[i] * 3}`);
        transformArray[i] *= 3;
    }
    if (i % 2 === 0 && transformArray[i] < 0) {
        console.log(`  Индекс ${i} (четный): ${transformArray[i]} / 5 = ${transformArray[i] / 5}`);
        transformArray[i] /= 5;
    }
}

console.log("Преобразованный массив: " + transformArray);

// Задание 13
console.log("                    ");
console.log("        Задание 13:     ");
let task13Matrix = [];
for (let i = 0; i < 5; i++) {
    task13Matrix[i] = [];
    for (let j = 0; j < 5; j++) {
        task13Matrix[i][j] = Math.floor(Math.random() * 20) - 10;
    }
}

console.log("Матрица 5x5:");
for (let i = 0; i < 5; i++) {
    console.log(task13Matrix[i].join("\t"));
}

console.log("Элементы в интервале [-5;7]:");
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (task13Matrix[i][j] >= -5 && task13Matrix[i][j] <= 7) {
            console.log("[" + i + "][" + j + "] = " + task13Matrix[i][j]);
        }
    }
}

// Задание 14
console.log("                    ");
console.log("        Задание 14:     ");
let rowsCount = 4;
let colsCount = 5;
let task14Matrix = [];

for (let i = 0; i < rowsCount; i++) {
    task14Matrix[i] = [];
    for (let j = 0; j < colsCount; j++) {
        task14Matrix[i][j] = Math.floor(Math.random() * 20) + 1;
    }
}

console.log("Матрица " + rowsCount + "x" + colsCount + ":");
for (let i = 0; i < rowsCount; i++) {
    console.log(task14Matrix[i].join("\t"));
}

let sumOfMaxInRows = 0;
for (let i = 0; i < rowsCount; i++) {
    let maxInRow = task14Matrix[i][0];
    for (let j = 1; j < colsCount; j++) {
        if (task14Matrix[i][j] > maxInRow) {
            maxInRow = task14Matrix[i][j];
        }
    }
    sumOfMaxInRows += maxInRow;
}

let productOfMinInCols = 1;
for (let j = 0; j < colsCount; j++) {
    let minInCol = task14Matrix[0][j];
    for (let i = 1; i < rowsCount; i++) {
        if (task14Matrix[i][j] < minInCol) {
            minInCol = task14Matrix[i][j];
        }
    }
    productOfMinInCols *= minInCol;
}

console.log("Сумма наибольших элементов строк: " + sumOfMaxInRows);
console.log("Произведение наименьших элементов столбцов: " + productOfMinInCols);

// Задание 15
console.log("                    ");
console.log("        Задание 15:     ");
let authorBooks = {
    "Пушкин": ["Евгений Онегин", "Капитанская дочка", "Руслан и Людмила"],
    "Есенин": ["Черный человек", "Анна Снегина", "Пугачёв"],
    "Данцова": ["Маникюр для покойника", "Бриллиант мутной воды", "Уха из золотой рыбки"], // ← Добавлена запятая
    "Лермонтов": ["Герой нашего времени", "Демон", "Мцыри"]
};

for (let writer in authorBooks) {
    console.log("Автор: " + writer);
    console.log("Книги:");
    
    for (let k = 0; k < authorBooks[writer].length; k++) {
        console.log("  - " + authorBooks[writer][k]);
    }
    console.log("-------------------");
}
