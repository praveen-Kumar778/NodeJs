const loadash = require('lodash');

const array = ["karan","naman", "ajay","harsh","marsh","mello"];

const capitalize  =  loadash.map(array,loadash.capitalize);

console.log(capitalize);
