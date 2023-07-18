//Understanding match, regex method

const str = 'Hello, world';
const regex = /WORLD/i;
console.log(str.match(regex));

//example two

const str2 = 'Leiker Gomez, fullstack developer';
const regex2 = new RegExp('FULL','i');
console.log(str2.match(regex2));
