function evenOdds() {
var evens = prompt("Input EVENS player's name");
document.getElementById("evens").innerHTML = evens;
var odds = prompt("Input ODDS player's name");
document.getElementById("odds").innerHTML = odds;
const next = runGame()
return next;

function runGame() {
    var randomP1 = Math.floor(Math.random() * 5);
    randomP1 = randomP1 + 1;
    var randomP2 = Math.floor(Math.random() * 5);
    randomP2 = randomP2 + 1;
    var result = randomP1 + randomP2;
    console.log(randomP1, randomP2, result);

    alert("Result is " + result);

    if (result % 2 === 0) {
        alert(evens + " wins")
    } else {
        alert(odds + " wins")
    }

    return result;
}
}
// alert(result);
//function displayFingersL () {

//}



let btnPlay = document.getElementById("btnPlay");
btnPlay.addEventListener('click', event => {
    evenOdds();
});