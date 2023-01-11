"use strict";
const pages = document.querySelectorAll(".page");
const nextPageButton = document.querySelector(".page__next-btn");
const backPageButton = document.querySelector(".page__back-btn");
let currentPage = 1;
nextPageButton.addEventListener("click", () => {
    currentPage += 1;
    console.log(currentPage);
    if (currentPage >= 2) {
        backPageButton.style.opacity = "1";
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
        backPageButton.style.opacity = "0";
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