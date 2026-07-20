export function initCard() {

    const cover = document.querySelector(".cardCover");
    const card = document.querySelector(".friendshipCard");

    if (!cover || !card) return;

    cover.addEventListener("click", () => {

        cover.classList.add("opened");
        

        setTimeout(() => {

            card.classList.add("opened");

        }, 400);

        // Hide the cover after the opening animation finishes
        setTimeout(() => {
            cover.classList.add("hidden");
        }, 1200);

    });

}