window.onload = function(){
    console.log("JS loaded!");
};



let user_score=0;
let comp_score=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game was Draw.Play again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        user_score++;
        userScorePara.innerText = user_score;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comp_score++;
        compScorePara.innerText = comp_score;
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice)=>{
    //generate computer choice
    const compChoice= genCompChoice();
    if(userChoice===compChoice)
    {
        //game draw
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock"){
         //computer has 2 choices either paper or scissors
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //computer has 2 choices either rock or scissors
            userWin = compChoice==="scissors"?false:true;
        }
        else{
            //computer has 2 choices either rock or paper
            userWin = compChoice==="rock"?false:true;
        } 
        showWinner(userWin,userChoice,compChoice);
    }    

};




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});