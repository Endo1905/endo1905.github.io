var i = 0;
var hello = "Cześć, miłego zwiedzania!";

function typing() {
    if (i < hello.length) {
        document.getElementById("hello").textContent += hello.charAt(i);
        i++;
        setTimeout(typing, 200);
    }
}

typing();

var date = new Date();
var hours = date.getHours();
var text = document.getElementById("date");

function time() {
    if (hours >= 3 && hours < 12) {
        text.textContent = "Miłego dnia!"
    }
    else if (hours >= 12 && hours < 17) {
        text.textContent = "Miłego popołudnia!"
    }
    else {
        text.textContent = "...I przede wszystkim zasłużonego wypoczunku na wieczór! :D"
    }
}
time();
typing();
console.log(hours)
