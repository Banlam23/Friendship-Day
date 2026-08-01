export function initNavigation() {

    const letterPage = document.getElementById("letterPage");
    const memoryPage = document.getElementById("memoryPage");

    const nextBtn = document.querySelector("#letterPage .nextPageBtn");
    const backBtn = document.querySelector("#memoryPage .backPageBtn");
    const letterBackBtn = document.querySelector("#letterPage .backPageBtn");

    const home = document.getElementById("home");
    const friendshipCard = document.getElementById("friendshipCard");
    const cover = document.querySelector(".cardCover");
    const card = document.querySelector(".friendshipCard");

    const giftPage = document.getElementById("giftPage");

    const backGiftBtn = document.querySelector(".backGiftBtn");

    const doracake = document.getElementById("doracake");

    /* -----------------------------
       Letter → Memory
    ----------------------------- */

    nextBtn.addEventListener("click", () => {

        letterPage.classList.remove("active");
        letterPage.style.display = "none";

        memoryPage.style.display = "block";
        memoryPage.classList.add("active");

        // Mobile: always start at the beginning
        memoryPage.scrollTop = 0;
        memoryPage.scrollLeft = 0;

        const gallery = memoryPage.querySelector(".memoryGallery");
        if (gallery) gallery.scrollLeft = 0;

    });

    /* -----------------------------
       Memory → Letter
    ----------------------------- */

    backBtn.addEventListener("click", () => {
        memoryPage.classList.remove("active");
        memoryPage.style.display = "none";

        memoryPage.scrollTop = 0;
        memoryPage.scrollLeft = 0;

        letterPage.scrollTop = 0;

        const gallery = memoryPage.querySelector(".memoryGallery");
        if (gallery) gallery.scrollLeft = 0;

        letterPage.style.display = "flex";
        letterPage.classList.add("active");

    });

    /* -----------------------------
       Letter → Homepage
    ----------------------------- */

    letterBackBtn.addEventListener("click", () => {

        friendshipCard.classList.remove("show");

        home.style.display = "flex";
        home.offsetHeight;

        home.classList.remove("hide");

        cover.classList.remove("hidden");
        cover.classList.remove("opened");
        card.classList.remove("opened");

        memoryPage.classList.remove("active");
        letterPage.classList.add("active");
        // Unlock the Doracake
        doracake.classList.add("active");

    });

    /* -----------------------------
       Secret Doracake
    ----------------------------- */

    doracake.addEventListener("click", () => {

    if (!doracake.classList.contains("active")) return;

    home.classList.add("hide");

    setTimeout(() => {

        home.style.display = "none";

        giftPage.style.display = "flex";

    }, 600);

});

backGiftBtn.addEventListener("click", () => {

    giftPage.style.display = "none";

    home.style.display = "flex";

    home.offsetHeight;

    home.classList.remove("hide");

});
}