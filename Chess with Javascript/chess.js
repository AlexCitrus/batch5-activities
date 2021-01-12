// Board Creation

/// add a global event listener for clicks
/// have global variables for element_selected and turn(which is the color)

let turn_color = "white";
let turns = [];
let from_coords = [];
let from_cell = "";
let to_coords = [];
let to_cell = "";
let gameOn = true;

let board = document.getElementById("board");

function boardCreation() {
  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < 8; j++) {
      cell = document.createElement("div");
      cell.id = `${j},${i}`;

      if (j == 0) {
        cell.classList.add("cell", "row");
      } else {
        cell.classList.add("cell");
      }

      cell.style.backgroundColor = colorBoard(i, j);
      createPiece(cell);

      board.appendChild(cell);
    }
  }
  screenDisplay(`${turn_color[0].toUpperCase() + turn_color.slice(1)}'s turn!`);
}

function createPiece(cell) {
  i = cell.id.split(",")[1];
  j = cell.id.split(",")[0];

  let piece = "";
  if (i == 1 || i == 6) {
    piece = "pawn";
  } else if ((i == 0 || i == 7) && (j == 0 || j == 7)) {
    piece = "rook";
  } else if ((i == 0 || i == 7) && (j == 1 || j == 6)) {
    piece = "knight";
  } else if ((i == 0 || i == 7) && (j == 2 || j == 5)) {
    piece = "bishop";
  } else if ((i == 0 || i == 7) && j == 3) {
    piece = "queen";
  } else if ((i == 0 || i == 7) && j == 4) {
    piece = "king";
  } else {
    return;
  }

  img = document.createElement("img");
  img.setAttribute("data-piece", piece);
  img.classList.add("piece");
  if (i == 0 || i == 1) {
    img.src = `white_images/${piece}.png`;
    img.setAttribute("data-color", "white");
  } else {
    img.src = `black_images/${piece}.png`;
    img.setAttribute("data-color", "black");
  }

  cell.appendChild(img);
}

function colorBoard(x, y) {
  if (x % 2 == 0) {
    if (y % 2 == 0) {
      return "#a07b44";
    } else {
      return "#e9d3ad";
    }
  } else {
    if (y % 2 == 0) {
      return "#e9d3ad";
    } else {
      return "#a07b44";
    }
  }
}

boardCreation();

document.body.addEventListener("click", function (e) {
  if (
    (e.target.className === "piece" || e.target.classList.contains("cell")) &&
    gameOn
  ) {
    nextMove(e);
  } else if (e.target.innerHTML === "New Game") {
    newGame();
  } else if (e.target.innerHTML === "Undo Move") {
    if (turns.length > 0) {
      revertTurn();
      switchTurn();
      screenDisplay(
        `${
          turn_color[0].toUpperCase() + turn_color.slice(1)
        } undid their last move`
      );
    } else {
      removeSelection();
    }
  }
});

function newGame() {
  turn_color = "white";
  turns = [];
  from_coords = [];
  from_cell = "";
  to_coords = [];
  to_cell = "";
  board.innerHTML = "";
  boardCreation();
  gameOn = true;
}

function nextMove(e) {
  to_cell = e.target.className === "piece" ? e.target.parentElement : e.target;
  to_coords = to_cell.id.split(",");

  if (
    from_coords.length === 0 &&
    to_cell.firstChild &&
    to_cell.firstChild.dataset.color === turn_color
  ) {
    from_coords = to_coords;
    from_cell = to_cell;
    from_cell.classList.add("selected");
  } else if (from_coords.toString() === to_coords.toString()) {
    removeSelection();
  } else if (
    from_coords.length === 2 &&
    ((to_cell.firstChild && to_cell.firstChild.dataset.color !== turn_color) ||
      !to_cell.firstChild)
  ) {
    if (viableMove()) {
      takeTurn(from_cell, to_cell);
      if (inCheck()) {
        revertTurn();
        screenDisplay(`That move puts ${turn_color} in check!`);
      } else {
        screenDisplay(
          `${turn_color[0].toUpperCase() + turn_color.slice(1)} ${
            to_cell.firstChild.dataset.piece
          } to ${interfaceGrid(to_cell.id)}, ${
            turn_color === "white" ? "Black'" : "White'"
          }s turn`
        );
        endTurn();
      }
    }
  }
}

