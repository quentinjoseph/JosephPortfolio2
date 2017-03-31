


function myFunction() {
    var person = window.prompt("Please enter your name", "Your Name Here");
    
    if (person !== null) {
        document.getElementById("words").innerHTML =
        "Hey " + person + "! Thanks for stopping by!";
    }
}
