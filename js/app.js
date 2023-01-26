import { pages, nextPageButton, backPageButton } from "./variables.js";
import { personalSectionElementBuilder } from "./dom-utils.js";
import { nextPageHandler, backPageHandler } from "./event-functions.js";
document.querySelectorAll(".personal__input").forEach((input) => {
    input.addEventListener("focus", (e) => {
        const target = e.target;
        target.style.borderColor = "#d6d9e6";
        const label = target.previousElementSibling;
        const requiredSpan = label.children[0];
        if (requiredSpan) {
            requiredSpan.style.display = "none";
        }
    });
});
nextPageButton.addEventListener("click", nextPageHandler);
backPageButton.addEventListener("click", backPageHandler);
pages.appendChild(personalSectionElementBuilder());
//# sourceMappingURL=app.js.map