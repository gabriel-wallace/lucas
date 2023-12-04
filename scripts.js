const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const audio = document.getElementById("myAudio");
const gameOver = document.querySelector('.game-board')
const deadSong = new Audio('./assets/rsrs.mp3');
const night = document.querySelector('.sol')

const startGame = () => {
    audio.play();
}

const jump = () => {
    mario.classList.add('jump');
    audio.play();
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        jump();
    }
});

document.addEventListener('touchstart', event => {
    jump();
});

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.src = './assets/imagem-triste.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        gameOver.style.backgroundImage = 'url(./assets/game-over.webp)';
        gameOver.style.backgroundRepeat = 'no-repeat';
        gameOver.style.backgroundSize = 'cover';
        gameOver.style.backgroundPosition = 'center center';
        audio.pause()
        night.src = './assets/kid.jpeg'
        night.style.width = '10%';
        night.style.height = '20%';
        night.style.top = '60px';
        night.style.borderRadius = '50%'
        deadSong.play();
    }
}, 10);
