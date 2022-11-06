const input = require('sync-input')

// console.log(`Starting to make a coffee
// Grinding coffee beans
// Boiling water
// Mixing boiled water with crushed coffee beans
// Pouring coffee into the cup
// Pouring some milk into the cup
// Coffee is ready!`)

let userCups = input('Write how many cups of coffee you will need:');
console.log(`For ${userCups == 1 ? `${userCups} cup` : `${userCups} cups`} of coffee you will need:
${userCups*200} ml of water
${userCups*50} ml of milk
${userCups*15} g of coffee beans`);
