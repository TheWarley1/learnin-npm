// var generateName = require('sillyname');

import  generateName from "sillyName"

var sillyName = generateName();

console.log(`my name is ${sillyName}.`);



import superheroes from "superheroes";
// const superheroes = require('superheroes');
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
superheroes.random();
//=> 'Spider-Ham'

const hero = superheroes.random();
console.log(`i am ${hero}`)