let number = 5

function checkAnswer(answer) {
    let numberChange = number + 1

    if (answer == (10 - number)){
        document.getElementById("respond").innerHTML = "nope";
        number = Math.round(Math.random() * 10)

        document.getElementById("body").innerHTML = "<h1>Sike</h1><p>6 + 5 ≠ 10</p>";

        // document.getElementById("equation").innerHTML = number + " + ? = 10";
    } else {
        document.getElementById("respond").innerHTML = "Wrong";
    }
}