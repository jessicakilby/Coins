// Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (input) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: .25,
    dimes: .1,
    nickels: .05,
    pennies: .01
  };
console.log("Starting amount: " + input);

  if (input > coinPurse.quarters) {
    var numQuarters = Math.floor(input/coinPurse.quarters);
    input = (input%coinPurse.quarters);
    console.log("# of Quarters: " + numQuarters);
    console.log("leftover: " + parseFloat(input).toFixed(2));
      if (input > coinPurse.dimes) {
        var numDimes = Math.floor(input/coinPurse.dimes);
        input = input % coinPurse.dimes;
        console.log("# of Dimes: " + numDimes);
        console.log("leftover: " + parseFloat(input).toFixed(2));
          if (input > coinPurse.nickels) {
            var numNickels = Math.floor(input/coinPurse.nickels);
            input = input % coinPurse.nickels;
            console.log("# of Nickels: " + numNickels);
            console.log("leftover: " + parseFloat(input).toFixed(2));
              if (input > coinPurse.pennies) {
                var numPennies = Math.floor(input/coinPurse.pennies);
                input = input % coinPurse.pennies;
                console.log("# of Pennies: " + numPennies);
                console.log("leftover: " + parseFloat(input).toFixed(2));
              }
          }
      }
  } 
}

var coins = coinCounter(.67)
console.log(coins);