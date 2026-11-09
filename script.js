document.querySelectorAll(".project-toggle").forEach((button) => {
    button.addEventListener("click", () => {
        const details = document.getElementById(button.getAttribute("aria-controls"));
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        details.hidden = isExpanded;
        button.setAttribute("aria-expanded", String(!isExpanded));
        button.setAttribute("aria-label", isExpanded ? "Toon projectinformatie" : "Verberg projectinformatie");
        button.textContent = isExpanded ? "↓" : "↑";
    });

});