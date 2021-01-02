let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

//  randomClass array below this contains the rock, paper, scissors Icon from font-awesome
const randomClasses = ["far fa-hand-rock", "far fa-hand-paper", "far fa-hand-scissors"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

//  Game Funtionality: Setting forEach function for the buttons.
const game = () => {
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
        //  Random rock paper scissor for the computer and the player
            let clickedbtn = e.target.className;
            showIcon.className = clickedbtn;
            let randomNum = Math.floor(Math.random() * randomClasses.length);
            computerShowIcon.className = randomClasses[randomNum];

        //  Game score
        //  If its a tie
            if(showIcon.className === computerShowIcon.className) {
                pScore.innerHTML = pScore.innerHTML;
                cScore.innerHTML = cScore.innerHTML;
                text.innerHTML = "It's a Tie !";
                text.style.color = 'orange';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'orange';
            }

        // If its not a tie
            else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a Win !";
                text.style.color = 'rgb(1, 146, 1)';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'rgb(1, 146, 1)';
            } else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You Loosed !";
                text.style.color = 'red';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'red';
            } else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You Loosed !";
                text.style.color = 'red';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'red';
            } else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a Win !";
                text.style.color = 'rgb(1, 146, 1)';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'rgb(1, 146, 1)';
            }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a Win !";
                text.style.color = 'rgb(1, 146, 1)';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'rgb(1, 146, 1)';
            } else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You Loosed !";
                text.style.color = 'red';
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'red';
            }
        });
    });
};

//  Calling the function
game();