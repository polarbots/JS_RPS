function getComputerChoice() {
    // Set compVal to a random number between 0 to 1
    let compVal = Math.random();
    console.log(compVal)

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