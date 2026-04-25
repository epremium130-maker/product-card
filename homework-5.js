// 3. Создать функцию, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль

function showWeather(city, degree) {
  console.log(`Сейчас в ${city} температура — ${degree} градусов по Цельсию`);
}

showWeather('Wuhan','20');

// 4. Создать переменную, которая хранит внутри себя скорость света и функцию которая при проверке выводит 1 из 3 логов в консоль

const LIGHT_SPEED = 299792;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED){
    console.log('Сверхсветовая скорость');
  } else if (speed < LIGHT_SPEED) {
    console.log('Субсветовая  скорость');
  } else {
    console.log('Скорость света');
  }
}

checkSpeed(2997);

// 5. Создать переменную №1, которая содержит продукт и переменную №2, которая содержит его цену и с помощью функции приобрести товар

const toyota = 7000

function calcBudget(budget) {
  if (budget >= toyota) {
    console.log('Toyota приобретена. Спасибо за покупку!');
  } else {
    console.log(`Вам не хватает ${toyota - budget}$, пополните баланс`)
  }
}
calcBudget(5400)

//6. Создать 1 функцию и именовать её по своему усмотрению

function sayBye(name) {
  console.log(`Goodbye ${name}`)
}

sayBye('EZ')

//7. Создать 3 переменных (без разницы каких) и именовать их по своему усмотрению

var shoes = 'Li-Ning'
let size = '41'
const toUse = 'football'
