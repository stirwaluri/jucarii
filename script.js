document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.querySelector("a[href='mailto:contact@jucariipentrucopii.ro']");
    contactLink.addEventListener("click", function() {
        alert("Mulțumim că ne contactați!");
    });
});
