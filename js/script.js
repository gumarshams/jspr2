// 1 задание
let admin;
let name1 = 'Джон'; 
admin = name1;
alert(admin);

// 2 задание
let city = prompt('название города', 'Казань');
let year = 2024 - prompt('год образования', '1552');
let people = prompt('население', '100000');
alert(`Городу ${city} исполнилось ${year} лет с момента его образования. Население - ${people} человек`);

// 3 задание

let r = prompt('радиус', '3');
let p = 3.14;
let s = (r * r) * p;
alert(s);

// 4 задание

let p1 = prompt('1 переменная', '');
let p2 = prompt('2 переменная', '');
alert( parseInt(p1) + parseInt(p2));
alert( p1 - p2);
alert( p1 / p2);
alert( p1 * p2);