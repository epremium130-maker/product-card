// Покраска первой карточки

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card');
const purpleHashColor = '#d4b1ff';

recolorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = purpleHashColor;
});

// Покраска всех карточек

const productCards = document.querySelectorAll('.product-card');
const recolorProductCards = document.getElementById('recolor-product-cards-button');
const orangeHashColor = '#ed8106c2';

recolorProductCards.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = orangeHashColor);
});

// Переход на страницу Google

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener ('click', openGoogle);
function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на Google');
  }
}

// Функция выведения текста в консоль при наведении на заголовок

const logHeaderTextContent = document.querySelector ('.main-header');

logHeaderTextContent.addEventListener('mouseover', () => {
  console.log(logHeaderTextContent.textContent);
});

// Кнопка изменяющая цвет

const colorToggleButton = document.querySelector('.color-toggle-button');

colorToggleButton.addEventListener('click', () => {
  colorToggleButton.classList.toggle('changed');
});