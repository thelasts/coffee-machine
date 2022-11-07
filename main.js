const input = require('sync-input')

// console.log(`Starting to make a coffee
// Grinding coffee beans
// Boiling water
// Mixing boiled water with crushed coffee beans
// Pouring coffee into the cup
// Pouring some milk into the cup
// Coffee is ready!`)
let water = input('Write how many ml of water the coffee machine has:');
let milk = input('Write how many ml of milk the coffee machine has:');
let beans = input('Write how many grams of coffee beans machine has:');
let userCups = input('Write how many cups of coffee you will need:');
// console.log(`For ${userCups == 1 ? `${userCups} cup` : `${userCups} cups`} of coffee you will need:
// ${userCups*200} ml of water
// ${userCups*50} ml of milk
// ${userCups*15} g of coffee beans`);
let cups = Math.min(Math.floor(water/200), Math.floor(milk/50), Math.floor(beans/15));
switch (Math.sign(cups - userCups)){
    case (-1):
        console.log(`No, I can make only ${cups} cups of coffee.`);
        break;
    case (0):
        console.log('Yes, I can make that amount of coffee');
        break;
    default:
        console.log(`Yes, I can make that amount of coffee (and even ${cups - userCups} more than that)`);
        break;
}