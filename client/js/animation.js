/*=============== ANIME ===============*/

const title = document.querySelector('h1');
const letters = [...document.querySelectorAll('h1 span')]

title.addEventListener('mouseenter', handleLetters);
title.addEventListener('mouseleave', handleLetters);

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

/*=============== SCROLL REVEAL ===============*/

const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.top`, { delay: 500, origin: 'top', interval: 200 });
sr.reveal(`.bottom`, { delay: 500, origin: 'bottom', interval: 200 });
sr.reveal(`.right`, { delay: 700, origin: 'right' });

/*=============== ENABLED DISABLED ===============*/

const calculatorBtn = document.getElementById("calculator_btn");
const converterBtn = document.getElementById("converter_btn");
let calculator = document.getElementById('calculator');
let converter = document.getElementById('converter');

calculatorBtn.addEventListener('click', function () {
    converterBtn.style.transform = "translateX(0)";
    calculatorBtn.style.transform = "translateX(50px)";
    calculator.classList.remove('disabled');
    calculator.classList.add('enabled');
    converter.classList.remove('enabled');
    converter.classList.add('disabled');
});

converterBtn.addEventListener('click', function () {
    calculatorBtn.style.transform = "translateX(0px)";
    converterBtn.style.transform = "translateX(50px)";
    converter.classList.remove('disabled');
    converter.classList.add('enabled');
    calculator.classList.remove('enabled');
    calculator.classList.add('disabled');
});

const pxInput = document.getElementById("pxInput");
const remInput = document.getElementById("remInput");
const percentInput = document.getElementById("percentInput");

function convertPxToRem(px) {
    return px / parseFloat(16);
}

function convertPxToPercent(px) {
    return (px / parseFloat(16)) * 100;
}

function convertRemToPx(rem) {
    return rem * parseFloat(16);
}

function convertRemToPercent(rem) {
    return rem * 100;
}

function convertPercentToPx(percent) {
    return percent / 100 * parseFloat(16);
}

function convertPercentToRem(percent) {
    return percent / 100;
}

pxInput.addEventListener("input", function () {
    const pxValue = this.value;
    const remValue = convertPxToRem(pxValue);
    const percentValue = convertPxToPercent(pxValue);
    if (remValue) {
        remInput.value = remValue;
    } else {
        remInput.value = '';
    }
    if (percentValue) {
        percentInput.value = percentValue;
    } else {
        percentInput.value = '';
    }
});

remInput.addEventListener("input", function () {
    const remValue = this.value;
    const pxValue = convertRemToPx(remValue);
    const percentValue = convertRemToPercent(remValue);
    if (pxValue) {
        pxInput.value = pxValue;
    } else {
        pxInput.value = '';
    }
    if (percentValue) {
        percentInput.value = percentValue;
    } else {
        percentInput.value = '';
    }
});

percentInput.addEventListener("input", function () {
    const percentValue = this.value;
    const pxValue = convertPercentToPx(percentValue);
    const remValue = convertPercentToRem(percentValue);
    if (pxValue) {
        pxInput.value = pxValue;
    } else {
        pxInput.value = '';
    }
    if (remValue) {
        remInput.value = remValue;
    } else {
        remInput.value = '';
    }
});