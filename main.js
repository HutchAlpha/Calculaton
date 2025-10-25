let currentDifficulty = 'facile';
let currentOperation = '+';
let points = 0;
let combo = 1;

document.getElementById('plus').addEventListener('click', () => {
    currentOperation = '+';
    setActiveButton('operation', 'plus');
});

document.getElementById('minus').addEventListener('click', () => {
    currentOperation = '-';
    setActiveButton('operation', 'minus');
});

document.getElementById('multiply').addEventListener('click', () => {
    currentOperation = '*';
    setActiveButton('operation', 'multiply');
});

document.getElementById('facile').addEventListener('click', () => {
    currentDifficulty = 'facile';
    setActiveButton('niveau', 'facile');
});

document.getElementById('normal').addEventListener('click', () => {
    currentDifficulty = 'normal';
    setActiveButton('niveau', 'normal');
});

document.getElementById('difficile').addEventListener('click', () => {
    currentDifficulty = 'difficile';
    setActiveButton('niveau', 'difficile');
});
// Ajoute la classe active sur le bouton sélectionné et la retire des autres
function setActiveButton(type, id) {
    if (type === 'operation') {
        ['plus', 'minus', 'multiply'].forEach(btn => {
            document.getElementById(btn).classList.remove('active-btn');
        });
        document.getElementById(id).classList.add('active-btn');
    } else if (type === 'niveau') {
        ['facile', 'normal', 'difficile'].forEach(btn => {
            document.getElementById(btn).classList.remove('active-btn');
        });
        document.getElementById(id).classList.add('active-btn');
    }
}

document.getElementById('play').addEventListener('click', () => {
    document.getElementById('calculation-container').style.display = 'block';
    document.getElementById('score-container').style.display = 'block';
    generateCalculation();
    // Sélection par défaut si rien n'est sélectionné
    setActiveButton('operation', currentOperation === '+' ? 'plus' : currentOperation === '-' ? 'minus' : 'multiply');
    setActiveButton('niveau', currentDifficulty);
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
    // Facile : nombres de 0 à 10, pas de négatif, pas de parenthèses
    const a = Math.floor(Math.random() * 11);
    const b = Math.floor(Math.random() * 11);
    return `${a} ${currentOperation} ${b}`;
}

function generateNormalCalculation() {
    // Normal : nombres de 10 à 99, possibilité de négatif, pas de parenthèses
    let a = Math.floor(Math.random() * 90) + 10;
    let b = Math.floor(Math.random() * 90) + 10;
    // Pour soustraction, possibilité de négatif
    if (currentOperation === '-') {
        if (Math.random() < 0.5) {
            [a, b] = [b, a];
        }
    }
    return `${a} ${currentOperation} ${b}`;
}

function generateHardCalculation() {
    // Difficile : nombres de -50 à 99, possibilité de parenthèses, multiplications, négatifs
    let a = Math.floor(Math.random() * 150) - 50;
    let b = Math.floor(Math.random() * 150) - 50;
    let op = currentOperation;
    // Ajout de parenthèses et opérations combinées
    if (Math.random() < 0.5) {
        // Ex : (a op b) op c
        let c = Math.floor(Math.random() * 150) - 50;
        let op2 = ['+', '-', '*'][Math.floor(Math.random() * 3)];
        return `(${a} ${op} ${b}) ${op2} ${c}`;
    } else {
        return `${a} ${op} ${b}`;
    }
}
