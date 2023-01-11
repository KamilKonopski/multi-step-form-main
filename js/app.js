"use strict";
const pages = document.querySelectorAll(".page");
const changePageContainer = document.querySelector(".change-page");
const nextPageButton = document.querySelector(".page__next-btn");
const backPageButton = document.querySelector(".page__back-btn");
const stepNumbers = document.querySelectorAll(".menu__number");
let currentPage = 1;
nextPageButton.addEventListener("click", () => {
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
        nextPageButton.style.display = "none";
        backPageButton.style.display = "none";
    }
    pages.forEach((page) => {
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
    if (!(currentPage === 4)) {
        nextPageButton.innerText = "Next Step";
        nextPageButton.classList.remove("confirm");
    }
    pages.forEach((page) => {
        if (currentPage === +page.dataset.page) {
            page.style.display = "flex";
        }
        else {
            page.style.display = "none";
        }
    });
});
//# sourceMappingURL=app.js.map