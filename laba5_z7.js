console.log("Задание 7");

async function interview(candidate) {
    const [name, prepTime1, defenseTime1, prepTime2, defenseTime2] = candidate;
    
    console.log(`${name} started the 1 task.`);
    await new Promise(resolve => setTimeout(resolve, prepTime1 * 1000));
    
    console.log(`${name} moved on to the defense of the 1 task.`);
    await new Promise(resolve => setTimeout(resolve, defenseTime1 * 1000));
    
    console.log(`${name} completed the 1 task.`);
    
    console.log(`${name} is resting.`);
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    console.log(`${name} started the 2 task.`);
    await new Promise(resolve => setTimeout(resolve, prepTime2 * 1000));
    
    console.log(`${name} moved on to the defense of the 2 task.`);
    await new Promise(resolve => setTimeout(resolve, defenseTime2 * 1000));
    
    console.log(`${name} completed the 2 task.`);
}

async function interviews(candidates) {
    console.log("Начинаем собеседования...\n");
    const promises = candidates.map(candidate => interview(candidate));
    await Promise.all(promises);
    console.log("\nВсе собеседования завершены!");
}

const candidates = [
    ['Ivan', 5, 2, 7, 2],
    ['John', 3, 4, 5, 1],
    ['Sophia', 4, 2, 5, 1]
];

interviews(candidates);