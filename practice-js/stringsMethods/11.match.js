//Understanding match, regex method

const str = 'Hello, world';
const regex = /WORLD/i;
console.log(str.match(regex));

//example two

const str2 = 'Leiker Gomez, fullstack developer';
const regex2 = new RegExp('FULL','i');
console.log(str2.match(regex2));

//example three

const str3 = 'Leiker Gomez, fullstack';
const regex3 = new RegExp('[A-Za-z]','g');
console.log(str3.match(regex3));

//example four
const str4 = 'Hola, leiker es un programador junior';
const regex4 = /[A-Z a-z]/g;
console.log(str4.match(regex4));
