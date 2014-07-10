var prompt = require ('sync-prompt').prompt;
console.log('Welcome to Trip Calculator!');

/*Find out user variables for trip*/
var vehicle = prompt('Vehicle (car/truck)? ');
var distance = prompt('How far are you going (in miles)?: ');
distance = parseInt(distance);
var price = prompt('How much does gas cost per gallon? $');
price = parseFloat(price);
var tank = prompt ('How many gallons does your tank hold? ');
tank = parseInt(tank);
var mpg = prompt("What is your vehicle's MPG rating? ");
mpg = parseInt(mpg);
var speed = prompt('How fast are you going to drive (in miles per hour)? ');
speed = parseInt(speed);

/*Calculate true MPG assuming after reaching MPG rating, car -1 and truck -3 to 10*/

if(speed > 55){
  var delta = speed - 55;

  if(vehicle === 'truck'){
    delta *= 3;
  }
  mpg -= delta;

  if(mpg < 10){
   mpg = 10;
  }
}

console.log('Your true MPG is ' + mpg + '.');

/*Calculate cost of trip using miles, true MPG, gasCost, gasTank*/

var gas = distance / mpg;
var cost = gas * price;


/*Calculate how many times user will need to stop to fill up using true MPG, distance, and gasTank*/

var stops = gas / tank;

console.log('Your trip will cost $' + cost + ' and you will make ' + Math.ceil(stops) + ' stops.');