function removeSelection() {
  if (from_cell.classList) {
    from_cell.classList.remove("selected");
  }
  from_cell = "";
  from_coords = [];
  to_cell = "";
  to_coords = [];
}

function takeTurn(from, to) {
  let turn = {};
  if (to.firstChild) {
    turn.removedPiece = to.removeChild(to.firstChild);
    // to(turn.removedPiece);
  }
  piece = from.removeChild(from.firstChild);
  to.appendChild(piece);

  turn.piece = piece;
  turn.from = from;
  turn.to = to;

  turns.push(turn);
}

function revertTurn() {
  if (turns.length === 0) {
    return turns;
  }

  turn = turns.pop();

  if ("removedPiece" in turn) {
    turn.to.appendChild(turn.removedPiece);
  }

  turn.to.removeChild(turn.piece);
  turn.from.appendChild(turn.piece);
}

function endTurn() {
  removeSelection();
  switchTurn();
}

function switchTurn() {
  turn_color = turn_color === "white" ? "black" : (turn = "white");
  if (inCheck()) {
    screenDisplay(
      `${turn_color[0].toUpperCase() + turn_color.slice(1)} is in check!`
    );
  }
  if (inCheckMate()) {
    screenDisplay(
      `${turn_color[0].toUpperCase() + turn_color.slice(1)} is in checkmate!`
    );
    gameOver();
  }
}

function viableMove() {
  piece = from_cell.firstChild.dataset.piece;

  if (
    piece === "pawn" &&
    pawnMoves(from_cell, to_cell).indexOf(to_coords.toString()) > -1
  ) {
    return true;
  } else if (
    piece === "knight" &&
    knightMoves(from_cell, to_cell).indexOf(to_coords.toString()) > -1
  ) {
    return true;
  } else if (
    piece === "rook" &&
    rookMoves(from_cell).indexOf(to_coords.toString()) > -1
  ) {
    return true;
  } else if (
    piece === "bishop" &&
    bishopMoves(from_cell).indexOf(to_coords.toString()) > -1
  ) {
    return true;
  } else if (
    piece === "queen" &&
    queenMoves(from_cell).indexOf(to_coords.toString()) > -1
  ) {
    return true;
  } else if (
    piece === "king" &&
    kingMoves(from_cell, to_cell).indexOf(to_coords.toString()) > -1
  ) {
    return true;
  }
}

function pawnMoves(from) {
  let options = [];

  from_x = +from.id.split(",")[0];
  from_y = +from.id.split(",")[1];

  if (from.firstChild.dataset.color === "white") {
    piece = document.getElementById(`${from_x + 1},${from_y + 1}`);
    if (
      piece &&
      piece.firstChild &&
      piece.firstChild.dataset.color === "black"
    ) {
      options.push(piece.id);
    }

    piece = document.getElementById(`${from_x - 1},${from_y + 1}`);
    if (
      piece &&
      piece.firstChild &&
      piece.firstChild.dataset.color === "black"
    ) {
      options.push(piece.id);
    }

    piece = document.getElementById(`${from_x},${from_y + 2}`);
    if (piece && !piece.firstChild && from_y === 1) {
      options.push(piece.id);
    }

    piece = document.getElementById(`${from_x},${from_y + 1}`);
    if (piece && !piece.firstChild) {
      options.push(piece.id);
    }
  } else if (from.firstChild.dataset.color === "black") {
    piece = document.getElementById(`${from_x + 1},${from_y - 1}`);
    if (
      piece &&
      piece.firstChild &&
      piece.firstChild.dataset.color === "white"
    ) {
      options.push(piece.id);
    }

    piece = document.getElementById(`${from_x - 1},${from_y - 1}`);
    if (
      piece &&
      piece.firstChild &&
      piece.firstChild.dataset.color === "white"
    ) {
      options.push(piece.id);
    }

    piece = document.getElementById(`${from_x},${from_y - 2}`);
    if (piece && !piece.firstChild && from_y === 6) {
      options.push(piece.id);
    }

    piece = document.getElementById(`${from_x},${from_y - 1}`);
    if (piece && !piece.firstChild) {
      options.push(piece.id);
    }
  }
  return options;
}

