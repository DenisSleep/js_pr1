'use strict';

let name = prompt('Введите Имя', 'Неизветсное Имя');
let fam = prompt('Введите Фамилию', 'Неизветсное Фамилию');
let pat = prompt('Введите Отчество', 'Неизветсное отчество');
let isTrue = confirm(`Верны ли выши ФИО ${name} ${fam} ${pat}?`);
alert(isTrue);