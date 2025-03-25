const newGameButton = document.querySelector(".play-game-button");

newGameButton.addEventListener("click", createUser);

function createUser() {
  //create modal for players to enter their name
  let newModal = document.createElement("modal");
  newModal.className = "modal";
  //set screenContaienr to screenContainer Div
  let screenContainer = document.querySelector(".screen-container");
  screenContainer.style.backgroundColor = "rgb(0,0,0, .2";
  //add new modal to screenContainer
  screenContainer.appendChild(newModal);
  //setting name div, lable, and input for player 1
  let playerOneDiv = document.createElement("div");
  playerOneDiv.className = "name-input-div";
  let playerOneLabel = document.createElement("label");
  playerOneLabel.textContent = "Player one name:";
  let playerOneInput = document.createElement("input");
  playerOneInput.type = "text";
  playerOneInput.placeholder = "Ex: John Doe";
  //setting name div, lable, and input for player 2
  let playerTwoDiv = document.createElement("div");
  playerTwoDiv.className = "name-input-div";
  let playerTwoLabel = document.createElement("label");
  playerTwoLabel.textContent = "Player two name:";
  let playerTwoInput = document.createElement("input");
  playerTwoInput.type = "text";
  playerTwoInput.placeholder = "Ex: John Doe";
  newModal.append(playerOneDiv, playerTwoDiv);
  playerOneDiv.append(playerOneLabel, playerOneInput);
  playerTwoDiv.append(playerTwoLabel, playerTwoInput);
}
