var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var buttonIncrement = document.getElementsByName('adicionar')[0];
var buttonDecrement = document.getElementsByName('subtrair')[0];

buttonDecrement.disabled = true;

buttonIncrement.addEventListener('click', function(event) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber >= 6) {
        currentNumberWrapper.style.color = 'blue';
    }

    if (currentNumber > 0) {
        buttonDecrement.disabled = false;
    }

    if (currentNumber >= 10) {
        buttonIncrement.disabled = true;
    }

});

buttonDecrement.addEventListener('click', function(event) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 6) {
        currentNumberWrapper.style.color = 'black';
    }

    if (currentNumber <= 0) {
        buttonDecrement.disabled = true;
    }

    if (currentNumber < 10) {
        buttonIncrement.disabled = false;
    }

});
