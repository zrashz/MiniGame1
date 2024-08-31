const player = document.getElementById('player');
const object = document.getElementById('object');
const scoreElement = document.getElementById('score');

let playerPosition = window.innerWidth / 2 - 25;
let objectPosition = { x: Math.random() * window.innerWidth, y: 0 };
let score = 0;
let gameSpeed = 2;

document.addEventListener('mousemove', (e) => {
    playerPosition = e.clientX - 25;
    player.style.left = `${playerPosition}px`;
});

function gameLoop() {
    // Move object down
    objectPosition.y += gameSpeed;
    object.style.top = `${objectPosition.y}px`;
    object.style.left = `${objectPosition.x}px`;

    // Check for collision
    if (
        objectPosition.y + 30 >= window.innerHeight - 140 &&
        objectPosition.x >= playerPosition &&
        objectPosition.x <= playerPosition + 50
    ) {
        score++;
        scoreElement.textContent = score;
        resetObject();
    }

    // Reset object if it goes out of bounds
    if (objectPosition.y > window.innerHeight) {
        resetObject();
    }

    requestAnimationFrame(gameLoop);
}

function resetObject() {
    objectPosition = { x: Math.random() * (window.innerWidth - 30), y: 0 };
    gameSpeed += 0.1; // Increase speed as the game progresses
}

gameLoop();
