//for keypress in keyboard
document.addEventListener("keypress", function (event) {
    hear((event.key).toUpperCase());
    animation((event.key).toUpperCase());

});

//for clicks on screen
for (var i = 0; i < document.querySelectorAll(".dm").length; i++) {
    document.querySelectorAll(".dm")[i].addEventListener("click", function () {
        hear(this.innerText);
        animation(this.innerText);
    });
}

//function to play sounds.
function hear(keyword) {

    switch (keyword) {
        case "W":
            var audio = new Audio("sounds//tom-1.mp3");
            audio.play();
            break;
        case "A":
            var audio = new Audio("sounds//tom-2.mp3");
            audio.play();
            break;
        case "S":
            var audio = new Audio("sounds//tom-3.mp3");
            audio.play();
            break;
        case "D":
            var audio = new Audio("sounds//tom-4.mp3");
            audio.play();
            break;
        case "J":
            var audio = new Audio("sounds//crash.mp3");
            audio.play();
            break;
        case "K":
            var audio = new Audio("sounds//kick-bass.mp3");
            audio.play();
            break;
        case "L":
            var audio = new Audio("sounds//snare.mp3");
            audio.play();
            break;

        default: console.log(this.innerText);
            break;
    }
}

function animation(keypressed) {
    document.querySelector("." + keypressed).classList.add("pressed");

    setTimeout(function () {
        document.querySelector("." + keypressed).classList.remove("pressed");
    }, 100);
}