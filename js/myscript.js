
function evenOdds() {

    var evens = prompt("Optional: type EVENS player's name");
    if (evens == "") {
        evens = "EVENS";
    } else {
        var evens = evens.toUpperCase();
        document.getElementById("evens").innerHTML = evens;
    }

    var odds = prompt("Optional: type ODDS player's name");
    if (odds == "") {
        odds = "ODDS";
    } else {
        var odds = odds.toUpperCase();
        document.getElementById("odds").innerHTML = odds;
    }
    const next = runGame()
    return next;

    function runGame() {
        var randomP1 = Math.floor(Math.random() * 5);
        randomP1 = randomP1 + 1;
        var img = document.createElement("img");
        img.src = ("images/" + randomP1 + "L.png");
        var src = document.getElementById("leftHand");
        img.style.width = '60%';
        img.style.height = 'auto';
        src.appendChild(img);

        var randomP2 = Math.floor(Math.random() * 5);
        randomP2 = randomP2 + 1;
        var img = document.createElement("img");
        img.src = ("images/" + randomP2 + "R.png");
        var src = document.getElementById("rightHand");
        img.style.width = '60%';
        img.style.height = 'auto';
        src.appendChild(img);

        var result = randomP1 + randomP2;
        document.getElementById("resultFinal").innerHTML = result;

        if (result % 2 === 0) {
            var winner = evens + " WON!";
            var winner = winner.toUpperCase();
            document.getElementById("theWinnerIs").innerHTML = winner;

        } else {
            var winner = odds + " WON!";
            var winner = winner.toUpperCase();
            document.getElementById("theWinnerIs").innerHTML = winner;

        }

    }

}





