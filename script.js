const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});

// Close menu after clicking a link
const mobileLinks = mobileNav.querySelectorAll("a");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
    });
});