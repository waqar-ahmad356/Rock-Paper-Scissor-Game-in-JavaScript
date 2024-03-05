let userScore=0;
let compScore=0;
let drawScore=0;

const choices=document.querySelectorAll('.choice');
let msg=document.querySelector('#msg');
const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');
const drawScorePara=document.querySelector('#draw-score');

const GameDrawn=()=>{
   drawScore++;
   drawScorePara.innerText=drawScore;
   msg.innerText='Game has been drawn please try again';
   msg.style.backgroundColor='pink';
   console.log("Game has been Drawn!");

}
const genCompChoice=()=>{
   const options=['rock','paper','scissor']
   const randIndx=Math.floor(Math.random()*3);
   return options[randIndx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
   if(userWin)
   {
      userScore++;
      userScorePara.innerText=userScore;
      msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor='green';
      console.log("user win");

   }
   else{
      compScore++;
      compScorePara.innerText=compScore;
      msg.innerText=`You lost!  ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor='red';
      console.log("user loose");
   }
}

const playGame=(userChoice)=>{
   console.log("user Choice",userChoice)
   //generate computer choice
   const compChoice=genCompChoice();
   console.log("computer Choice",compChoice);

   if(userChoice===compChoice)
   {
      GameDrawn();
   }
   else {
      let userWin=true;
      if(userChoice==='rock')
      {
         //computer choices scissor,paper
         userWin=compChoice==='paper'?false:true;
      }
      else if(userChoice==='paper')
      {
         //computer choices rock,scissor
         userWin=compChoice==='rock'?true:false;
      }
      else{
         //computer choices paper,rock
         userWin=compChoice==='rock'?false:true;
      }
      showWinner(userWin,userChoice,compChoice)
   }

}

choices.forEach((choice)=>{
   choice.addEventListener('click',()=>{
      const userChoice=choice.getAttribute('id')
      
      playGame(userChoice);

   });

});