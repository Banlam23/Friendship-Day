export function initGift() {

    const giftBox = document.getElementById("giftBox");

    if (!giftBox) return;

    giftBox.addEventListener("click", () => {

        // Prevent clicking twice
        if (giftBox.classList.contains("opened")) return;

        giftBox.classList.add("opened");

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