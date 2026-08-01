let bgMusic = null;
let musicStarted = false;

export function initMusic() {
    bgMusic = document.getElementById("bgMusic");

    if (!bgMusic) return;

    bgMusic.loop = true;
    bgMusic.volume = 0.5;
}

export async function playMusic() {

    if (!bgMusic || musicStarted) return;

    try {
        await bgMusic.play();
        musicStarted = true;
    } catch (err) {
        console.error("Unable to play music:", err);
    }

}