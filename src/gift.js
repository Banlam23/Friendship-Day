import confetti from "canvas-confetti";
export function initGift() {
    const cinematicFade = document.getElementById("cinematicFade");
    const giftBox = document.getElementById("giftBox");
    const doracake = document.querySelector(".doracakeGift");
    const showEndingBtn = document.getElementById("showEndingBtn");
    const endingScreen = document.getElementById("endingScreen");
    const finishJourneyBtn = document.getElementById("finishJourneyBtn");
    const finalScreen = document.getElementById("finalScreen");

if (showEndingBtn && endingScreen) {

    showEndingBtn.addEventListener("click", () => {

        const giftPage = document.getElementById("giftPage");

        giftPage.style.transition = "opacity 1s ease";
        giftPage.style.opacity = "0";

        setTimeout(() => {

            giftPage.style.display = "none";

            endingScreen.classList.add("show");

            const items = endingScreen.querySelectorAll(".reveal");

            items.forEach(item => {
                item.classList.add("show");
            });

        }, 1000);

    });

}

    if (!giftBox || !doracake || !cinematicFade) return;
    doracake.addEventListener("click", () => {

    if (doracake.classList.contains("clicked")) return;

    doracake.classList.add("clicked");

    cinematicFade.style.opacity = "0.35";

    setTimeout(() => {
        cinematicFade.style.opacity = "0";
    }, 300);

});

    if (!giftBox) return;

    giftBox.addEventListener("click", () => {

    if (giftBox.classList.contains("opened")) return;

    giftBox.classList.add("opened");

    // Cinematic fade
    cinematicFade.style.opacity = "0.35";

    setTimeout(() => {
        cinematicFade.style.opacity = "0";
    }, 300);

    document
        .querySelector(".giftClick")
        .classList.add("hide");

        function playPop(){

            const pop = new Audio("/Friendship-Day/assets/music/pop.wav");
            pop.volume = 0.5;
            pop.playbackRate = 0.9 + Math.random() * 0.2;
            pop.play();

        }
        // Gift box disappears
        setTimeout(() => {
            document.querySelector(".giftBouquet").classList.add("show");
            playPop();
        }, 700);

        setTimeout(() => {
            document.querySelector(".chocolate").classList.add("show");
            playPop();
        }, 1500);

        setTimeout(() => {
            document.querySelector(".chocopie").classList.add("show");
            playPop();
        }, 1800);

        setTimeout(() => {
            document.querySelector(".doracakeGift").classList.add("show");
            playPop();
        }, 2100);

        setTimeout(() => {
            document.querySelector(".flowerGift").classList.add("show");
            playPop();
        }, 2400);

        setTimeout(() => {
            document.querySelector(".giftNote").classList.add("show");
            playPop();

            document
                .getElementById("showEndingBtn")
                .classList.add("show");
        }, 2700);
    });

    finishJourneyBtn.addEventListener("click", () => {

    endingScreen.style.opacity = "0";

    setTimeout(() => {

        endingScreen.style.display = "none";

        finalScreen.style.display = "flex";

        requestAnimationFrame(() => {

            finalScreen.classList.add("show");
            setTimeout(() => {

                confetti({
                    particleCount: 90,
                    spread: 95,
                    startVelocity: 35,
                    origin: { y: 0.65 }
                });

            }, 1500);

            // Bible verse appears later
            setTimeout(() => {

                document
                    .querySelector(".bibleVerse")
                    .classList.add("show");

            }, 3500);

        });

    }, 900);

});
}