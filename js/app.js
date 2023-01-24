import { pages, planOptions, pickInputs, nextPageButton, backPageButton, } from "./variables.js";
import { personalSectionElementBuilder } from "./dom-utils.js";
import { nextPageHandler, backPageHandler } from "./event-functions.js";
let pickSelectedArray = [];
for (let i = 0; i < planOptions.length; i++) {
    planOptions[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("plan__option--selected");
        current[0].className = current[0].className.replace(" plan__option--selected", "");
        this.className += " plan__option--selected";
    });
}
for (let i = 0; i < pickInputs.length; i++) {
    pickInputs[i].addEventListener("change", function () {
        const pickOption = pickInputs[i].parentElement;
        if (this.checked) {
            pickOption === null || pickOption === void 0 ? void 0 : pickOption.classList.add("pick__option--selected");
            const pickSelected = pickOption === null || pickOption === void 0 ? void 0 : pickOption.children[1];
            const pickPriceSelected = pickOption === null || pickOption === void 0 ? void 0 : pickOption.children[3];
            const pickSelectedObject = {
                text: pickSelected.innerText,
                price: pickPriceSelected.innerText,
            };
            pickSelectedArray.push(pickSelectedObject);
        }
        else {
            pickOption === null || pickOption === void 0 ? void 0 : pickOption.classList.remove("pick__option--selected");
            const pickSelected = pickOption === null || pickOption === void 0 ? void 0 : pickOption.children[1];
            const newPickArray = pickSelectedArray.filter((el) => el.text !== pickSelected.innerText);
            pickSelectedArray = newPickArray;
        }
    });
}
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