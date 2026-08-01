export function initCard() {

    const cover = document.querySelector(".cardCover");
    const card = document.querySelector(".friendshipCard");
    const pageFlipSound = document.getElementById("pageFlipSound");

    function playPageFlip() {

    if (!pageFlipSound) return;
        pageFlipSound.currentTime = 0;
        pageFlipSound.volume = 0.14;
        pageFlipSound.play().catch(() => {});
}

    if (!cover || !card) return;

    cover.addEventListener("click", () => {

        playPageFlip();
        cover.classList.add("opened");
        setTimeout(() => {
            const letter = document.querySelector("#letterPage");
            const memory = document.querySelector("#memoryPage");

            if (letter) letter.scrollTop = 0;
            if (memory) memory.scrollTop = 0;
            card.classList.add("opened");

        }, 400);

        // Hide the cover after the opening animation finishes
        setTimeout(() => {
            cover.classList.add("hidden");
        }, 1200);

    });

}