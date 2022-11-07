const input = require('sync-input')

let machine = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550
};
let espresso = {
    tag: 'espresso',
    water: 250,
    milk: 0,
    beans: 16,
    price: 4
}
let latte = {
    tag: 'latte',
    water: 350,
    milk: 75,
    beans: 20,
    price: 7
}
let cappuccino = {
    tag: 'cappuccino',
    water: 200,
    milk: 100,
    beans: 12,
    price: 6
}
const actions = ['buy', 'fill', 'take'];
const options = [espresso, latte, cappuccino];
function optionsString(options){
    let data = '';
    let num = 1;
    for (let i in options){
        data +=`${num++} - ${options[i].tag}`;
        //separator
        if (i !== options.length - 1)
            data += ', ';
        else
            data += ':\n';
    }
    return data;
}
function display(machine){
    console.log(`The coffee machine has:
${machine.water} ml of water
${machine.milk} ml of milk
${machine.beans} g of coffee beans
${machine.cups} disposable cups
$${machine.money} of money
`);
}

display(machine);
let action = input(`Write action (${actions.toString()}):`);
switch (action){
    case actions[0]: //buy
        let opt = input(`What do you want to buy? ${optionsString(options)}`)
        opt = (--opt) % options.length;
        machine.water -= options[opt].water;
        machine.milk -= options[opt].milk;
        machine.beans -= options[opt].beans;
        machine.cups -= 1;
        machine.money += options[opt].price;
        break;
    case actions[1]: //fill
        machine.water += Number(input('Write how many ml of water the coffee machine you want to add:'));
        machine.milk += Number(input('Write how many ml of milk the coffee machine you want to add:'));
        machine.beans += Number(input('Write how many grams of coffee beans machine you want to add:'));
        machine.cups += Number(input('Write how many disposable cups you want to add:'));
        break;
    case actions[2]: //take
        console.log(`I gave you $${machine.money}`);
        machine.money = 0;
        break;
    default:
        console.log(`No such action`);
        break;
}
console.log();
display(machine);
