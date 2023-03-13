/*=============== ENABLED DISABLED ===============*/

const calculator = document.getElementById('calculator');
const calculatorBtn = document.getElementById('calculator_btn');
const calculatorTitle = document.getElementById('calculator_title');
const currency = document.getElementById('currency');
const currencyBtn = document.getElementById('currency_btn');
const currencyTitle = document.getElementById('currency_title');
const converter = document.getElementById('converter');
const converterBtn = document.getElementById('converter_btn');
const converterTitle = document.getElementById('converter_title');
const contact = document.getElementById('contact');
const contactBtn = document.getElementById('contact_btn');
const contactTitle = document.getElementById('contact_title');

calculatorBtn.addEventListener('click', function () {
    calculator.classList.remove('disabled');
    calculator.classList.add('enabled');
    calculatorTitle.classList.remove('disabled');
    calculatorTitle.classList.add('enabled');
    currency.classList.remove('enabled');
    currency.classList.add('disabled');
    currencyTitle.classList.remove('enabled');
    currencyTitle.classList.add('disabled');
    converter.classList.remove('enabled');
    converter.classList.add('disabled');
    converterTitle.classList.remove('enabled');
    converterTitle.classList.add('disabled');
    contact.classList.remove('enabled');
    contact.classList.add('disabled');
    contactTitle.classList.remove('enabled');
    contactTitle.classList.add('disabled');
});

currencyBtn.addEventListener('click', function () {
    currency.classList.remove('disabled');
    currency.classList.add('enabled');
    currencyTitle.classList.remove('disabled');
    currencyTitle.classList.add('enabled');
    calculator.classList.remove('enabled');
    calculator.classList.add('disabled');
    calculatorTitle.classList.remove('enabled');
    calculatorTitle.classList.add('disabled');
    converter.classList.remove('enabled');
    converter.classList.add('disabled');
    converterTitle.classList.remove('enabled');
    converterTitle.classList.add('disabled');
    contact.classList.remove('enabled');
    contact.classList.add('disabled');
    contactTitle.classList.remove('enabled');
    contactTitle.classList.add('disabled');
});

converterBtn.addEventListener('click', function () {
    converter.classList.remove('disabled');
    converter.classList.add('enabled');
    converterTitle.classList.remove('disabled');
    converterTitle.classList.add('enabled');
    calculator.classList.remove('enabled');
    calculator.classList.add('disabled');
    calculatorTitle.classList.remove('enabled');
    calculatorTitle.classList.add('disabled');
    currency.classList.remove('enabled');
    currency.classList.add('disabled');
    currencyTitle.classList.remove('enabled');
    currencyTitle.classList.add('disabled');
    contact.classList.remove('enabled');
    contact.classList.add('disabled');
    contactTitle.classList.remove('enabled');
    contactTitle.classList.add('disabled');
});

contactBtn.addEventListener('click', function () {
    contact.classList.remove('disabled');
    contact.classList.add('enabled');
    contactTitle.classList.remove('disabled');
    contactTitle.classList.add('enabled');
    calculator.classList.remove('enabled');
    calculator.classList.add('disabled');
    calculatorTitle.classList.remove('enabled');
    calculatorTitle.classList.add('disabled');
    currency.classList.remove('enabled');
    currency.classList.add('disabled');
    currencyTitle.classList.remove('enabled');
    currencyTitle.classList.add('disabled');
    converter.classList.remove('enabled');
    converter.classList.add('disabled');
    converterTitle.classList.remove('enabled');
    converterTitle.classList.add('disabled');
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

/*=============== CURRENCY ===============*/

const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const convertButton = document.getElementById("convert");
const resultElement = document.getElementById("result");

fetch("https://openexchangerates.org/api/latest.json?app_id=8f29d912a81a4072a60c1c2c8ded2ac0")
    .then(response => response.json())
    .then(data => {
        const rates = data.rates;

        function convertCurrency() {
            const amount = Number(amountInput.value);
            const from = fromSelect.value;
            const to = toSelect.value;

            if (!amount) {
                resultElement.textContent = "Please enter a amount";
                return;
            }

            if (!from || !to || !rates[from] || !rates[to]) {
                resultElement.textContent = "Please select currencies.";
                return;
            }

            const fromRate = rates[from];
            const toRate = rates[to];

            const result = (amount / fromRate) * toRate;

            resultElement.textContent = `${result.toFixed(2)} ${to}`;
        }

        amountInput.addEventListener('input', convertCurrency);
        fromSelect.addEventListener('change', convertCurrency);
        toSelect.addEventListener('change', convertCurrency);

        convertCurrency();
    })
    .catch(error => {
        console.error(error);
        resultElement.textContent = "Une erreur est survenue lors de la récupération des taux de change.";
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
