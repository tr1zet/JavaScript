// Исходные асинхронные функции 
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

function callback() {
    console.log('It is done!');
}

console.log('ЗАДАНИЕ 2a: Последовательное выполнение с КОЛЛБЭКАМИ');
console.log('');

// Вариант a: Коллбэки
console.log('start');

readConfig('myConfig', function() {
    doQuery('select * from cities', function() {
        httpGet('http://google.com', function() {
            readFile('README.md', function() {
                callback();
                console.log('end');
            });
        });
    });
});


setTimeout(() => {;
    console.log('');
    console.log('ЗАДАНИЕ 2b: Последовательное выполнение с уведомлениями');
    console.log('');
    
    // Вариант b: Функции-уведомители
    function notification(message) {
        console.log('Уведомление: ' + message);
    }
    
    console.log('start');
    
    readConfig('myConfig', function() {
        notification('readConfig завершена');
        doQuery('select * from cities', function() {
            notification('doQuery завершена');
            httpGet('http://google.com', function() {
                notification('httpGet завершена');
                readFile('README.md', function() {
                    notification('readFile завершена');
                    callback();
                    console.log('end');
                });
            });
        });
    });
}, 2000);
