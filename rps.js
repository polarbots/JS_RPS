let humanScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log(computerSelection);
playRound(computerSelection, humanSelection);

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

function getHumanChoice() {
    // Prompt for human choice and save it to a variable. It should already be a string
    let humanChoice = prompt('Select between rock, paper, and scissors!');
    return humanChoice
}

function playRound(computerChoice, humanChoice) {
    // Convert choices to lower case so arguments can be case insensitive
    let lowerCompChoice = computerChoice.toLowerCase();
    let lowerHumanChoice = humanChoice.toLowerCase();

    // If comp choice is rock
    if (lowerCompChoice === "rock") {
        // If human choice is rock
        if (lowerHumanChoice === "rock") {
            // Print You Tie! Rock is tied with rock.
            console.log("You Tie! Rock is tied with rock.");
        // If human choice is paper
        } else if (lowerHumanChoice === "paper") {
            // Print You win! Paper beats rock.
            // Increment humanScore by 1
            console.log("You win! Paper beats rock.");
            humanScore += 1;
        // If human choice is scissors
        } else {
            // Print You lose! Scissors loses to rock.
            // Increment computerScore by 1
            console.log("You lose! Scissors loses to rock.");
            computerScore += 1;
        }   
    // Else if comp choice is paper
    } else if (lowerCompChoice === "paper") {
        // If human choice is paper
        if (lowerHumanChoice === "paper") {
            // Print You Tie! Paper is tied with paper.
            console.log("You Tie! Paper is tied with paper.");
        // If human choice is scissors
        } else if (lowerHumanChoice === "scissors") {
            // Print You win! Scissors beats paper.
            // Increment humanScore by 1
            console.log("You win! Scissors beats paper.");
            humanScore += 1;
        // If human choice is rock
        } else {
            // Print You lose! Rock loses to paper.
            // Increment computerScore by 1
            console.log("You lose! Rock loses to paper.");
            computerScore += 1;
        }   
    // If comp choice is scissors
    } else {
        // If human choice is scissors
        if (lowerHumanChoice === "scissors") {
            // Print You Tie! Scissors is tied with scissors.
            console.log("You Tie! Scissors is tied with scissors.");
        // If human choice is rock
        } else if (lowerHumanChoice === "rock") {
            // Print You win! Rock beats scissors.
            // Increment humanScore by 1
            console.log("You win! Rock beats scissors.");
            humanScore += 1;
        // If human choice is paper
        } else {
            // Print You lose! Paper loses to scissors.
            // Increment computerScore by 1
            console.log("You lose! Paper loses to scissors.");
            computerScore += 1;
        }   
    }

}