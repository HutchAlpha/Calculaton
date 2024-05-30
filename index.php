<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Css/style.css">
    <link rel="icon" type="image/png" href="Image/icon.jpeg">
    <title>Calculaton</title>
    <script src="main.js" defer></script>
</head>
<body>
    <img class="icon" src="Image/icon.jpeg" alt="LogoOfficiel" id="LogoOfficiel">
    <div>
        <p>Le but du jeu : Faire le plus de calcul possible pour gagner des points</p>
        <p>Sélectionner le type de calcul et le niveau de difficulté !</p>
    </div>
    <div>
        <button id="plus">+</button>
        <button id="minus">-</button>
        <button id="multiply">*</button>
    </div>
    <div>
        <button id="facile">Facile</button>
        <button id="normal">Normal</button>
        <button id="difficile">Difficile</button>
    </div>
    <div>
        <button id="play">Démarrer</button>
    </div>
    <div id="score-container" style="display: none;">
        <p>Points: <span id="points">0</span></p>
        <p>Combo: <span id="combo">1</span></p>
    </div>
    <div id="calculation-container" style="display: none;">
        <p id="calculation"></p>
        <input type="text" id="answer">
        <button id="valider">Valider</button>
    </div>
    
    <div id="notepad-container">
        <h3>Bloc-notes</h3>
        <textarea id="notepad" rows="10" placeholder="Notez vos calculs ici..."></textarea>
    </div>
</body>
</html>
