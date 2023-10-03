// Scripting to change navbar color on scroll
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
});