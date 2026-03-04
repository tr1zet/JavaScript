// Функция для подсчета гласных
function countVowels(str) {
    const vowels = 'aeiouy';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Функция для получения только для согласных букв
function getConsonants(str) {
    const vowels = 'aeiouy';
    let consonants = '';
    for (let char of str) {
        if (!vowels.includes(char)) {  
            consonants += char;
        }
    }
    return consonants;
}

// Основная функция проверки пароля
function ask_password(login, password, success, failure) {
    login = login.toLowerCase();
    password = password.toLowerCase();
    
    const vowelsCount = countVowels(password);           // гласные в пароле 
    const loginConsonants = getConsonants(login);        // согласные из логина
    const passwordConsonants = getConsonants(password);  //  согласные из пароля
    
    const wrongVowels = vowelsCount !== 3;
    const wrongConsonants = loginConsonants !== passwordConsonants;  // сравниваем согласные
    
    if (!wrongVowels && !wrongConsonants) {
        success(login);
    } else if (wrongVowels && wrongConsonants) {
        failure(login, "Everything is wrong");
    } else if (wrongVowels) {
        failure(login, "Wrong number of vowels");
    } else {
        failure(login, "Wrong consonants");
    }
}

function main(login, password) {
    ask_password(
        login,
        password,
        function(login) {
            console.log(`Привет, ${login}!`);
        },
        function(login, error) {
            console.log(`Кто-то пытался притвориться пользователем ${login}, но в пароле допустил ошибку: ${error.toUpperCase()}.`);
        }
    );
}


console.log("login и aaalg");
console.log("Логин: 'login'");
console.log("Согласные из логина:", getConsonants('login'));  
console.log("Пароль: 'aaalg'");
console.log("Согласные из пароля:", getConsonants('aaalg'));  

console.log("\n Результат проверки ");
main("login", "aaalg");

console.log("\n Правильный пароль 'aaalgn' ");
console.log("Пароль: 'aaalgn'");
console.log("Согласные из пароля:", getConsonants('aaalgn'));  
main("login", "aaalgn");