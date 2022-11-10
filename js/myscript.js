var evens = prompt("Input EVENS player's name");
var odds = prompt("Input ODDS player's name");

function evenOdds () {
var randomP1 = Math.floor(Math.random() * 5);
randomP1 = randomP1+1;
var randomP2 = Math.floor(Math.random() * 5);
randomP2 = randomP2+1;
var result = randomP1 + randomP2;
console.log(randomP1, randomP2, result);
return result;
}

alert ("Result is "+ result);

if (result % 2 === 0) {
    alert(evens + " wins")
} else {
   alert(odds + " wins")
}

//evenOdds ()