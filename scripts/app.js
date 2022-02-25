// the grid
const grid = document.querySelector('.grid');
const start = document.getElementById('start');
const scoreDisplay = document.querySelector('#score-display');
const audioPlayer1 = document.querySelector('#audio1');
const audioPlayer2 = document.querySelector('#audio2');

const cells = [];
const width = 10;
const gridCellCount = width * width;
const height = 20;
let saucePosition = 0;
let score = 0;
let totalSauce = 0;
let gameSpeed = 0;
const pipeStartingPoints = [
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
  180, 190,
];
const modeButtons = document.querySelectorAll('.mode');

modeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Set the speed on each button in the html and then
    // take that property if the user clicks on that button
    gameSpeed = e.target.dataset.speed;
    console.log(gameSpeed);
    audioPlayer1.src = 'assets/showmewhatyougot.wav';
    audioPlayer1.play();
    audioPlayer2.src = 'assets/Rick and Morty Theme (Remix).wav';
    audioPlayer2.play();
    modeButtons.forEach((button) => {
      button.classList.add('hidden');
    });
    startGame();
  });
});

function checked() {
  if (cells[picklePosition].classList.contains('sauce')) {
    score = score + 1;
    scoreDisplay.innerText = score;
  }
}

function checked2() {
  if (cells[picklePosition].classList.contains('filled')) {
    score = score - 10;
    scoreDisplay.innerText = 'YOU GOT HIT';
  }
}

function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('data-id', i);
    cells.push(cell);
    grid.appendChild(cell);
  }
}

start.addEventListener('click', () => {
  // audioPlayer1.src = 'assets/showmewhatyougot.wav';
  // audioPlayer1.play();
  // audioPlayer2.src = 'assets/Rick and Morty Theme (Remix).wav';
  // audioPlayer2.play();
});

// a function to add Szechuan Sauce to a cell
function addSauce(position) {
  cells[position].classList.add('sauce');
}

// a function to remove Sauce from a cell
function removeSauce(position) {
  cells[position].classList.remove('sauce');
}

// a function to generate a random number so the sauce will appear in a random cell
function generateRandomSauceIndex() {
  return Math.floor(Math.random() * 200);
}

function hasSauce(element) {
  return element.classList.contains('sauce');
}

function handleSauce(event) {
  if (hasSauce(event.target)) {
    console.log('Wubalubadubdub!');
    score = score + 1;
    scoreDisplay.innerText = score;
    removeSauce(event.target.dataset.id);
  }
}

createGrid();

function startGame() {
  const pipesArray = [];
  let countdownToNewPipe = 3;

  const timer = setInterval(() => {
    countdownToNewPipe--;
    pipesArray.forEach((pipe, positionInPipesArray) => {
      if (pipe.length >= 10) {
        pipe.forEach((cellNumber) =>
          cells[cellNumber].classList.remove('filled')
        );
        pipesArray.splice(positionInPipesArray, 1);
      } else {
        pipe.forEach((cellNumber) => cells[cellNumber].classList.add('filled'));
        pipe.push(pipe[pipe.length - 1] + 1);
      }
    });
    if (countdownToNewPipe === 0) {
      const randomNum = Math.floor(Math.random() * pipeStartingPoints.length);
      const randomPipeStartPoint = pipeStartingPoints[randomNum];
      pipesArray.push([randomPipeStartPoint]);
      countdownToNewPipe = 3;
    }

    if (totalSauce > 64) {
      clearInterval(timer);
      alert(`Wubalubadubdub! You scored ${score}!`);
      removeSauce(saucePosition);
    } else {
      totalSauce++;
      removeSauce(saucePosition);
      saucePosition = generateRandomSauceIndex();
      addSauce(saucePosition);
      checked();
    }
  }, gameSpeed);
}

// start.addEventListener('click', startGame);

// * game variables
let picklePosition = 0;

function addPickle() {
  cells[picklePosition].classList.add('pickle');
}

function removePickle() {
  cells[picklePosition].classList.remove('pickle');
}

addPickle();

createGrid();

function handleKeyUp(event) {
  removePickle(picklePosition); // * Remove Pickle Rick from the current position

  const x = picklePosition % width;
  const y = Math.floor(picklePosition / width);

  switch (
    event.keyCode // * calculate the next position and update it
  ) {
    case 39:
      if (x < width - 1) picklePosition++;
      checked(), checked2();
      break;
    case 37:
      if (x > 0) picklePosition--;
      checked(), checked2();
      break;
    case 38:
      if (y > 0) picklePosition -= width;
      checked(), checked2();
      break;
    case 40:
      console.log(x, y, width);

      if (y < height - 1) picklePosition += width;
      checked(), checked2();
      break;
    default:
      console.log('invalid key do nothing');
  }

  addPickle(picklePosition); // * add Pickle Rick back at the new position
}

document.addEventListener('keyup', handleKeyUp);
