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
const actions = ['buy', 'fill', 'take', 'remaining', 'exit'];
const options = [espresso, latte, cappuccino];
function optionsString(options){
    let data = '';
    let num = 1;
    for (let i in options){
        data +=`${num++} - ${options[i].tag}, `;
    }
    return data;
}
function display(machine){
    console.log(`The coffee machine has:
${machine.water} ml of water
${machine.milk} ml of milk
${machine.beans} g of coffee beans
${machine.cups} disposable cups
$${machine.money} of money`);
}

let status = true;
while (status){
    let action = input(`Write action (${actions.toString()}):\n`);
    console.log();
    switch (action){
        case actions[0]: //buy
            let opt = input(`What do you want to buy? ${optionsString(options)}back - to main menu:\n`)
            if (opt === 'back')
                break;
            opt = (--opt) % options.length;
            if (machine.cups <= 0){
                console.log('Sorry, not enough disposable cups!');
                break;
            }
            //let's cook
            let enough = true;
            for (const key in machine){
                if (key === 'money'){
                    machine.money += options[opt].price;
                    continue;
                }
                if (key !== 'cups' && options[opt].hasOwnProperty(key)) {
                        if (machine[key] < options[opt][key]){
                            console.log(`Sorry, not enough ${key}!`);
                            enough = false;
                            break;
                        }
                        machine[key] -= options[opt][key];
                }
            }
            if (enough) {
                machine.cups--;
                console.log('I have enough resources, making you a coffee!');
            }
            break;
        case actions[1]: //fill
            machine.water += +input('Write how many ml of water the coffee machine you want to add:\n');
            machine.milk += +input('Write how many ml of milk the coffee machine you want to add:\n');
            machine.beans += +input('Write how many grams of coffee beans machine you want to add:\n');
            machine.cups += +input('Write how many disposable cups you want to add:\n');
            break;
        case actions[2]: //take
            console.log(`I gave you $${machine.money}`);
            machine.money = 0;
            break;
        case actions[3]: //remaining
            display(machine);
            break;
        case actions[4]: //exit
            status = false;
            break;
        default:
            console.log(`No such action`);
            break;
    }
    console.log();
}