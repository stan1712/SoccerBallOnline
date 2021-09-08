<template>
	<div>
		<h1>Game</h1>

		<div class="board">
			<div class='ball'>
				<div class="ball_effect"></div>
			</div>
			<div class="paddle_1 paddle"></div>
			<div class="paddle_2  paddle"></div>
			<h1 class="player_1_score">0</h1>
			<h1 class="player_2_score">0</h1>
			<h1 class="message">
				Press Enter to Play Pong
			</h1>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Game"

	}
</script>

<script>
	// Canvas
	const { body } = document;
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');
	const width = 500;
	const height = 700;
	const screenWidth = window.screen.width;
	const canvasPosition = screenWidth / 2 - width / 2;
	const isMobile = window.matchMedia('(max-width: 600px)');
	const gameOverEl = document.createElement('div');

	// Paddle
	const paddleHeight = 10;
	const paddleWidth = 50;
	const paddleDiff = 25;
	let paddleBottomX = 225;
	let paddleTopX = 225;
	let playerMoved = false;
	let paddleContact = false;

	// Ball
	let ballX = 250;
	let ballY = 350;
	const ballRadius = 5;

	// Speed
	let speedY;
	let speedX;
	let trajectoryX;
	let computerSpeed;

	// Change Mobile Settings
	if (isMobile.matches) {
	speedY = -2;
	speedX = speedY;
	computerSpeed = 4;
	} else {
	speedY = -1;
	speedX = speedY;
	computerSpeed = 3;
	}

	// Score
	let playerScore = 0;
	let computerScore = 0;
	const winningScore = 3;
	let isGameOver = true;
	let isNewGame = true;

	// Render Everything on Canvas
	function renderCanvas() {
	// Canvas Background
	context.fillStyle = 'black';
	context.fillRect(0, 0, width, height);

	// Paddle Color
	context.fillStyle = 'white';

	// Player Paddle (Bottom)
	context.fillRect(paddleBottomX, height - 20, paddleWidth, paddleHeight);

	// Computer Paddle (Top)
	context.fillRect(paddleTopX, 10, paddleWidth, paddleHeight);

	// Dashed Center Line
	context.beginPath();
	context.setLineDash([4]);
	context.moveTo(0, 350);
	context.lineTo(500, 350);
	context.strokeStyle = 'grey';
	context.stroke();

	// Ball
	context.beginPath();
	context.arc(ballX, ballY, ballRadius, 2 * Math.PI, false);
	context.fillStyle = 'white';
	context.fill();

	// Score
	context.font = '32px Courier New';
	context.fillText(playerScore, 20, canvas.height / 2 + 50);
	context.fillText(computerScore, 20, canvas.height / 2 - 30);
	}

	// Create Canvas Element
	function createCanvas() {
	canvas.width = width;
	canvas.height = height;
	body.appendChild(canvas);
	renderCanvas();
	}

	// Reset Ball to Center
	function ballReset() {
	ballX = width / 2;
	ballY = height / 2;
	speedY = -3;
	paddleContact = false;
	}

	// Adjust Ball Movement
	function ballMove() {
	// Vertical Speed
	ballY += -speedY;
	// Horizontal Speed
	if (playerMoved && paddleContact) {
		ballX += speedX;
	}
	}

	// Determine What Ball Bounces Off, Score Points, Reset Ball
	function ballBoundaries() {
	// Bounce off Left Wall
	if (ballX < 0 && speedX < 0) {
		speedX = -speedX;
	}
	// Bounce off Right Wall
	if (ballX > width && speedX > 0) {
		speedX = -speedX;
	}
	// Bounce off player paddle (bottom)
	if (ballY > height - paddleDiff) {
		if (ballX > paddleBottomX && ballX < paddleBottomX + paddleWidth) {
		paddleContact = true;
		// Add Speed on Hit
		if (playerMoved) {
			speedY -= 1;
			// Max Speed
			if (speedY < -5) {
			speedY = -5;
			computerSpeed = 6;
			}
		}
		speedY = -speedY;
		trajectoryX = ballX - (paddleBottomX + paddleDiff);
		speedX = trajectoryX * 0.3;
		} else if (ballY > height) {
		// Reset Ball, add to Computer Score
		ballReset();
		computerScore++;
		}
	}
	// Bounce off computer paddle (top)
	if (ballY < paddleDiff) {
		if (ballX > paddleTopX && ballX < paddleTopX + paddleWidth) {
		// Add Speed on Hit
		if (playerMoved) {
			speedY += 1;
			// Max Speed
			if (speedY > 5) {
			speedY = 5;
			}
		}
		speedY = -speedY;
		} else if (ballY < 0) {
		// Reset Ball, add to Player Score
		ballReset();
		playerScore++;
		}
	}
	}

	// Computer Movement
	function computerAI() {
	if (playerMoved) {
		if (paddleTopX + paddleDiff < ballX) {
		paddleTopX += computerSpeed;
		} else {
		paddleTopX -= computerSpeed;
		}
	}
	}

	function showGameOverEl(winner) {
	// Hide Canvas
	canvas.hidden = true;
	// Container
	gameOverEl.textContent = '';
	gameOverEl.classList.add('game-over-container');
	// Title
	const title = document.createElement('h1');
	title.textContent = `${winner} Wins!`;
	// Button
	const playAgainBtn = document.createElement('button');
	playAgainBtn.setAttribute('onclick', 'startGame()');
	playAgainBtn.textContent = 'Play Again';
	// Append
	gameOverEl.append(title, playAgainBtn);
	body.appendChild(gameOverEl);
	}

	// Check If One Player Has Winning Score, If They Do, End Game
	function gameOver() {
	if (playerScore === winningScore || computerScore === winningScore) {
		isGameOver = true;
		// Set Winner
		const winner = playerScore === winningScore ? 'Player 1' : 'Computer';
		showGameOverEl(winner);
	}
	}

	// Called Every Frame
	function animate() {
	renderCanvas();
	ballMove();
	ballBoundaries();
	computerAI();
	gameOver();
	if (!isGameOver) {
		window.requestAnimationFrame(animate);
	}
	}

	// Start Game, Reset Everything
	function startGame() {
	if (isGameOver && !isNewGame) {
		body.removeChild(gameOverEl);
		canvas.hidden = false;
	}
	isGameOver = false;
	isNewGame = false;
	playerScore = 0;
	computerScore = 0;
	ballReset();
	createCanvas();
	animate();
	canvas.addEventListener('mousemove', (e) => {
		playerMoved = true;
		// Compensate for canvas being centered
		paddleBottomX = e.clientX - canvasPosition - paddleDiff;
		if (paddleBottomX < paddleDiff) {
		paddleBottomX = 0;
		}
		if (paddleBottomX > width - paddleWidth) {
		paddleBottomX = width - paddleWidth;
		}
		// Hide Cursor
		canvas.style.cursor = 'none';
	});
	}

	// On Load
	startGame();
</script>

<style>
body {
  margin: 0;
  background-color: rgb(39, 39, 39);
  display: flex;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
}

canvas {
  margin-top: 25px;
  z-index: 10;
}

.game-over-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 700px;
  background-color: rgb(56, 56, 56);
  margin-top: -4px;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
}

button {
  cursor: pointer;
  color: rgb(0, 0, 0);
  background-color: rgb(195, 195, 195);
  border: none;
  height: 50px;
  width: 200px;
  border-radius: 5px;
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
}

button:hover {
  filter: brightness(80%);
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

/* Montior and Larger */
@media screen and (min-width: 1800px) {
  canvas {
    margin-top: 100px;
  }

  .game-over-container {
    margin-top: -19px;
  }
}

/* Large Smartphone (Vertical) */
@media screen and (max-width: 500px) {
  canvas {
    width: 100%;
    height: 700px;
    margin-top: 50px;
  }

  .game-over-container {
    width: 100%;
    height: 700px;
  }
}
</style>