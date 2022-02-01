// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let hello = 'hello',
    owu = 'owu',
    com = 'com',
    ua = 'ua',
    num1 = 1,
    num2 = 10,
    num3 = -999,
    num4 = 123,
    num5 = 3.14,
    num6 = 2.7,
    num7 = 16,
    booleanTrue = true,
    booleanFalse = false;

// Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log
console.log(`Hello = ${hello}`);
console.log(`Owu = ${owu}`);
console.log(`Com = ${com}`);
console.log(`Ua = ${ua}`);
console.log(`Number = ${num1}`);
console.log(`Number = ${num2}`);
console.log(`Number = ${num3}`);
console.log(`Number = ${num4}`);
console.log(`Number = ${num5}`);
console.log(`Number = ${num6}`);
console.log(`Number = ${num7}`);
console.log(`Boolean = ${booleanTrue}`);
console.log(`Boolean = ${booleanFalse}`);
// alert
alert(`Hello = ${hello}`);
alert(`Owu = ${owu}`);
alert(`Com = ${com}`);
alert(`Ua = ${ua}`);
alert(`Number = ${num1}`);
alert(`Number = ${num2}`);
alert(`Number = ${num3}`);
alert(`Number = ${num4}`);
alert(`Number = ${num5}`);
alert(`Number = ${num6}`);
alert(`Number = ${num7}`);
alert(`Boolean = ${booleanTrue}`);
alert(`Boolean = ${booleanFalse}`);
// document.write
document.write(`Hello = ${hello}`);
document.write(`Owu = ${owu}`);
document.write(`Com = ${com}`);
document.write(`Ua = ${ua}`);
document.write(`Number = ${num1}`);
document.write(`Number = ${num2}`);
document.write(`Number = ${num3}`);
document.write(`Number = ${num4}`);
document.write(`Number = ${num5}`);
document.write(`Number = ${num6}`);
document.write(`Number = ${num7}`);
document.write(`Boolean = ${booleanTrue}`);
document.write(`Boolean = ${booleanFalse}`);
// ------------------------------------------------------------

// - Переприсвоїти кожній змінній з завдання значення на довільне.
    hello = '2',
    owu = 'owu2',
    com = 'com2',
    ua = 'ua2',
    num1 = 12,
    num2 = 102,
    num3 = -9992,
    num4 = 1232,
    num5 = 3.142,
    num6 = 2.72,
    num7 = 162,
    booleanTrue = false,
    booleanFalse = true;

// Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log
console.log(`Hello = ${hello}`);
console.log(`Owu = ${owu}`);
console.log(`Com = ${com}`);
console.log(`Ua = ${ua}`);
console.log(`Number = ${num1}`);
console.log(`Number = ${num2}`);
console.log(`Number = ${num3}`);
console.log(`Number = ${num4}`);
console.log(`Number = ${num5}`);
console.log(`Number = ${num6}`);
console.log(`Number = ${num7}`);
console.log(`Boolean = ${booleanTrue}`);
console.log(`Boolean = ${booleanFalse}`);
// alert
alert(`Hello = ${hello}`);
alert(`Owu = ${owu}`);
alert(`Com = ${com}`);
alert(`Ua = ${ua}`);
alert(`Number = ${num1}`);
alert(`Number = ${num2}`);
alert(`Number = ${num3}`);
alert(`Number = ${num4}`);
alert(`Number = ${num5}`);
alert(`Number = ${num6}`);
alert(`Number = ${num7}`);
alert(`Boolean = ${booleanTrue}`);
alert(`Boolean = ${booleanFalse}`);
// document.write
document.write(`Hello = ${hello}`);
document.write(`Owu = ${owu}`);
document.write(`Com = ${com}`);
document.write(`Ua = ${ua}`);
document.write(`Number = ${num1}`);
document.write(`Number = ${num2}`);
document.write(`Number = ${num3}`);
document.write(`Number = ${num4}`);
document.write(`Number = ${num5}`);
document.write(`Number = ${num6}`);
document.write(`Number = ${num7}`);
document.write(`Boolean = ${booleanTrue}`);
document.write(`Boolean = ${booleanFalse}`);
// ------------------------------------------------------------------

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person. (Не об'єкт).

let firstName = 'Alexandr',
    lastName = 'Kazimir',
    middleName = 'Volodymyrovych';
let fullName = `${lastName} ${firstName} ${middleName}`;
console.log(`Повне ім'я - ${fullName}`);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

firstName2 = prompt("Напиши своє ім'я", 'Alexandr');
middleName2 = prompt("Напиши своє ім'я по батькові", 'Volodymyrovych');
fullYear2 = prompt("Напиши cвій вік", '37');

// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let fullName2 = `${lastName} ${firstName} ${middleName}`;
console.log(`Вітаю ${firstName2} ${middleName2}. Тобі ${fullYear2} років`);
alert(`Вітаю ${firstName2} ${middleName2}. Тобі ${fullYear2} років`);
document.write(`Вітаю ${firstName2} ${middleName2}. Тобі ${fullYear2} років`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

console.log(5 < 6) //-> true
console.log(5 > 6) //-> false
console.log(5 == 6) //-> false
console.log(5 === 6) //-> false
console.log(10 == 10) //-> true
console.log(10 === 10) //-> true
console.log(10 != 10) //-> false
console.log(10 > 10) //-> false
console.log(10 < 10) //-> false
console.log(123 === '123') //-> false
console.log(123 == '123') //-> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";
    let x = 5;
document.write(str + x + "<br/>"); // 205
//При сумировании со строкой идет конконтинация строк.
document.write(str - x + "<br/>"); // 15
//При отнимании, дилении и умножении значение строки переводится в число и происходит отнимание, деление или
// умножение, но если в строке с числом будет любой другой какойто знак то результат будет NaN - хотя
// это тоже число.
document.write(str * "2" + "<br/>"); // 40
document.write(str / 2 + "<br/>"); // 10