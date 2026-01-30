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