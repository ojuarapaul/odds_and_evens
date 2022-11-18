
function evenOdds() {

    var evens = prompt("Digite o nome do jogador que escolheu PARES ou click OK");
    if (evens == "") {
        evens = "PAR";
    } else {
        var evens = evens.toUpperCase();
        document.getElementById("evens").innerHTML = evens;
    }

    var odds = prompt("Digite o nome do jogador que escolheu ÍMPARES ou click OK");
    if (odds == "") {
        odds = "ÍMPAR";
    } else {
        var odds = odds.toUpperCase();
        document.getElementById("odds").innerHTML = odds;
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
            var winner = evens + " GANHOU!";
            var winner = winner.toUpperCase();
            document.getElementById("theWinnerIs").innerHTML = winner;

        } else {
            var winner = odds + " GANHOU!";
            var winner = winner.toUpperCase();
            document.getElementById("theWinnerIs").innerHTML = winner;

        }

    }

}

