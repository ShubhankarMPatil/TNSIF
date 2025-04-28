function rollDice() {
        // Roll each player's die with a random number from 1 to 6
        const die1 = Math.floor(Math.random() * 6) + 1;
        const die2 = Math.floor(Math.random() * 6) + 1;
        const die3 = Math.floor(Math.random() * 6) + 1;

        // Update dice faces
        updateDiceFace("dice1", die1);
        updateDiceFace("dice2", die2);
        updateDiceFace("dice3", die3);

    // Determine the winner or if it's a draw
    const resultElement = document.getElementById('result');
    if (die1 > die2 && die1 > die3) {
        resultElement.textContent = "Player 1 wins!";
        resultElement.style.color = 'blue';
    } else if (die2 > die1 && die2 > die3) {
        resultElement.textContent = "Player 2 wins!";
        resultElement.style.color = 'green';
    } else if (die3 > die1 && die3 > die2) {
        resultElement.textContent = "Player 3 wins!";
        resultElement.style.color = 'purple';
    } else {
        resultElement.textContent = "It's a draw!";
        resultElement.style.color = 'orange';
    }
}

function updateDiceFace(diceId, value) {
    const dice = document.getElementById(diceId);
    dice.className = 'dice'; // Reset classes
    dice.classList.add(`face-${value}`);
    dice.innerHTML = ''; // Clear previous dots

    // Add dots for each face
    const dotPositions = {
        1: ['center'],
        2: ['top-left', 'bottom-right'],
        3: ['top-left', 'center', 'bottom-right'],
        4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
        6: ['top-left', 'center-left', 'bottom-left', 'top-right', 'center-right', 'bottom-right']
    };

    dotPositions[value].forEach(position => {
        const dot = document.createElement('div');
        dot.classList.add('dot', `dot-${position}`);
        dice.appendChild(dot);
    });
}