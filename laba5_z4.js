console.log("Задание 4");

function createSumWithDelay(initialNumber) {
    return new Promise((resolve, reject) => {
        if (typeof initialNumber !== 'number') {
            reject("Ошибка: Первый аргумент должен быть числом");
            return;
        }
        
        let count = 0;
        let currentSum = initialNumber;
        const secondNumber = 2;
        
        console.log(`Начальное значение: ${currentSum}, второе число: ${secondNumber}`);
        
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


console.log("\n--- Успешное выполнение ---");
createSumWithDelay(3)
    .then(result => console.log("Результат:", result))
    .catch(error => console.log("Ошибка:", error));

setTimeout(() => {
    console.log("\n--- Выполнение с ошибкой ---");
    createSumWithDelay("x")
        .then(result => console.log("Результат:", result))
        .catch(error => console.log("Ошибка:", error));
}, 12000);