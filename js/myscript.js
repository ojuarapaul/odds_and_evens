



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
        var img = document.createElement("img");
        img.src = ("images/" + randomP1 + "L.png");
        var src = document.getElementById("header");
        img.style.width = '80%';
        img.style.height = 'auto';
        src.appendChild(img);

        var randomP2 = Math.floor(Math.random() * 5);
        randomP2 = randomP2 + 1;
        var img = document.createElement("img");
        img.src = ("images/" + randomP2 + "R.png");
        var src = document.getElementById("header2");
        img.style.width = '80%';
        img.style.height = 'auto';
        src.appendChild(img);

        var result = randomP1 + randomP2;
        document.getElementById("resultFinal").innerHTML = result;

        if (result % 2 === 0) {
            var winner = evens + " Won!";
            document.getElementById("theWinnerIs").innerHTML = winner;  
            
        } else {
            var winner = odds + " Won!";
            document.getElementById("theWinnerIs").innerHTML = winner;  
            
        }

    }

}

var callOne = true;

function one() {
   evenOdds();
}

function two() {
    location.reload();
}

function call(){
   if(callOne) one();
  else two();
  callOne = !callOne;
}



