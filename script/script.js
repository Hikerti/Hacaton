const container = document.querySelector('.container__cards');
const form__animation = document.querySelector('#container__form');
const button__animation = document.querySelector('.img_2');
const button__slider__1 = document.querySelector('#button__slider__1');
const button__slider__2 = document.querySelector('#button__slider__2');
const container__cards = document.querySelector('.container__cards');
const container__card = document.querySelectorAll('.container__card');
const logo = document.querySelector('.img_1');
const header = document.querySelector('.header');
const header__nav = document.querySelector('.container__header__media__nav');

const arrCards = [
    {
        img: './img/img_cart_1.png',
        product: "Новогодняя ёлка",
        price: 1999,
    },
    {
        img: './img/img_cart_2.png', 
        product: "Новогодние игрышки",
        price: 399,
    },
    {
        img: './img/img_cart_3.png',
        product: "Набор конфет",
        price: 999,
    },
    { 
        img: './img/img_cart_4.png',
        product: "Машинка на пульте управления",
        price: 2999,
    },
    { 
        img: './img/img_cart_5.png',
        product: "Кукла для девочек",
        price: 1599,
    },
    {
        img: './img/img_cart_3.png',
        product: "Набор конфет",
        price: 999,
    },
    { 
        img: './img/img_cart_4.png',
        product: "Машинка на пульте управления",
        price: 2999,
    },
    { 
        img: './img/img_cart_5.png',
        product: "Кукла для девочек",
        price: 1599,
    },
    {
        img: './img/img_cart_3.png',
        product: "Набор конфет",
        price: 999,
    },
    { 
        img: './img/img_cart_4.png',
        product: "Машинка на пульте управления",
        price: 2999,
    },
    { 
        img: './img/img_cart_5.png',
        product: "Кукла для девочек",
        price: 1599,
    },
];

arrCards.forEach((value) => {
    const card = document.createElement('div');
    card.className = `container__card`;
    card.innerHTML = 
    ` 
        <div class="container__product">
            <img src="${value.img}" alt="#">
            <p class="product">${value.product}</p>
            <p class="price">${value.price} желудей</p>
        </div>
        <button class="button__product">Пожелать</button>
    `
    container.appendChild(card);
    console.log(value.product);
})

button__animation.addEventListener('click', () => {
    if (!form__animation.classList.contains('animation')) {
        form__animation.classList.add('animation');
    } else {
        form__animation.classList.remove('animation');
    }
})

let visibleCards = 0;
let currentIndex = 0;
const totalCards = arrCards.length;
const cardWidth = 280; 

const windowWidth = () => {
    const windowScreen = window.screen.width;
    const screenCard = Math.trunc(windowScreen / cardWidth);
    const maxTotal = totalCards - screenCard;
    return maxTotal;
}

let maxTotal = windowWidth();

window.onresize = () => {
    windowWidth();
}

function updateSliderPosition() {
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxTotal) {
        currentIndex = maxTotal;
    }
    container__cards.scrollTo(currentIndex * cardWidth, 0)
}


button__slider__1.addEventListener('click', () => {
    currentIndex--;
    updateSliderPosition();
});

button__slider__2.addEventListener('click', () => {
    console.log(currentIndex);
    currentIndex++;
    updateSliderPosition();
});


logo.addEventListener('click', () => {
    if (header.style.height === 60 + 'px') {
        header.style.height = 120 + 'px';
        header__nav.style.display = 'flex';
    }
    else {
        header.style.height = 60 + 'px';
        header__nav.style.display = 'none';
    }
})