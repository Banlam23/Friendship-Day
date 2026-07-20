export function initEnvelope() {

    const envelope = document.getElementById("envelope");
    const homepage = document.getElementById("home");
    const card = document.getElementById("friendshipCard");
    const letter = document.querySelector(".letter");

    if (!envelope || !letter) return;

    // Open the envelope
    envelope.addEventListener("click", () => {

        if (envelope.classList.contains("open")) return;

        envelope.classList.add("open");

    });

    // Click the letter
    letter.addEventListener("click", (e) => {

        e.stopPropagation();

        if (!envelope.classList.contains("open")) return;

        homepage.classList.add("hide");
        card.classList.add("show");

        setTimeout(() => {

            homepage.style.display = "none";

        }, 900);

    });

}