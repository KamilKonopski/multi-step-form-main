"use strict";
const pages = document.querySelectorAll(".page");
const changePageContainer = document.querySelector(".change-page");
const nextPageButton = document.querySelector(".page__next-btn");
const backPageButton = document.querySelector(".page__back-btn");
let currentPage = 1;
nextPageButton.addEventListener("click", () => {
    currentPage += 1;
    console.log(currentPage);
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
            console.log(currentPage);
            console.log(page);
            page.style.display = "flex";
        }
        else {
            page.style.display = "none";
        }
    });
});
backPageButton.addEventListener("click", () => {
    currentPage -= 1;
    console.log(currentPage);
    if (currentPage <= 1) {
        backPageButton.style.display = "none";
        changePageContainer.style.justifyContent = "flex-end";
    }
    if (!(currentPage === 4)) {
        nextPageButton.innerText = "Next Step";
        nextPageButton.classList.remove("confirm");
    }
    pages.forEach((page) => {
        if (currentPage === +page.dataset.page) {
            console.log(currentPage);
            console.log(page);
            page.style.display = "flex";
        }
        else {
            page.style.display = "none";
        }
    });
});
//# sourceMappingURL=app.js.map