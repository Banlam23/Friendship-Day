let introMusic;
let homeMusic;
let musicSwitched = false;

export function initMusic() {

    introMusic = document.getElementById("introMusic");
    homeMusic = document.getElementById("homeMusic");

    introMusic.volume = 1;
    homeMusic.volume = 0;
}

export function playIntroMusic() {

    introMusic.play();
}

export function switchToHomeMusic(delay = 0) {

    if (musicSwitched) return;
    musicSwitched = true;

    homeMusic.volume = 0;
    console.log("About to play", homeMusic);

homeMusic.currentTime = 0;
homeMusic.volume = 0;

homeMusic.play()
.then(() => console.log("✅ Card music started"))
.catch(err => console.error("❌", err));

setTimeout(() => {
    console.log(
        "paused:", homeMusic.paused,
        "currentTime:", homeMusic.currentTime,
        "volume:", homeMusic.volume
    );
}, 1000);

    setTimeout(() => {

        let fade = 0;

        const duration = 5000;
        const intervalTime = 50;
        const step = intervalTime / duration;

        const interval = setInterval(() => {

            fade += step;

            introMusic.volume = Math.max(0, 1 - fade);
            homeMusic.volume = Math.min(1, fade);

            if (fade >= 1) {

                clearInterval(interval);

                introMusic.pause();
                introMusic.currentTime = 0;

            }

        }, intervalTime);

    }, delay);

}