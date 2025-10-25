<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Css/style.css">
    <link rel="icon" type="image/png" href="Image/icon.jpeg">
    <title>Calculaton</title>
    <script src="main.js" defer></script>
    <style>
    .back-btn {
        display: inline-block;
        margin: 18px 0 0 18px;
        padding: 10px 22px;
        background: #2563eb;
        color: #fff;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 500;
        font-size: 1.08em;
        box-shadow: 0 2px 8px rgba(37,99,235,0.10);
        transition: background 0.15s, transform 0.13s;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
    }
    .back-btn:hover {
        background: #1e40af;
        transform: translateY(-2px) scale(1.03);
        color: #dbeafe;
    }
    @media (max-width: 600px) {
        .back-btn {
            margin: 10px 0 0 6px;
            padding: 8px 12px;
            font-size: 0.98em;
        }
    }
    </style>
</head>
<body>
    <a href="/index.php" class="back-btn">&#8592; Retour à l'accueil</a>
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
