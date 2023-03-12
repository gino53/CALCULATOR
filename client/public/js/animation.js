/*=============== SCROLL REVEAL ===============*/

const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.top`, { delay: 500, origin: 'top', interval: 200 });
sr.reveal(`.bottom`, { delay: 500, origin: 'bottom', interval: 200 });
sr.reveal(`.right`, { delay: 700, origin: 'right', interval: 200 });
sr.reveal(`.left`, { delay: 700, origin: 'left', interval: 200 });

/*=============== ANIME TEXT ===============*/

const titleCalculator = document.getElementById('calculator_title_text');
const titleCurrency = document.getElementById('currency_title_text');
const titleConverter = document.getElementById('converter_title_text');
const letters = [...document.querySelectorAll('h1 span')];

titleCalculator.addEventListener('mouseenter', handleLetters);
titleCalculator.addEventListener('mouseleave', handleLetters);
titleCurrency.addEventListener('mouseenter', handleLetters);
titleCurrency.addEventListener('mouseleave', handleLetters);
titleConverter.addEventListener('mouseenter', handleLetters);
titleConverter.addEventListener('mouseleave', handleLetters);

let isAnimatingIn = false;
let calledOut = false;
let animOpened = false;

function handleLetters() {

    if (animOpened) {
        animOut();
        animOpened = false;
        return;
    }

    if (isAnimatingIn) {
        calledOut = true;
        return;
    }

    isAnimatingIn = true;

    const animPromise = new Promise((resolve) => {
        animIn()
        setTimeout(() => {
            resolve()
        }, 750)
    })
    animPromise.then(() => {
        isAnimatingIn = false;

        if (calledOut) {
            animOut()
            calledOut = false;
        } else if (!calledOut) {
            animOpened = true;
        }
    })

}

function animIn() {
    anime({
        targets: 'h1 span',
        translateX: function () {
            return anime.random(-250, 250)
        },
        translateY: function () {
            return anime.random(-250, 250)
        },
        translateZ: function () {
            return anime.random(-2000, 750)
        },
        rotate: function () {
            return anime.random(-250, 250)
        },
        easing: 'easeOutCirc',
        duration: 750
    })
}

function animOut() {
    anime({
        targets: 'h1 span',
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotate: 0,
        easing: 'easeInQuad',
        duration: 750
    })
}
