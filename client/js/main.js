/*=============== ENABLED DISABLED ===============*/

const calculatorBtn = document.getElementById('calculator_btn');
const converterBtn = document.getElementById('converter_btn');
const calculator = document.getElementById('calculator');
const converter = document.getElementById('converter');

calculatorBtn.addEventListener('click', function () {
    converterBtn.style.transform = 'translateX(0)';
    calculatorBtn.style.transform = 'translateX(50px)';
    calculator.classList.remove('disabled');
    calculator.classList.add('enabled');
    converter.classList.remove('enabled');
    converter.classList.add('disabled');
});

converterBtn.addEventListener('click', function () {
    calculatorBtn.style.transform = 'translateX(0px)';
    converterBtn.style.transform = 'translateX(50px)';
    converter.classList.remove('disabled');
    converter.classList.add('enabled');
    calculator.classList.remove('enabled');
    calculator.classList.add('disabled');
});

/*=============== CALCULATOR ===============*/

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 8: document.getElementById('clear').click();
            break
        case 13: document.getElementById('equal').click();
        default:
            break;
    }
});

/*=============== CONVERTER ===============*/

const pxInput = document.getElementById('pxInput');
const remInput = document.getElementById('remInput');
const percentInput = document.getElementById('percentInput');

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

pxInput.addEventListener('input', function () {
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

remInput.addEventListener('input', function () {
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

percentInput.addEventListener('input', function () {
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
