console.log("Задание 6");

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    wait().then(result => {
        console.log("Результат из функции f:", result);
    });
}

console.log("Вызываем функцию f()...");
f();
console.log("Функция f() вызвана, ожидание 1 секунда");

setTimeout(() => {
    console.log("Программа завершена");
}, 2000);