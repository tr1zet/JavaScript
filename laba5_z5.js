console.log("Задание 5");

// Исходные функции из задания 2
function readConfig(name, callback) {
    setTimeout(() => {
        console.log('(1) config from ' + name + ' loaded');
        callback();
    }, Math.floor(Math.random() * 1000));
}

function doQuery(statement, callback) {
    setTimeout(() => {
        console.log('(2) SQL query executed: ' + statement);
        callback();
    }, Math.floor(Math.random() * 1000));
}

function httpGet(url, callback) {
    setTimeout(() => {
        console.log('(3) Page retrieved: ' + url);
        callback();
    }, Math.floor(Math.random() * 1000));
}

function readFile(path, callback) {
    setTimeout(() => {
        console.log('(4) Readme file from ' + path + ' loaded');
        callback();
    }, Math.floor(Math.random() * 1000));
}

// Промисифицированные версии
function readConfigPromise(name) {
    return new Promise(resolve => {
        readConfig(name, resolve);
    });
}

function doQueryPromise(statement) {
    return new Promise(resolve => {
        doQuery(statement, resolve);
    });
}

function httpGetPromise(url) {
    return new Promise(resolve => {
        httpGet(url, resolve);
    });
}

function readFilePromise(path) {
    return new Promise(resolve => {
        readFile(path, resolve);
    });
}

// Функции из задания 3
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


async function task2Async() {
    console.log("--- Задание 2 (async/await) ---");
    console.log('start');
    
    await readConfigPromise('myConfig');
    await doQueryPromise('select * from cities');
    await httpGetPromise('http://google.com');
    await readFilePromise('README.md');
    
    console.log('end');
}


async function task3Async() {
    console.log("\n--- Задание 3 (async/await) ---");
    
    async function calculateFWithAsync(x, functions) {
        console.log(`\nF(${x}) для ${functions.length} функций:`);
        let result = 0;
        
        for (let i = 0; i < functions.length; i++) {
            const currentResult = await functions[i](x);
            result += currentResult;
            console.log(`Промежуточная сумма: ${result}`);
        }
        
        console.log(`Ответ: ${result}`);
        return result;
    }
    
    await calculateFWithAsync(3, functionsSet.example);
    await calculateFWithAsync(5, functionsSet.n2);
    await calculateFWithAsync(2, functionsSet.n4);
    await calculateFWithAsync(3, functionsSet.n6);
}


async function task4Async() {
    console.log("\n--- Задание 4 (async/await) ---");
    
    async function createSumWithDelayAsync(initialNumber) {
        if (typeof initialNumber !== 'number') {
            throw "Ошибка: Первый аргумент должен быть числом";
        }
        
        let count = 0;
        let currentSum = initialNumber;
        const secondNumber = 2;
        
        console.log(`Начальное значение: ${currentSum}, второе число: ${secondNumber}`);
        
        return new Promise((resolve, reject) => {
            const intervalId = setInterval(() => {
                count++;
                currentSum = currentSum + secondNumber;
                console.log(`Итерация ${count}: ${currentSum}`);
                
                if (count >= 5) {
                    clearInterval(intervalId);
                    resolve(`Финальная сумма: ${currentSum}`);
                }
            }, 2000);
        });
    }
    
    console.log("Успешное выполнение:");
    try {
        const result = await createSumWithDelayAsync(3);
        console.log("Результат:", result);
    } catch (error) {
        console.log("Ошибка:", error);
    }
    
    console.log("\nВыполнение с ошибкой:");
    try {
        const result = await createSumWithDelayAsync("x");
        console.log("Результат:", result);
    } catch (error) {
        console.log("Ошибка:", error);
    }
}


async function runAll() {
    await task2Async();
    await task3Async();
    await task4Async();
}

runAll();