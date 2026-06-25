// Импорт массива с другого файла 

import { productCards } from "./product-cards.js";

const cardTemplate = document.querySelector("#product-card-template")
const cardWrapper = document.querySelector(".product-card__wraper")

// Вывели словарь в консоль методом reduce

const productDictionary = productCards.reduce((acc, product) => {
  acc[product.title] = product.descr;
  return acc;
}, {});

console.log(productDictionary);

// Функция-конвейер для отрисовки карточек

function renderCards(productCards, count) {

cardWrapper.innerHTML = '';

for (let i = 0; i < count; i++) {

const cardClone = cardTemplate.content.cloneNode(true);

const currentProduct = productCards[i];

const titleElement = cardClone.querySelector('.product-card__title');
titleElement.textContent = currentProduct.title;

const descrElement = cardClone.querySelector('.product-card__descr');
descrElement.textContent = currentProduct.descr;

const priceElement = cardClone.querySelector('.price-value');
priceElement.textContent = currentProduct.price;

const imgElement = cardClone.querySelector('.product-card__img img');
imgElement.src = currentProduct.img;
imgElement.alt = currentProduct.title;

// Выводим даннык состава в li-шки

const compoundList = cardClone.querySelector('.product-card__compound');

currentProduct.compound.forEach(function(ingredient) {
  const li = document.createElement('li');
  li.textContent = ingredient;
  compoundList.append(li);
});

cardWrapper.append(cardClone);
}}

// Функция инициализации (старт программы) и защита ввода

function init() {
  const count = +prompt('Сколько карточек отобразить от 1 до 5?');


if (count < 1 || count > 5 || !Number.isInteger(count)) {
  alert('Неверное число! Пожалуйста, введите число от 1 до 5.');
  return;
}

renderCards(productCards, count);
}

init();