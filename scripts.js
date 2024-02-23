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
        return 'Its a Tie!';
    }
    else if( p=='rock' && c=='paper'){
        return 'You lost!paper beats rock';

    }
    else if( p=='rock' && c=='scissor'){
        return 'You win!rock beats scissor';

    }
    else if( p=='paper' && c=='rock'){
        return 'You win!paper beats rock';

    }
    else if( p=='paper' && c=='scissor'){
        return 'You lost!scissor beats paper';

    }

    else if( p=='scissor' && c=='rock'){
        return 'You lost!rock beats scissor';

    }
    else if( p=='scissor' && c=='paper'){
        return 'You win!scissor beats paper';

    }
    else {
        return 'Invalid input! Please choose rock, paper, or scissors.';
    }
}

function playGame(){
    let i = 0;
    let s1 = 'win';
    let s2 = 'Tie';
    let pw = 0;
    let cw = 0;
    while(i<5){
    let player = prompt('enter rock paper scissor:');
    console.log(player);
    let comp = getComputerChoice();
    console.log(comp);

    let str = playRound(player,comp);
     if (str.includes(s1)){
        pw+=1;
    
     }
     else if(str.includes(s2)){
        pw+=1;
        cw+=1;
     }
     else{
        cw+=1;
     }
     i++;

    }
    console.log(pw);
    console.log(cw);

    if(pw>cw){
        return 'You win with ' + pw + ' points';

    }else{
        return 'You lost with ' + pw + ' points';

    }
    
}

let ans = playGame();
console.log(ans);

