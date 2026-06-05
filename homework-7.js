// Создали массив чисел и получили числа начиная с 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbers = numbers.slice (4, 10);
console.log(newNumbers)

// Создали массив строк с проверкой на определенную сущность

const ai = ['ChatGPT', 'DeepSeek', 'Claude', 'Gemini', 'Grok']
const isQwenHere = ai.includes('Qwen');
console.log(isQwenHere)

// Написал функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный

const revNumbers = numbers.reverse();
const revAi = ai.reverse();
console.log(revNumbers)
console.log(revAi)

// Добавление массива по ссылке через файл 'comment.js'

import { comExample } from "./comments.js"

// Вывод в консоль почт которые содержат '.com'

const filteredComments = comExample.filter(comment => comment.email.includes('.com'));
console.log(filteredComments)

// Перебрал массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const changedPostId = comExample.map(comment => comment.id <= 5 ? ({...comment, postId: 2}) : ({...comment, postId:1}));
console.log(changedPostId)

// Перебрал массив, что бы объекты состояли только из id и name

const commentsWithOnlyNameAndId = comExample.map(comment => ({id: comment.id , name: comment.name}));
console.log(commentsWithOnlyNameAndId)

// Перебирал массив, и добавил объектам свойство isInvalid

const addIsinvalid = comExample.map(comment => ({...comment, isInvalid: comment.body.length > 180 ? true : false}));
console.log(addIsinvalid)

// Вывел массив почт с помощью reduce

const emailsWithReduce = comExample.reduce((acc, comment) => [...acc, comment.email], []);
console.log(emailsWithReduce)

// Вывел массив почт с помощью map

const emailsWithMap = comExample.map(comment => comment.email);
console.log(emailsWithMap)

// Перебрал массив и преоброзовал его к строке

const emailsStringWithJoin = comExample.map(comment => comment.email).join(', ');
console.log(emailsStringWithJoin)