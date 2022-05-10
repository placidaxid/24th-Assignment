    // Player name 
    var Epsilon = "Player 1"; 
    var Alpha = "Player 2"; 
    // Function to change the player name 
    function editNames() { 
       Epsilon = prompt("Change Player1 name"); 
       Alpha = prompt("Change player2 name"); 
       document.querySelector("p.Player1").innerHTML = Epsilon; 
       document.querySelector("p.Player2").innerHTML = Alpha; 

    } 
    // Function to roll the dice 
    function rollTheDice() { 
        setTimeout(function () { 
            var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
            var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
            document.querySelector(".img1").setAttribute("src", 
                "dice" + randomNumber1 + ".png"); 
            document.querySelector(".img2").setAttribute("src", 
                "dice" + randomNumber2 + ".png"); 
  
            if (randomNumber1 === randomNumber2) { 
                document.querySelector("h1").innerHTML = "Draw!"; 
            } 
            else if (randomNumber1 < randomNumber2) { 
                document.querySelector("h1").innerHTML 
                                = (Alpha + " WINS!"); 
            } 
            else { 
                document.querySelector("h1").innerHTML 
                                = (Epsilon + " WINS!"); 
            } 
        }); 
    } 