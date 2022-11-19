
function evenOdds() {
    var oddsChoice = "Player 1";
    var odds = prompt("Type ODDS player's name (Player 1) or simply hit OK");
    if (odds == "") {
        odds = "ODDS";
        document.getElementById("oddsChoice").innerHTML = oddsChoice;
    } else {
        var odds = odds.toUpperCase();
        document.getElementById("oddsName").innerHTML = odds;
    }
    var evensChoice = "Player 2";
    var evens = prompt("Type EVENS player's name (Player 2) or simply hit OK");
    if (evens == "") {
        evens = "EVENS";
        document.getElementById("evensChoice").innerHTML = evensChoice;
    } else {
        var evens = evens.toUpperCase();
        document.getElementById("evensName").innerHTML = evens;
    }

    const next = runGame()
    return next;

    function runGame() { // chooses a random number from 1 to 5 then displays the correspondent hand image
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
        // add the two random numbers found
        var result = randomP1 + randomP2;
        document.getElementById("resultFinal").innerHTML = result;
        // find out if the result it's an even or odd number and declare who wins.
        if (result % 2 === 0) {
            var winner = evens + " (Player 2)" + " WON!";
            var winner = winner.toUpperCase();
            document.getElementById("theWinnerIs").innerHTML = winner;

        } else {
            var winner = odds + " (Player 1)" + " WON!";
            var winner = winner.toUpperCase();
            document.getElementById("theWinnerIs").innerHTML = winner;

        }

    }

}

