const newGameButton = document.querySelector(".play-game-button");

newGameButton.addEventListener("click", createUser);
let counter = 0;

function createUser() {
  if (counter === 0) {
    // Create modal for players to enter their name
    let newModal = Object.assign(document.createElement("div"), {
      className: "new-players-container",
    });
    let addPlayerTitle = Object.assign(document.createElement("h1"), {
      textContent: "Enter Player Information!",
      className: "div-title",
    });

    // Set screenContainer properties
    let screenContainer = document.querySelector(".screen-container");
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
      newModal.remove();
      counter -= 1;
      return function players() {
        let playerNames = {
          player1: playerOneInput.value,
          player2: playerTwoInput.value,
        };
        return playerNames;
      };
    });
  }

  return null;
}
