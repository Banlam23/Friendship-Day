import { hideLoading } from "./loading.js";
import { playMusic } from "./music.js";

export function initIntro() {

    const introScreen = document.getElementById("introScreen");
    const startButton = document.getElementById("startExperience");
    const loading = document.getElementById("loading");

    if (!introScreen || !startButton || !loading) return;

    startButton.addEventListener("click", async () => {

        await playMusic();

        introScreen.style.opacity = "0";
        introScreen.style.pointerEvents = "none";

        setTimeout(() => {

            introScreen.style.display = "none";
            loading.style.display = "flex";

            hideLoading();

        }, 500);

    });

}