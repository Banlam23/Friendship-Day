export function hideLoading() {

    const loading = document.getElementById("loading");

    if (!loading) return;

    const home = document.getElementById("home");
    // Wait while the loading animation finishes
    setTimeout(() => {

        loading.classList.add("hidden");

        if(home){
        home.style.display = "flex";
        }
        // Remove from the document after fade out
        setTimeout(() => {

            loading.remove();

        }, 800);

    }, 2500);

}