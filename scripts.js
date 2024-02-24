function getComputerChoice(){
    const arr = ['rock','paper','scissor'];

    let index = generateRandom(0,3);

    return arr[index];

}


function generateRandom(min = 0, max = 3) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

function playRound(playerSelection,computerSelection){

    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    if (p === c){
        // cw++;
        // pw++;
        return 'Its a Tie!';
        // return cw;
    }
    else if( p=='rock' && c=='paper'){
        return 'You lost!paper beats rock';
        // cw++;

    }
    else if( p=='rock' && c=='scissor'){
        return 'You win!rock beats scissor';
        // pw++;
    }
    else if( p=='paper' && c=='rock'){
        return 'You win!paper beats rock';
        // pw++;
    }
    else if( p=='paper' && c=='scissor'){
        return 'You lost!scissor beats paper';
        // cw++;
    }

    else if( p=='scissor' && c=='rock'){
        return 'You lost!rock beats scissor';
        // cw++;
    }
    else if( p=='scissor' && c=='paper'){
        return 'You win!scissor beats paper';
        // pw++;
    }
    else {
        return 'Invalid input! Please choose rock, paper, or scissors.';
        // cw==cw;
        // pw==pw;
    }
    // return pw;
}

// function playGame(){
//     let i = 0;
//     let s1 = 'win';
//     let s2 = 'Tie';
//     let pw = 0;
//     let cw = 0;
//     while(i<5){
//     let player = prompt('enter rock paper scissor:');
//     console.log(player);
//     let comp = getComputerChoice();
//     console.log(comp);

//     let str = playRound(player,comp);
//      if (str.includes(s1)){
//         pw+=1;
    
//      }
//      else if(str.includes(s2)){
//         pw+=1;
//         cw+=1;
//      }
//      else{
//         cw+=1;
//      }
//      i++;

//     }
//     console.log(pw);
//     console.log(cw);

//     if(pw>cw){
//         return 'You win with ' + pw + ' points';

//     }else{
//         return 'You lost with ' + pw + ' points';

//     }
    
// }

// let ans = playGame();
// console.log(ans);
let cw = 0;
let pw = 0;
const s1 = 'win';
const s2 = 'Tie';


const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const pres = document.querySelector('#pres');
const cres = document.querySelector('#cres');

const out = document.querySelector('#stroutput');
const win = document.querySelector('#winner');



// console.log(btn1.textContent);
if (pw<6 && cw<6){
btn1.addEventListener('click',()=>{
    // if(pw<5 && cw<5){
    let c1 = getComputerChoice();
    let str1 =  playRound(btn1.textContent,c1);
    console.log(str1);
    if (str1.includes(s1)){
        pw+=1;
    
     }
     else if(str1.includes(s2)){
        pw+=1;
        cw+=1;
     }
     else{
        cw+=1;
     }
     out.textContent = str1;
     pres.textContent = pw;
     cres.textContent = cw;
     if(pw==5 & cw==5){
        win.textContent = 'TIE';
     }
     

     else if (pw==5){
        win.textContent = 'YOU WIN';

     }else if(cw==5){
        win.textContent = 'YOU LOSE';
     }

    // }else{
    //     if(pw>cw){
    //     win.textContent = 'YOU WIN';
    // }else if(pw==cw){
    //     win.textContent = 'TIE';
    //     }else{
    //     win.textContent = 'YOU LOSE';
    //     }
    // }

})

btn2.addEventListener('click',()=>{

    let c2 = getComputerChoice();
    let str2 = playRound(btn2.textContent,c2);
    console.log(str2);

    if (str2.includes(s1)){
        pw+=1;
    
     }
     else if(str2.includes(s2)){
        pw+=1;
        cw+=1;
     }
     else{
        cw+=1;
     }
     out.textContent = str2;

     pres.textContent = pw;
     cres.textContent = cw;
     if(pw==5 & cw==5){
        win.textContent = 'TIE';
     }

     else if (pw==5){
        win.textContent = 'YOU WIN';

     }else if(cw==5){
        win.textContent = 'YOU LOSE';
     }
    }
)

btn3.addEventListener('click',()=>{

    let c3= getComputerChoice();
    let str3 = playRound(btn3.textContent,c3);
    console.log(str3);

    if (str3.includes(s1)){
        pw+=1;
    
     }
     else if(str3.includes(s2)){
        pw+=1;
        cw+=1;
     }
     else{
        cw+=1;
     }
     out.textContent = str3;

     pres.textContent = pw;
     cres.textContent = cw;
     if(pw==5 & cw==5){
        win.textContent = 'TIE';
     }
     else if (pw==5){
        win.textContent = 'YOU WIN';

     }else if(cw==5){
        win.textContent = 'YOU LOSE';
     }

})
}




// console.log(res.textContent);
// console.log(cw);