function knightMoves(from) {
  let options = [];

  x = +from.id.split(",")[0];
  y = +from.id.split(",")[1];
  twos = [2, -2];
  ones = [1, -1];

  for (let i of twos) {
    for (let j of ones) {
      i = +i;
      j = +j;

      piece = document.getElementById(`${x + i},${y + j}`);
      if (
        piece &&
        (!piece.firstChild ||
          (piece.firstChild && piece.firstChild.dataset.color !== turn_color))
      ) {
        options.push(piece.id);
      }
    }
  }

  for (let i of ones) {
    for (let j of twos) {
      i = +i;
      j = +j;

      piece = document.getElementById(`${x + i},${y + j}`);
      if (
        piece &&
        (!piece.firstChild || piece.firstChild.dataset.color !== turn_color)
      ) {
        options.push(piece.id);
      }
    }
  }
  return options;
}

function rookMoves(from) {
  let options = [];
  from_x = +from.id.split(",")[0];
  from_y = +from.id.split(",")[1];

  for (let x = from_x + 1; x < 8; x++) {
    piece = document.getElementById(`${x},${from_y}`);
    if (!piece.firstChild) {
      options.push(piece.id);
    } else if (
      from.firstChild.dataset.color === piece.firstChild.dataset.color
    ) {
      break;
    } else if (
      from.firstChild.dataset.color !== piece.firstChild.dataset.color
    ) {
      options.push(piece.id);
      break;
    }
  }

  for (let x = from_x - 1; x >= 0; x--) {
    piece = document.getElementById(`${x},${from_y}`);
    if (!piece.firstChild) {
      options.push(piece.id);
    } else if (
      from.firstChild.dataset.color === piece.firstChild.dataset.color
    ) {
      break;
    } else if (
      from.firstChild.dataset.color !== piece.firstChild.dataset.color
    ) {
      options.push(piece.id);
      break;
    }
  }

  for (let y = from_y + 1; y < 8; y++) {
    piece = document.getElementById(`${from_x},${y}`);
    if (!piece.firstChild) {
      options.push(piece.id);
    } else if (
      from.firstChild.dataset.color === piece.firstChild.dataset.color
    ) {
      break;
    } else if (
      from.firstChild.dataset.color !== piece.firstChild.dataset.color
    ) {
      options.push(piece.id);
      break;
    }
  }

  for (let y = from_y - 1; y >= 0; y--) {
    piece = document.getElementById(`${from_x},${y}`);
    if (!piece.firstChild) {
      options.push(piece.id);
    } else if (
      from.firstChild.dataset.color === piece.firstChild.dataset.color
    ) {
      break;
    } else if (
      from.firstChild.dataset.color !== piece.firstChild.dataset.color
    ) {
      options.push(piece.id);
      break;
    }
  }
  return options;
}

function bishopMoves(from) {
  let options = [];
  from_x = +from.id.split(",")[0];
  from_y = +from.id.split(",")[1];

  y_up = from_y + 1;
  y_down = from_y - 1;
  for (let x = from_x + 1; x < 8; x++) {
    if (y_up < 8) {
      piece = document.getElementById(`${x},${y_up}`);

      if (!piece.firstChild) {
        options.push(piece.id);
      } else if (
        from.firstChild.dataset.color === piece.firstChild.dataset.color
      ) {
        y_up = 9;
      } else if (
        from.firstChild.dataset.color !== piece.firstChild.dataset.color
      ) {
        options.push(piece.id);
        y_up = 9;
      }
      y_up++;
    }

    if (y_down >= 0) {
      piece = document.getElementById(`${x},${y_down}`);

      if (!piece.firstChild) {
        options.push(piece.id);
      } else if (
        from.firstChild.dataset.color === piece.firstChild.dataset.color
      ) {
        y_down = -1;
      } else if (
        from.firstChild.dataset.color !== piece.firstChild.dataset.color
      ) {
        options.push(piece.id);
        y_down = -1;
      }
      y_down--;
    }
  }

  y_up = from_y + 1;
  y_down = from_y - 1;

  for (let x = from_x - 1; x >= 0; x--) {
    if (y_up < 8) {
      piece = document.getElementById(`${x},${y_up}`);

      if (!piece.firstChild) {
        options.push(piece.id);
      } else if (
        from.firstChild.dataset.color === piece.firstChild.dataset.color
      ) {
        y_up = 9;
      } else if (
        from.firstChild.dataset.color !== piece.firstChild.dataset.color
      ) {
        options.push(piece.id);
        y_up = 9;
      }
      y_up++;
    }

    if (y_down >= 0) {
      piece = document.getElementById(`${x},${y_down}`);
      if (!piece.firstChild) {
        options.push(piece.id);
      } else if (
        from.firstChild.dataset.color === piece.firstChild.dataset.color
      ) {
        y_down = -1;
      } else if (
        from.firstChild.dataset.color !== piece.firstChild.dataset.color
      ) {
        options.push(piece.id);
        y_down = -1;
      }
      y_down--;
    }
  }
  return options;
}

