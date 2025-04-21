let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game was Draw, Play Again";
  msg.style.backgroundColor = "#da97de";
};

const showWinner = (userWin) => {
  if (userWin) {
    //console.log("You Win");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "#c773b3";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    //console.log("You Lose");
    msg.innerText = "You Lose";
    msg.style.backgroundColor = "#6697cc";
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  //Generate Computer Choice => modular
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock , scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //  console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});

/*// Initialize scores for user and computer
let userScore = 0;
let compScore = 0;

// Select all the choices (rock, paper, scissors)
const choices = document.querySelectorAll(".choice");

// Function to generate a random computer choice
const generateComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3); // Randomly select an index (0, 1, or 2)
  return options[randomIndex]; // Return the computer's random choice
};

// Function to handle the draw scenario
const handleDraw = () => {
  console.log("It's a draw!");
};

// Function to display the winner (user or computer)
const displayWinner = (isUserWinner) => {
  if (isUserWinner) {
    console.log("You Win!");
    userScore++; // Increment user's score when they win
  } else {
    console.log("You Lose!");
    compScore++; // Increment computer's score when user loses
  }
  console.log("User Score:", userScore);
  console.log("Computer Score:", compScore);
};

// Function to compare user's choice with computer's choice and determine the result
const playGame = (userChoice) => {
  console.log("User's Choice:", userChoice);

  // Generate the computer's choice using the generateComputerChoice function
  const compChoice = generateComputerChoice();
  console.log("Computer's Choice:", compChoice);

  // If the user and computer choose the same, it's a draw
  if (userChoice === compChoice) {
    handleDraw();
  } else {
    // Determine the winner
    let isUserWinner = false;
    if (userChoice === "rock") {
      isUserWinner = compChoice === "scissors"; // Rock beats Scissors
    } else if (userChoice === "paper") {
      isUserWinner = compChoice === "rock"; // Paper beats Rock
    } else if (userChoice === "scissors") {
      isUserWinner = compChoice === "paper"; // Scissors beats Paper
    }

    // Display the winner based on the result
    displayWinner(isUserWinner);
  }
};

// Add event listeners to each choice (rock, paper, scissors) to start the game
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // Get the ID of the clicked element (rock, paper, or scissors)
    playGame(userChoice); // Call playGame with the user's choice
  });
});
*/
