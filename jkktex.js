document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".btn-group .btn");

    navButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = button.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
