let random = Math.trunc(Math.random()*20)+1;

let score = 20;



document.querySelector('.again').addEventListener('click', function() {
    random = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

// document.querySelector.textContent('.number').textContent = Math.trunc(Math.random()*20)+1;

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value)
    if(!guess){
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.message').textContent = 'Input a number between 1 and 20!!!';
        score--;
        document.querySelector('.score').textContent = score;
    } else if(guess === random){
        document.querySelector('.number').textContent = random;
        document.querySelector('.message').textContent = 'Correct guess!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        score++;
        document.querySelector('.score').textContent = score;
    } else if(guess < random){
        document.querySelector('.message').textContent = 'Secret Number is higher than your guess!';
        document.querySelector('body').style.backgroundColor = 'red';
        score--;
        document.querySelector('.score').textContent = score;
    } else{
        document.querySelector('body').style.backgroundColor = 'red';
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Secret Number is lower than your guess!';
    }
})