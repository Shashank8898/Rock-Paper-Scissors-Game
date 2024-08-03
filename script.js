let userScore =0;
let compScore =0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userscore")
const compScorePara = document.querySelector("#computerscore")


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore
        console.log("you Win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
    }else{
        compScore++
        compScorePara.innerText=compScore
        console.log("You lose");
        msg.innerText=`You lose! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="red";

    }
}
const genCompChoice = () =>{
    const options =["rock","paper","scissors"];
    // generating a random number in Javascript
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const draw = () => {
    console.log("Draw");
    msg.innerText ="Draw! Play Again"
    msg.style.backgroundColor="grey";

}

const playGame = (userChoice)=>{
    console.log("userChoice =",userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice =",compChoice);
    // Checking for Scoring
    if(userChoice===compChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            // Scissor or Paper
            userWin=compChoice==="paper"?false:true
        }else if(userChoice==="paper"){
            // Rock or Scissor
            userWin=compChoice==="scissors"?false:true;
        }else{
            // rock or paper
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})