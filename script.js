const bottomBoard = document.getElementById('generate-board');
const board = document.getElementById('pixel-board');
const boardIput = document.getElementById('board-size');
const selectColor = document.getElementById('color-palette');
const clear = document.getElementById('clear-board');
const clearPixel = document.getElementsByClassName('pixel');
const abrir = document.getElementById('play');
const pixeis = 5;

// EXERCICIO 12
function paletteColors() {
  const listColor = ['black'];
  for (let index = 0; index < 3; index += 1) {
    const red = Math.ceil(Math.random() * 255);
    const green = Math.ceil(Math.random() * 255);
    const blue = Math.ceil(Math.random() * 255);
    listColor.push(`rgb(${blue},${green},${red})`);
  }
  // EXERCICIO 2/3
  const paleteColors = document.createElement('tr');
  document.querySelector('#color-palette').appendChild(paleteColors);
  for (const key in listColor) {
    const color = document.createElement('td');
    color.classList.add('color');
    color.style.backgroundColor = listColor[key];
    paleteColors.appendChild(color);
    // EXERCICIO 6
    if (color.style.backgroundColor === 'black') {
      color.classList.add('selected');
    }
  }
}
paletteColors();
// EXERCICIO 4/5
function boardSize() {
  for (let index = 0; pixeis > index; index += 1) {
    const columnPixel = document.createElement('tr');
    board.appendChild(columnPixel);
    for (let secondIndex = 0; pixeis > secondIndex; secondIndex += 1) {
      const linePixel = document.createElement('td');
      linePixel.classList.add('pixel');
      columnPixel.appendChild(linePixel);
    }
  }
}
boardSize();
// EXERCICIO 7
function addSelected(eventSelected) {
  const color = document.getElementsByClassName('color');
  for (const key of color) {
    if (key.classList.contains('selected')) {
      key.classList.remove('selected');
    }
  }
  eventSelected.target.classList.add('selected');
}
selectColor.addEventListener('click', addSelected);
// EXERCICIO 8
function addColor(eventA) {
  const eventPixel = eventA.target;
  if (eventPixel.classList.contains('pixel')) {
    eventPixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
}
board.addEventListener('click', addColor);
// EXERCICIO 9
function clearBoard() {
  for (const key of clearPixel) {
    key.style.backgroundColor = 'white';
  }
}
clear.addEventListener('click', clearBoard);

function newBoardSize() {
  for (let index = 0; boardIput.value > index; index += 1) {
    const columnPixel = document.createElement('tr');
    document.getElementById('pixel-board').appendChild(columnPixel);
    for (let secondIndex = 0; boardIput.value > secondIndex; secondIndex += 1) {
      const linePixel = document.createElement('td');
      linePixel.classList.add('pixel');
      columnPixel.appendChild(linePixel);
    }
  }
}
// EXERCICIO 10 E 11
function clearPixeis() {
  if (boardIput.value.length === 0) {
    alert('Board inválido!');
  } else {
    for (let index = board.children.length - 1; index >= 0; index -= 1) {
      board.removeChild(board.children[index]);
    }
    if (boardIput.value < 5) {
      boardIput.value = 5;
    } else if (boardIput.value > 50) {
      boardIput.value = 50;
    }
    newBoardSize();
  }
}
bottomBoard.addEventListener('click', clearPixeis);

function iniciaModal(modalID) {
  const modal = document.getElementById(modalID);

  if (modal) {
    modal.classList.add('mostrar');
    abrir.classList.add('mostrar');

    modal.addEventListener('click', (e) => {
      if (e.target.id === modalID) {
        modal.classList.remove('mostrar');
        abrir.classList.remove('mostrar');
      }
    });
  }
}
abrir.addEventListener('click', () => iniciaModal('modal-contact'));
