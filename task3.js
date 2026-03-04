// Асинхронная функция для вычисления fi(x)
function calculateAsync(f, x, index, callback) {
    setTimeout(() => {
        const result = f(x);
        console.log(`f${index} дает значение ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 500));
}

// Функция для последовательного вычисления
function calculateF(x, functions, notification) {
    let intermediateResult = 0;
    let currentIndex = 0;
    
    function next() {
        if (currentIndex < functions.length) {
            calculateAsync(functions[currentIndex], x, currentIndex + 1, function(result) {
                intermediateResult += result;
                notification(currentIndex + 1, intermediateResult);
                currentIndex++;
                next();
            });
        } else {
            console.log(`Таким образом, ответ для F(x): ${intermediateResult}`);
        }
    }
    
    next();
}

// Функция уведомления
function showProgress(index, result) {
    console.log(`f${index} дает значение, промежуточный результат ${result}`);
}


console.log("=== F(x) = x^2 + 2x - 2, x = 3 ===");
// f1(x) = x^2, f2(x) = 2x, f3(x) = -2
const functions3 = [
    (x) => x * x,
    (x) => 2 * x,
    (x) => -2
];
calculateF(3, functions3, showProgress);

setTimeout(() => {
    console.log("\n=== Пример с n = 2 ===");
    // f1(x) = x^2, f2(x) = 3x
    const functions2 = [
        (x) => x * x,
        (x) => 3 * x
    ];
    calculateF(4, functions2, showProgress);
}, 2000);

setTimeout(() => {
    console.log("\n=== Пример с n = 4 ===");
    // f1(x) = 2x, f2(x) = x^2, f3(x) = -5, f4(x) = x
    const functions4 = [
        (x) => 2 * x,
        (x) => x * x,
        (x) => -5,
        (x) => x
    ];
    calculateF(2, functions4, showProgress);
}, 4000);

setTimeout(() => {
    console.log("\n=== Пример с n = 6 ===");
    // f1(x) = x, f2(x) = x^2, f3(x) = x^3, f4(x) = -10, f5(x) = 2x, f6(x) = -x
    const functions6 = [
        (x) => x,
        (x) => x * x,
        (x) => x * x * x,
        (x) => -10,
        (x) => 2 * x,
        (x) => -x
    ];
    calculateF(2, functions6, showProgress);
}, 6000);