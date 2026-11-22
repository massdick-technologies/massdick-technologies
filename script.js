// MOBILE NAVIGATION
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuBtn.textContent = isOpen ? "✕" : "☰";
});


// CLOSE MENU AFTER CLICKING A LINK
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation menu");
    });
});


// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();


// CONTACT FORM - SEND MESSAGE THROUGH WHATSAPP
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !service || !message) {
        alert("Please complete all the fields.");
        return;
    }

    const whatsappNumber = "233559939065";

    const whatsappMessage =
        "Hello MASSDICK TECHNOLOGIES!\n\n" +
        "My name is: " + name + "\n" +
        "My email is: " + email + "\n" +
        "Service needed: " + service + "\n\n" +
        "Project details:\n" + message;

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
});