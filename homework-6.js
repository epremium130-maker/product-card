
//Создание объекта на основе моих данных

const personalInfo = {
  name: "Eziz",
  age: 23,
  country: "China",
  city: "Wuhan",
  status: "student",
  major: "Teaching Chinese",
  course: 1,
  featureJob: "frontend developer"
}

console.log(personalInfo)

//  Создание объекта, который будет хранить данные об автомобиле

const car = {
  name: "BMW",
  model: "m3",
  year: 2025,
  color: "black",
  gearbox: "automat"
}

car.owner = personalInfo

console.log(car)

// Создание функции проверки макс. скорости

function addMaxSpeed(car) {
  if (car.maxSpeed === undefined) {
    car.maxSpeed = 220
}
}

addMaxSpeed(car)

// Написаник функции, которая получает первым аргументом - объект, а вторым - свойство объекта которое нужно вывести и выводит его значение

function printProperty(obj,propName) {
  console.log(obj[propName])
}

printProperty(car,'color')

// Массив, который содержит названия продуктов

const products = ['banana', 'tomato', 'potato', 'carrot']

// Массив объектов с добавлением еще одного массива

const garage = [
  {brand: 'Mazda', color: 'red', type: 'sedan', year: 2020},
  {brand: 'Lada', color: 'green', type: 'oldschool', year: 1999},
  {brand: 'Porshe', color: 'pink', type: 'sportcar', year: 2024},
  {brand: 'Bentley', color: 'white', type: 'cabriolet', year: 1998},
  {brand: 'Xiaomi', color:'yellow', type: 'electro-sportcar', year: 2025}
]

garage.push({brand: 'Tesla', color:'brown', type: 'electrocar', year: 2022})

console.log(garage)

// Новый массив объедененный со старым

const xiaomiCars = [
  {model: 'su7', type: 'electro-sportcar', color: 'orange', year: 2025},
  {model: 'su7 Max', type: 'electro-sportcar', color: 'metallic', year: 2025},
  {model: 'Ultra', type: 'electro-sportcar', color: 'blue', year: 2025}
]

const cars = [...garage, ...xiaomiCars]

console.log(...garage, ...xiaomiCars)

// Функция переберающая массив

function checkRareness(allCars){
  return allCars.map ((car) => {
    const answer = car.year <= 2000;
    return {
      ...car,
      isRare: answer
    };
  });
}

const finalGarage = checkRareness(cars)

console.log (finalGarage)