//Array contendo o alfabeto em hiragana
var images = ['a','i','u','e','o','ka','ki','ku','ke','ko','sa','shi','su','se','so','ta','chi','tsu','te','to',
            'na','ni','nu','ne','no','ha','hi','fu','he','ho','ma','mi,','mu','me','mo','ra','ri','ru','re','ro',
            'ya','yu','yo','wa','wo','n'];

//Array que armazenará o index das imagens já adicionadas, para que não haja repetição
var imgAdded = [];

//Enquanto não selecionar 20 imagens
while(imgAdded.length != 20){
    //Escolhe um index aleatóriamente
    index = Math.floor(Math.random() * images.length);
    
    //Verifica se o index escolhido já foi adicionado na tela
    if(!imgAdded.includes(index)){
        //Seleciona a imagem correspondente ao index escolhido
        var card = images[index];
        //Recupera o main
        var main = document.getElementsByTagName('main')[0];
        //Cria um elemento div que conterá as imagens de frente e verso
        var elemDiv = document.createElement('div');
        //Adiciona a classe "card" a div criada
        elemDiv.classList.add("card");
        //Adiciona a propriedade "data-card" com o valor da carta
        elemDiv.setAttribute("data-card", card);
        
        //Cria o elemento img referente a face da carta
        var elemImgFront = document.createElement('img');
        //Adiciona a classe "card-front" a img criada
        elemImgFront.classList.add("card-front");
        //Adiciona o src da imagem
        elemImgFront.setAttribute("src", `./assets/img/${card}.png`);
        //Adiciona o alt da imagem
        elemImgFront.setAttribute("alt", "face da carta");
        //Insere a img na div
        elemDiv.appendChild(elemImgFront);

        //Cria o elemento img referente a face da carta
        var elemImgBack = document.createElement('img');
        //Adiciona a classe "card-back" a img criada
        elemImgBack.classList.add("card-back");
        //Adiciona o src da imagem
        elemImgBack.setAttribute("src", `./assets/img/back.png`);
        //Adiciona o alt da imagem
        elemImgBack.setAttribute("alt", "verso da carta");
        //Insere a img na div
        elemDiv.appendChild(elemImgBack);

        //Insere a div no main
        main.appendChild(elemDiv);
        //Insere outra div no main pois cada carta precisa aparecer duas vezes
        main.appendChild(elemDiv.cloneNode(true));
        //Insere no array o index usado, para saber quais imagens já foram adicionadas
        imgAdded.push(index);
    }
}

/* Código copiado da aula */

const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

//Função para virar carta
function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

//Função que checa se as cartas são iguais
function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCards();
}

//Função que desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

//Funcão que desvira as cartas
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

//Função que reseta o tabuleiro
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//Função que embaralha as cartas
(function shuffle() {
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 12);
        card.style.order = ramdomPosition;
    })
})();

//Adiciona evento de clique na carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});