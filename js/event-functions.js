import { pages, stepNumbers, nextPageButton, backPageButton, changePageContainer, } from "./variables.js";
import { personalSectionElementBuilder, pickSectionElementBuilder, planSectionElementBuilder, thanksSectionElementBuilder, } from "./dom-utils.js";
let currentPage = 1;
export function nextPageHandler() {
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
}
export function backPageHandler() {
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
}
//# sourceMappingURL=event-functions.js.map