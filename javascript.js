const newGameButton = document.querySelector(".play-game-button");
let screenContainer = document.querySelector(".screen-container");
let playerOneScore = 0;
let playerTwoScore = 0;
let player1Text = document.querySelector(".player1-p");
let player2Text = document.querySelector(".player2-p");
let GameCountP = document.querySelector(".game-count");
let gameCountNum = 0;

newGameButton.addEventListener("click", createUser);
let counter = 0;
let playerNamesArray = [];

function Player(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

function createUser() {
  newGameButton.textContent = "Play Game!";
  playerNamesArray = [];

  if (counter === 0 && newGameButton.textContent == "Play Game!") {
    // Create modal for players to enter their name
    let newModal = Object.assign(document.createElement("div"), {
      className: "new-players-container",
    });
    let addPlayerTitle = Object.assign(document.createElement("h1"), {
      textContent: "Enter Player Information!",
      className: "div-title",
    });

    // Set screenContainer properties
    screenContainer.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; // Fixed color format

    // Append newModal to screenContainer
    screenContainer.appendChild(newModal);

    // Player 1 Input
    let playerOneDiv = Object.assign(document.createElement("div"), {
      className: "name-input-div",
    });
    let playerOneLabel = Object.assign(document.createElement("p"), {
      textContent: "Player one name:",
    });
    let playerOneInput = Object.assign(document.createElement("input"), {
      type: "text",
      placeholder: "Ex: John Doe",
      className: "player-one-input",
    });
    playerOneDiv.append(playerOneLabel, playerOneInput);

    // Player 2 Input
    let playerTwoDiv = Object.assign(document.createElement("div"), {
      className: "name-input-div",
    });
    let playerTwoLabel = Object.assign(document.createElement("p"), {
      textContent: "Player two name:",
    });
    let playerTwoInput = Object.assign(document.createElement("input"), {
      type: "text",
      placeholder: "Ex: Jane Doe",
      className: "player-two-input",
    });
    playerTwoDiv.append(playerTwoLabel, playerTwoInput);

    // Play Button
    let playButton = Object.assign(document.createElement("button"), {
      textContent: "Play!",
      className: "play-button",
    });

    // Append elements to modal
    newModal.append(addPlayerTitle, playerOneDiv, playerTwoDiv, playButton);

    // Increment counter
    counter += 1;
    playButton.addEventListener("click", () => {
      updatePlayers(playerOneInput.value, playerTwoInput.value);
      newModal.remove();
    });
  } else {
  }
}

function updatePlayers(player1, player2) {
  counter -= 1;
  let playerNames = new Player(player1, player2);
  playerNamesArray.push(playerNames);
  screenContainer.style.backgroundColor = "white";
  newGameButton.textContent = "New Game";
  player1Text.textContent = `${playerNamesArray[0].player1}: 0`;
  player2Text.textContent = `${playerNamesArray[0].player2}: 0`;
  let turn = 0;
  let gameDivs = document.querySelectorAll(".game-div");

  gameDivs.forEach((div) => {
    div.textContent = "";
  });
  assignPlayerRole(player1, player2, gameDivs, turn);
}

function playNewGame() {
  if (newGameButton.textContent == "New Game" && counter === 0) {
    newGameButton.textContent = "Play Game!";
    createUser();
  }
}
function assignPlayerRole(player1, player2, gameDivs, turn) {
  let playerTurn = document.querySelector(".game-turn");
  let divElements = [];
  for (let i = 0; i < 9; i++) {
    divElements.push({ id: gameDivs[i].textContent });
  }
  playerTurn.textContent = `Player Turn: ${player1}`;
  gameDivs.forEach((div, index) => {
    div.addEventListener("click", () => {
      if (turn == 0 && div.textContent == "") {
        playerTurn.textContent = `Player Turn: ${player2}`;
        player1Text.textContent = `${player1} Score: ${playerOneScore}`;
        div.textContent = "X";
        div.style.color = "var(--playerOneColor)";
        divElements[index].id = div.textContent;
        turn = 1;
        checkScore(divElements, playerTurn, player1, player2);
      } else if (turn == 1 && div.textContent == "") {
        playerTurn.textContent = `Player Turn: ${player1}`;
        player2Text.textContent = `${player2} Score: ${playerTwoScore}`;
        div.textContent = "O";
        div.style.color = "var(--playerTwoColor)";
        turn = 0;
        checkScore(divElements, playerTurn, player1, player2);
      }
    });
  });
}

function checkScore(divElements, playerTurn, player1, player2) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of winningCombos) {
    let [a, b, c] = combo;
    if (
      divElements[a].id === "X" &&
      divElements[b].id === "X" &&
      divElements[c].id === "X"
    ) {
      playerTurn.textContent = `${player1} Wins!`;
      playerOneScore += 1;
      gameCountNum += 1;
      player1Text.textContent = `${player1} Score: ${playerOneScore}`;
      GameCountP.textContent = `Game Count: ${gameCountNum}`;
      break;
    } else if (
      divElements[a].id === "O" &&
      divElements[b].id === "O" &&
      divElements[c].id === "O"
    ) {
      playerTurn.textContent = `${player2} Wins!`;
      playerTwoScore += 1;
      gameCountNum += 1;
      player2Text.textContent = `${player2} Score: ${playerTwoScore}`;
      GameCountP.textContent = `Game Count: ${gameCountNum}`;
      break;
    }
  }
}