function queenMoves(from) {
  let options = [];
  from_x = +from.id.split(",")[0];
  from_y = +from.id.split(",")[1];

  diagonals = bishopMoves(from);
  straights = rookMoves(from);

  for (let path of diagonals) {
    options.push(path);
  }

  for (let path of straights) {
    options.push(path);
  }

  return options;
}

function kingMoves(from) {
  let options = [];
  from_x = +from.id.split(",")[0];
  from_y = +from.id.split(",")[1];

  moves = [-1, 0, 1];
  for (let i of moves) {
    for (let j of moves) {
      piece = document.getElementById(`${from_x + i},${from_y + j}`);
      if (
        piece &&
        (!piece.firstChild ||
          (piece.firstChild &&
            from.firstChild.dataset.color !== piece.firstChild.dataset.color))
      ) {
        options.push(piece.id);
      }
    }
  }
  return options;
}

function inCheck() {
  king = document.querySelector(`[data-piece="king"][data-color=${turn_color}]`)
    .parentElement;
  king_coords = king.id.split(",");

  opponent_color = turn_color === "white" ? "black" : "white";
  opponent_pieces = document
    .getElementById("board")
    .querySelectorAll(`img[data-color=${opponent_color}]`);

  check = false;

  opponent_pieces.forEach((piece) => {
    piece_type = piece.dataset.piece;
    piece = piece.parentElement;
    if (
      piece_type === "pawn" &&
      pawnMoves(piece).indexOf(king_coords.toString()) > -1
    ) {
      check = true;
    } else if (
      piece_type === "knight" &&
      knightMoves(piece).indexOf(king_coords.toString()) > -1
    ) {
      check = true;
    } else if (
      piece_type === "rook" &&
      rookMoves(piece).indexOf(king_coords.toString()) > -1
    ) {
      check = true;
    } else if (
      piece_type === "bishop" &&
      bishopMoves(piece).indexOf(king_coords.toString()) > -1
    ) {
      check = true;
    } else if (
      piece_type === "queen" &&
      queenMoves(piece).indexOf(king_coords.toString()) > -1
    ) {
      check = true;
    } else if (
      piece_type === "king" &&
      kingMoves(piece).indexOf(king_coords.toString()) > -1
    ) {
      check = true;
    }
  });

  return check;
}

function inCheckMate() {
  pieces = document
    .getElementById("board")
    .querySelectorAll(`img[data-color=${turn_color}]`);
  count = 0;
  for (let piece of pieces) {
    paths = [];
    piece_type = piece.dataset.piece;
    piece = piece.parentElement;

    if (piece_type === "pawn") {
      paths = pawnMoves(piece);
    } else if (piece_type === "knight") {
      paths = knightMoves(piece);
    } else if (piece_type === "rook") {
      paths = rookMoves(piece);
    } else if (piece_type === "bishop") {
      paths = bishopMoves(piece);
    } else if (piece_type === "queen") {
      paths = queenMoves(piece);
    } else if (piece_type === "king") {
      paths = kingMoves(piece);
    }

    for (let path of paths) {
      to_path = document.getElementById(`${path}`);
      takeTurn(piece, to_path);

      if (!inCheck()) {
        revertTurn();
        return false;
      } else {
        revertTurn();
      }
    }
  }
  return true;
}

function gameOver() {
  gameOn = false;
}

function screenDisplay(text) {
  display = document.querySelector("#screen > h2");
  display.innerHTML = text;
}

function interfaceGrid(id) {
  x = id.split(",")[0];
  y = id.split(",")[1];
  horizontal = ["A", "B", "C", "D", "E", "F", "G", "H"];
  return `${horizontal[x]}, ${+y + 1}`;
}
