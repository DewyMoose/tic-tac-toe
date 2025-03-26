const newGameButton = document.querySelector(".play-game-button");
let screenContainer = document.querySelector(".screen-container");

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
  console.log(newGameButton.textContent);
  console.log(counter);

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
      updatePlayers();
      newModal.remove();
    });
  } else {
    console.log("this isnt working");
  }
}

function updatePlayers() {
  counter -= 1;
  let player1Input = document.querySelector(".player-one-input");
  let player2Input = document.querySelector(".player-two-input");
  console.log(player1Input.value);
  console.log(player2Input.value);
  let playerNames = new Player(player1Input.value, player2Input.value);
  playerNamesArray.push(playerNames);
  console.log(playerNamesArray);
  screenContainer.style.backgroundColor = "white";
  newGameButton.textContent = "New Game";
  let player1Text = document.querySelector(".player1-p");
  let player2Text = document.querySelector(".player2-p");
  player1Text.textContent = `${playerNamesArray[0].player1}: 0`;
  player2Text.textContent = `${playerNamesArray[0].player2}: 0`;
}

function playNewGame() {
  if (newGameButton.textContent == "New Game" && counter === 0) {
    newGameButton.textContent = "Play Game!";
    createUser();
  }
}
