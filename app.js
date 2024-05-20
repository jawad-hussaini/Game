let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userscorePara = document.querySelector("#user-score")
const compscorePara = document.querySelector("#comp-score")


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    } );
})


const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genComChoice();
    console.log("computer choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true
        }
        else{
            userWin = compChoice === "stone" ? false : true
        }
        showWinner(userWin, userChoice, compChoice);
    }
};



const genComChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx]
};

const drawGame = ()=> {
    console.log("Game is draw")
    msg.innerText = "Game is Draw!"
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++
        userscorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }else{
        compScore++
        compscorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}




