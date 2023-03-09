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

//Définition des éléments HTML
const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const convertButton = document.getElementById("convert");
const resultElement = document.getElementById("result");

//Requête à l'API de taux de change pour récupérer les taux de change actuels
fetch("https://openexchangerates.org/api/latest.json?app_id=8f29d912a81a4072a60c1c2c8ded2ac0")
    .then(response => response.json())
    .then(data => {
        //Récupération des taux de change
        const rates = data.rates;

        //Écouteur d'événement pour le bouton de conversion
        convertButton.addEventListener("click", () => {
            //Récupération des valeurs des éléments HTML
            const amount = Number(amountInput.value);
            const from = fromSelect.value;
            const to = toSelect.value;

            //Récupération du taux de change pour la devise de départ
            const fromRate = rates[from];

            //Récupération du taux de change pour la devise d'arrivée
            const toRate = rates[to];

            //Calcul de la conversion
            const result = (amount / fromRate) * toRate;

            //Affichage du résultat
            resultElement.textContent = `${result.toFixed(2)} ${to}`;
        });
    })
    .catch(error => {
        console.error(error);
        resultElement.textContent = "Une erreur est survenue lors de la récupération des taux de change.";
    });
