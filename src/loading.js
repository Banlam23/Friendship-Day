export function hideLoading() {

    const loading = document.getElementById("loading");

    if (!loading) return;

    // Wait while the loading animation finishes
    setTimeout(() => {

        loading.classList.add("hidden");

        // Remove from the document after fade out
        setTimeout(() => {

            loading.remove();

        }, 800);

    }, 2500);

}