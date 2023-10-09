const ul = document.querySelector('.answer-box');
const btn = document.querySelectorAll('.btn');
const hintt = document.querySelector('.hint');
const counter = document.querySelector('.counter');
const img = document.querySelector('.image');
const lost = document.querySelector('.head-lost');
const lostGif = document.querySelector('.lost');
const lostText = document.querySelector('.you-lost');
const home = document.querySelector('#home');
const play = document.querySelector('.rule-ok');
const help = document.querySelector('.help-container');

// For random number
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// For random word
const number = randomNum(0, 41);
let sabd = program[number].word;
sabd = sabd.toUpperCase();
for (let i = 0; i < sabd.length; i++) {
    const li = document.createElement('li');
    li.classList.add('alphabet');
    ul.appendChild(li);
}

// For random hint
let hint = program[number].hint;
hintt.textContent = `Hint: ${hint}`;

// // For filling
let score = 0;
btn.forEach((e) => {
    e.addEventListener('click', () => {
        let letterfound = false;
        for (let i = 0; i < sabd.length; i++) {
            if (e.textContent == sabd[i]) {
                ul.childNodes[i].style.border = 'none';
                ul.childNodes[i].textContent = sabd[i];
                letterfound = true;
            }
        }
        if (letterfound == true) {
            e.style.backgroundColor = 'green';
        }
        else {
            e.style.backgroundColor = 'red';
            score++;
            counter.textContent = `${score}/10`;
            img.src = `./images/${score}bg.png`;
            if (score === 10) {
                setTimeout(() => {
                    lost.style.display = 'block';
                    lost.style.display = 'flex';
                    home.style.filter = 'blur(10px)';
                }, 1000);
            }
        }
        let string = '';
        for (let i = 0; i < ul.childNodes.length; i++) {
            string += ul.childNodes[i].textContent;
        }
        if (string == sabd) {
            lostGif.src = './images/victory.gif';
            lostText.textContent = 'Congrats You Won !!'
            lost.style.display = 'block';
            lost.style.display = 'flex';
            home.style.filter = 'blur(10px)';
        }
    });
})

// For Help
play.addEventListener('click', () => {
    help.style.display = 'none';
    home.style.filter = 'none';
})
