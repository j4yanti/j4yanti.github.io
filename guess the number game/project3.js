let randomNum=Math.trunc(Math.random()*100)+1;
console.log(randomNum);

let currentScore=10;
let historyHighScore=0;
let userInputNew=[];


let checkbtn=document.querySelector('.checkbtn');
let reset=document.querySelector('.resetbtn');
let msg=document.querySelector('h3');
let userInput=document.querySelector('input');
let currntScore=document.querySelector('.crrntscore');
let resetbtn=document.querySelector('.resetbtn');
let historylist=document.querySelector('.historylist');
let highscore=document.querySelector('.highscore');
let spongethink=document.querySelector('.spongethink')
let spongewin=document.querySelector('.spongewin')
let spongelose=document.querySelector('.spongelose')


checkbtn.addEventListener('click',function(){

// point to element in
// check if user input matches the random number
if (currentScore>0){
    if (Number(userInput.value)<0 || (Number(userInput.value))>100 || typeof userInput.value === 'string'){
        msg.textContent='Only enter numbers between 1 and 100!';
        msg.style.color='gray';
        msg.style.fontSize='20px';
    }


    if(Number(userInput.value)===randomNum){
        
        msg.textContent='You win! Press Reset to play again!';
        msg.style.color='green';
        msg.style.fontSize='20px';
        spongethink.style.opacity='0';
        spongewin.style.opacity='1';





        userInputNew.push(userInput.value);
        console.log(userInputNew);
        historylist.textContent=Array(userInputNew);


       if (currentScore>historyHighScore){
        historyHighScore=currentScore
        highscore.textContent=String(historyHighScore)
       } 

        
    }
    else{

        if(Number(userInput.value)>randomNum){
            msg.textContent='Number too high!';
            msg.style.color='red';
            msg.style.fontSize='20px';
            currentScore=currentScore-1;
            currntScore.textContent=String(currentScore);

            userInputNew.push(userInput.value);
            console.log(userInputNew);
            historylist.textContent=Array(userInputNew);

        }
        if(Number(userInput.value)<randomNum){
            msg.textContent='Number too low!';
            msg.style.color='purple';
            msg.style.fontSize='20px';
            currentScore=currentScore-1;
            currntScore.textContent=String(currentScore);

            userInputNew.push(userInput.value);
            console.log(userInputNew);
            historylist.textContent=Array(userInputNew);

        }

    }
}
  else{
    msg.textContent='You lose! The correct number was ' + String(randomNum) + '. Press Reset to play again!'
    spongelose.style.opacity='1'
  }
}  
)
//resets everything
resetbtn.addEventListener('click',function(){
    currentScore=10;
    userInputNew=[];
    historylist.textContent=Array(userInputNew);
    currntScore.textContent=String(currentScore);
    randomNum=Math.trunc(Math.random()*100)+1;
    console.log(randomNum);
    msg.textContent='The game has reset.';
    msg.style.color='hotpink';
    msg.style.fontSize='20px';
    spongelose.style.opacity='0';
    spongewin.style.opacity='0';
    spongethink.style.opacity='1';



}
)





