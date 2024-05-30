let currentDifficulty = 'facile';
let currentOperation = '+';
let points = 0;
let combo = 1;

document.getElementById('plus').addEventListener('click', () => {
    currentOperation = '+';
});

document.getElementById('minus').addEventListener('click', () => {
    currentOperation = '-';
});

document.getElementById('multiply').addEventListener('click', () => {
    currentOperation = '*';
});

document.getElementById('facile').addEventListener('click', () => {
    currentDifficulty = 'facile';
});

document.getElementById('normal').addEventListener('click', () => {
    currentDifficulty = 'normal';
});

document.getElementById('difficile').addEventListener('click', () => {
    currentDifficulty = 'difficile';
});

document.getElementById('play').addEventListener('click', () => {
    document.getElementById('calculation-container').style.display = 'block';
    document.getElementById('score-container').style.display = 'block';
    generateCalculation();
});

document.getElementById('valider').addEventListener('click', () => {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = evaluateCalculation();
    if (userAnswer === correctAnswer) {
        points += 1 * combo;
        combo++;
        alert('Bonne réponse!');
    } else {
        combo = 1;
        alert('Mauvaise réponse!');
    }
    document.getElementById('answer').value = '';
    document.getElementById('points').innerText = points;
    document.getElementById('combo').innerText = combo;
    generateCalculation();
});

function generateCalculation() {
    let calculation;
    if (currentDifficulty === 'facile') {
        calculation = generateEasyCalculation();
    } else if (currentDifficulty === 'normal') {
        calculation = generateNormalCalculation();
    } else {
        calculation = generateHardCalculation();
    }
    document.getElementById('calculation').innerText = calculation;
}

function evaluateCalculation() {
    const calculation = document.getElementById('calculation').innerText;
    return eval(calculation);
}

// Fonctions de génération de calculs pour chaque difficulté et opération
function generateEasyCalculation() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return `${a} ${currentOperation} ${b}`;
}

function generateNormalCalculation() {
    const a = Math.floor(Math.random() * 50);
    const b = Math.floor(Math.random() * 50);
    return `${a} ${currentOperation} ${b}`;
}

function generateHardCalculation() {
    const a = Math.floor(Math.random() * 20);
    const b = Math.floor(Math.random() * 20);
    return `${a} ${currentOperation} ${b}`;
}
