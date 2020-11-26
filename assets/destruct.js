'use strict';

/*
1.)
Adott az alábbi objektum:
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
Mentsd el külön lastName, firstName, és job változókba a fenti objektum property-jeit!
Ha valamelyik nincs megadva, akkor az érték legyen a “unknown” string!
*/

const user = {
    firstName: 'John',
    lastName: 'Doe'
};

const { firstName, lastName, job = 'unknown'} = user;

console.log(firstName, lastName, job);



/*
2.)
Adott az alábbi objektum:
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
Ments el külön l, f, és j változókba a fenti objektum lastName, firstName, és job property-jeit! Ha valamelyik nincs megadva, akkor az érték legyen a “unknown” string!
*/

const { firstName: f, lastName: l, job: j = 'unknown'} = user;

console.log(f, l, j);



/*
3.)
Ments el külön, tesszőleges nevű változókba az alábbi tömb első, harmadik, és ötödik indexű elemét!
    const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];
*/

const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];

const [first, , third, , fifth] = names;
const [, second, , fourth, , sixth] = names;

console.log(first, third, fifth, 'are the bad answers.');
console.log(second, fourth, sixth, 'are the correct answers.');
