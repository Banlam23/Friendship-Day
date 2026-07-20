import { switchToHomeMusic } from "./music.js";
export function initGift() {
    const cinematicFade = document.getElementById("cinematicFade");
    const giftBox = document.getElementById("giftBox");
    const doracake = document.querySelector(".doracakeGift");

    if (!giftBox || !doracake || !cinematicFade) return;
    doracake.addEventListener("click", () => {

    if (doracake.classList.contains("clicked")) return;

    doracake.classList.add("clicked");

    cinematicFade.style.opacity = "0.35";

    setTimeout(() => {
        cinematicFade.style.opacity = "0";
    }, 300);

    switchToHomeMusic(2000);

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

        // Gift box disappears
        setTimeout(() => {
            document.querySelector(".giftBouquet").classList.add("show");
        }, 700);

        setTimeout(() => {
            document.querySelector(".chocolate").classList.add("show");
        }, 1500);

        setTimeout(() => {
            document.querySelector(".chocopie").classList.add("show");
        }, 1800);

        setTimeout(() => {
            document.querySelector(".doracakeGift").classList.add("show");
        }, 2100);

        setTimeout(() => {
            document.querySelector(".flowerGift").classList.add("show");
        }, 2400);

        setTimeout(() => {
            document.querySelector(".giftNote").classList.add("show");
        }, 2700);

    });

}