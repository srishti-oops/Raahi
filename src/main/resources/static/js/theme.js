document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("themeToggle");

    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
        document.body.classList.add("dark");

        if (themeToggle) {
            themeToggle.innerHTML =
                '<i class="fa-solid fa-sun"></i>';
        }
    }

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const dark = document.body.classList.contains("dark");

            localStorage.setItem(
                "theme",
                dark ? "dark" : "light"
            );

            themeToggle.innerHTML = dark
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';

        });

    }

});