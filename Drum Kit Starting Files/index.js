var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", (i) => {
        var sound;
        if (i <= 3) {
            sound = "sounds/tom-" + (i + 1) + ".mp3";
        }
        else {
            switch (i) {
                case 4:
                    sound = "sounds/crash.mp3";
                    break;
                case 5:
                    sound = "sounds/kick-bass.mp3";
                    break;
                case 6:
                    sound = "sounds/snare.mp3";
                    break;
                // default:
                //     sound = "sounds/tom-1.mp3";
            }
        }
        var soundp = new Audio(sound);
        soundp.play();
    });
}
