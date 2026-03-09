console.log("Задание 3");

// Асинхронная функция f_i(x)
function createAsyncFunction(index, func) {
    return function(x) {
        return new Promise(resolve => {
            setTimeout(() => {
                const result = func(x);
                console.log(`f${index} = ${result}`);
                resolve(result);
            }, Math.floor(Math.random() * 500));
        });
    };
}

// Наборы функций
const functionsSet = {
    example: [
        createAsyncFunction(1, (x) => x * x),
        createAsyncFunction(2, (x) => 2 * x),
        createAsyncFunction(3, (x) => -2)
    ],
    n2: [
        createAsyncFunction(1, (x) => x + 3),
        createAsyncFunction(2, (x) => x * 2)
    ],
    n4: [
        createAsyncFunction(1, (x) => x),
        createAsyncFunction(2, (x) => x * x),
        createAsyncFunction(3, (x) => x * x * x),
        createAsyncFunction(4, (x) => 5)
    ],
    n6: [
        createAsyncFunction(1, (x) => x + 1),
        createAsyncFunction(2, (x) => x * 2),
        createAsyncFunction(3, (x) => x - 3),
        createAsyncFunction(4, (x) => Math.floor(x / 2)),
        createAsyncFunction(5, (x) => x * x),
        createAsyncFunction(6, (x) => 10)
    ]
};

// Вычисление F(x) с промисами
function calculateFWithPromises(x, functions) {
    console.log(`\nF(${x}) для ${functions.length} функций:`);
    
    let promise = Promise.resolve(0);
    
    functions.forEach((func, index) => {
        promise = promise.then(prevResult => {
            return func(x).then(currentResult => {
                const newResult = prevResult + currentResult;
                console.log(`Промежуточная сумма: ${newResult}`);
                return newResult;
            });
        });
    });
    
    return promise;
}

async function runAll() {
    await calculateFWithPromises(3, functionsSet.example);
    await calculateFWithPromises(5, functionsSet.n2);
    await calculateFWithPromises(2, functionsSet.n4);
    await calculateFWithPromises(3, functionsSet.n6);
}

runAll().then(() => console.log("\nВсе вычисления завершены!"));