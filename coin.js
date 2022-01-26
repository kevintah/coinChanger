/**
 * @author Kevin Tah Njokom
 * @copyright public
 * @description
 *  - Give me some change!
**/

var coinsValues = [
    {
        coin: "penny",
        value: 0.01
    },
    {
        coin: "nickel",
        value: 0.05
    },
    {
        coin: "dime",
        value: 0.1
    },
    {
        coin: "quarter",
        value: 0.25
    },
    {
        coin: "dollar",
        value: 1.0
    }
];

var coinsChange = [
    {
        coin: "penny",
        numCoins: 0
    },
    {
        coin: "nickel",
        numCoins: 0
    },
    {
        coin: "dime",
        numCoins: 0
    },
    {
        coin: "quarter",
        numCoins: 0
    },
    {
        coin: "dollar",
        numCoins: 0
    }
];


var allValues = [];
var maxValue = 0;
var numberOf = 0;
var multiplicativeFactor;
var sub;
var newAmountNow;
var amount;
var count = 0;

function findMax(allValues) {
    theMaxValue = Math.max(...allValues);
    maxValue = theMaxValue;
}

function drop(allValues) {
    if (maxValue > amount) {
        allValues.splice(index, 1);
        findMax(allValues);
    }
}

function divideIt(amount, maxValue) {
    numberOf = Math.floor(amount / maxValue);
}


function updateIndex(maxValue) {
    index = allValues.indexOf(maxValue);
}

function updateChange(index, coinsChange) {

    coinsChange[index].numCoins = numberOf;

}

function newAmount(maxValue, amount, allValues) {
    drop(allValues);
    multiplicativeFactor = coinsValues[index].value;
    sub = (multiplicativeFactor * numberOf);
    newAmountNow = (amount - sub);
    amount = newAmountNow;
    allValues.splice(index, 1);
}

function loadCoins(coinsValues) {
    for (var i = 0; i < coinsValues.length; i++) {

        allValues[i] = coinsValues[i].value;
    }
    count++;
}

function change(amount) {
    if (count == 0) {
        loadCoins(coinsValues);
    }

    findMax(allValues);
    divideIt(amount, maxValue);
    updateIndex(maxValue);
    updateChange(index, coinsChange);
    newAmount(maxValue, amount, allValues);


    if (newAmount != 0 && allValues.length > 0) {
        updateChange(index, coinsChange)
        amount = newAmountNow.toFixed(2);
        change(amount);
    }

    console.log(coinsChange);
    console.log(amount);

}

change(23.45);
