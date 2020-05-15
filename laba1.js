"use strict";

function winner(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max[1] < arr[i][1])
            max = arr[i];
    }
    alert("Победитель " + max[0]);
}

function resultSportsman(arr) {
    let count = [];
    for (let i = 0; i < Math.floor((arr.length - 1) / 5); i++) {
        count.push(Math.floor(arr.slice(5 * i + 1, 5 * i + 6).reduce((accumulator, currentValue) =>
            accumulator + currentValue) / 5));
    }
    let sum = count.sort().slice(1, count.length - 1).reduce((accumulator, currentValue) =>
        accumulator + currentValue) / 5;
    count.splice(0, sportsman.length, arr[0], sum);
    return count;
}

function separator(arr) {
    let i = 1;
    let ok = false;
    while (i < arr.length) {
        ok = arr[i] > 5 || arr[i] < -5 || arr[i] === 0;
        if (ok)
            return true;
        i++;
    }
    return false;
}

let sportsmen = [];
let sportsman = [];
let work = "да";
while (work === "да") {
    sportsman = prompt("Введите имя и результаты спортсмена").split(',');
    while (sportsman.length !== 36 || separator(sportsman)) {
        alert("Неверный формат ввода. повторите ввод");
        sportsman = prompt("Введите имя и результаты спортсмена").split(',');
    }
    sportsmen.push(resultSportsman(sportsman.map((value) => isNaN(value) ? value : Number(value))));
    sportsman.splice(0, sportsman.length);
    work = prompt("Добавить еще спортсмена?(да/нет)");
}
winner(sportsmen);




