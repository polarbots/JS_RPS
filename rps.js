let humanScore = 0;
let computerScore = 0;

playGame()

function getComputerChoice() {
    // Set compVal to a random number between 0 to 1
    let compVal = Math.random();

    // If compVal is less than or equal to 0.33, return "rock"
    // Else if compVal is greater than 0.33 and less than or equal to 0.66, return "paper"
    // Else return "scissors"
    if (compVal <= 0.33) {
        return "rock"
    } else if (compVal > 0.33 & compVal <= 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(computerChoice, humanChoice) {

    const resultsDiv = document.querySelector(".results");
    const roundResult = document.createElement('p');
    
    // If comp choice is rock
    if (computerChoice === "rock") {
        // If human choice is rock
        if (humanChoice === "rock") {
            // Print You Tie! Rock is tied with rock.
            roundResult.textContent = "You Tie! Rock is tied with rock.";
        // If human choice is paper
        } else if (humanChoice === "paper") {
            // Print You win! Paper beats rock.
            // Increment humanScore by 1
            roundResult.textContent = "You win! Paper beats rock.";
            humanScore += 1;
        // If human choice is scissors
        } else {
            // Print You lose! Scissors loses to rock.
            // Increment computerScore by 1
            roundResult.textContent = "You lose! Scissors loses to rock.";
            computerScore += 1;
        }   
    // Else if comp choice is paper
    } else if (computerChoice === "paper") {
        // If human choice is paper
        if (humanChoice === "paper") {
            // Print You Tie! Paper is tied with paper.
            roundResult.textContent = "You Tie! Paper is tied with paper.";
        // If human choice is scissors
        } else if (humanChoice === "scissors") {
            // Print You win! Scissors beats paper.
            // Increment humanScore by 1
            roundResult.textContent = "You win! Scissors beats paper.";
            humanScore += 1;
        // If human choice is rock
        } else {
            // Print You lose! Rock loses to paper.
            // Increment computerScore by 1
            roundResult.textContent = "You lose! Rock loses to paper.";
            computerScore += 1;
        }   
    // If comp choice is scissors
    } else {
        // If human choice is scissors
        if (humanChoice === "scissors") {
            // Print You Tie! Scissors is tied with scissors.
            roundResult.textContent = "You Tie! Scissors is tied with scissors.";
        // If human choice is rock
        } else if (humanChoice === "rock") {
            // Print You win! Rock beats scissors.
            // Increment humanScore by 1
            roundResult.textContent = "You win! Rock beats scissors.";
            humanScore += 1;
        // If human choice is paper
        } else {
            // Print You lose! Paper loses to scissors.
            // Increment computerScore by 1
            roundResult.textContent = "You lose! Paper loses to scissors.";
            computerScore += 1;
        }   
    }
    resultsDiv.appendChild(roundResult);

    const runningScore = document.createElement('p');
    const announceWinner = document.createElement('p');
    const playAgain = document.createElement('p');
    // If statement to check if either score is 5
    // If one party reaches 5, print winner and disable buttons from further presses
    if (computerScore == 5 || humanScore == 5) {
        if (computerScore > humanScore) {
            announceWinner.textContent = `You lost with a score of ${humanScore} to ${computerScore} :(`;
        } else if (computerScore < humanScore) {
            announceWinner.textContent = `You won with a score of ${humanScore} to ${computerScore}! :)`;
        }
        resultsDiv.appendChild(announceWinner);
        playAgain.textContent = `Refresh to play again!`;
        resultsDiv.appendChild(playAgain);
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.disabled = true;
        })

    } else {
        // If none are 5, print out running score
        runningScore.textContent = `Human (You): ${humanScore} Computer: ${computerScore}`;
        resultsDiv.appendChild(runningScore);
    };
}

function playGame() {
    // Query for buttons
    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');

    // Add event listener on click for each button that calls playRound
    rockBtn.addEventListener('click', () => {
        playRound(getComputerChoice(), 'rock');
    });

    paperBtn.addEventListener('click', () => {
        playRound(getComputerChoice(), 'paper');
    });

    scissorsBtn.addEventListener('click', () => {
        playRound(getComputerChoice(), 'scissors');
    });
}