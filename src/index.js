const numeral = require('numeral');

const courseValue = numeral(1000).format('$0.00');

console.log(`Eu pagaria ${courseValue} nesse curso.`);