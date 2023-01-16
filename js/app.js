import { personalSectionElementBuilder, planSectionElementBuilder, pickSectionElementBuilder, thanksSectionElementBuilder, } from "./dom-utils.js";
const pages = document.querySelector(".pages");
const changePageContainer = document.querySelector(".change-page");
const nextPageButton = document.querySelector(".page__next-btn");
const backPageButton = document.querySelector(".page__back-btn");
const stepNumbers = document.querySelectorAll(".menu__number");
const planOptions = document.querySelectorAll(".plan__option");
const pickInputs = document.querySelectorAll(".pick__input");
let currentPage = 1;
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
nextPageButton.addEventListener("click", () => {
    if (currentPage === 1) {
        pages.innerHTML = "";
        pages.appendChild(personalSectionElementBuilder());
    }
    currentPage += 1;
    stepNumbers.forEach((step) => {
        if (+step.innerHTML === currentPage) {
            step.classList.add("menu__number--active");
        }
        else {
            step.classList.remove("menu__number--active");
        }
    });
    if (currentPage >= 2) {
        backPageButton.style.display = "block";
        changePageContainer.style.justifyContent = "space-between";
    }
    if (currentPage === 4) {
        nextPageButton.innerText = "Confirm";
        nextPageButton.classList.add("confirm");
    }
    if (currentPage === 5) {
        pages.innerHTML = "";
        pages.appendChild(thanksSectionElementBuilder());
        nextPageButton.style.display = "none";
        backPageButton.style.display = "none";
    }
    if (currentPage === 2) {
        pages.innerHTML = "";
        pages.appendChild(planSectionElementBuilder());
    }
    if (currentPage === 3) {
        pages.innerHTML = "";
        pages.appendChild(pickSectionElementBuilder());
    }
    document.querySelectorAll(".page").forEach((page) => {
        if (currentPage === +page.dataset.page) {
            page.style.display = "flex";
        }
        else {
            page.style.display = "none";
        }
    });
});
backPageButton.addEventListener("click", () => {
    currentPage -= 1;
    if (currentPage === 1) {
        pages.innerHTML = "";
        pages.appendChild(personalSectionElementBuilder());
    }
    if (currentPage <= 1) {
        backPageButton.style.display = "none";
        changePageContainer.style.justifyContent = "flex-end";
    }
    stepNumbers.forEach((step) => {
        if (+step.innerHTML === currentPage) {
            step.classList.add("menu__number--active");
        }
        else {
            step.classList.remove("menu__number--active");
        }
    });
    if (currentPage === 2) {
        pages.innerHTML = "";
        pages.appendChild(planSectionElementBuilder());
    }
    if (currentPage === 3) {
        pages.innerHTML = "";
        pages.appendChild(pickSectionElementBuilder());
    }
    if (!(currentPage === 4)) {
        nextPageButton.innerText = "Next Step";
        nextPageButton.classList.remove("confirm");
    }
    document.querySelectorAll(".page").forEach((page) => {
        if (currentPage === +page.dataset.page) {
            page.style.display = "flex";
        }
        else {
            page.style.display = "none";
        }
    });
});
pages.appendChild(personalSectionElementBuilder());
//# sourceMappingURL=app.js.map