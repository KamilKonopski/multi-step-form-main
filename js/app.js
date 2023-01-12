"use strict";
const pages = document.querySelectorAll(".page");
const changePageContainer = document.querySelector(".change-page");
const nextPageButton = document.querySelector(".page__next-btn");
const backPageButton = document.querySelector(".page__back-btn");
const stepNumbers = document.querySelectorAll(".menu__number");
const planOptions = document.querySelectorAll(".plan__option");
const pickInputs = document.querySelectorAll(".pick__input");
const personalForm = document.querySelector(".personal__form");
const personalName = document.getElementById("name");
const personalEmail = document.getElementById("email");
const personalPhone = document.getElementById("phone");
let currentPage = 1;
let planOption;
let pickSelectedArray = [];
for (let i = 0; i < planOptions.length; i++) {
    planOptions[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("plan__option--selected");
        current[0].className = current[0].className.replace(" plan__option--selected", "");
        this.className += " plan__option--selected";
    });
}
document
    .querySelector(".plan__switch")
    .addEventListener("click", () => {
    console.log("i`m here");
    document
        .querySelector(".plan__switch-dot")
        .classList.toggle("yearly");
});
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
    var _a, _b, _c;
    if (currentPage === 1) {
        if (personalName.value === "") {
            const message = document.createElement("span");
            message.classList.add("required");
            message.innerText = "This field is required";
            (_a = personalName.previousElementSibling) === null || _a === void 0 ? void 0 : _a.appendChild(message);
            personalName.style.borderColor = "#ed3548";
        }
        if (personalEmail.value === "") {
            const message = document.createElement("span");
            message.classList.add("required");
            message.innerText = "This field is required";
            (_b = personalEmail.previousElementSibling) === null || _b === void 0 ? void 0 : _b.appendChild(message);
            personalEmail.style.borderColor = "#ed3548";
        }
        if (personalPhone.value === "" || personalPhone.value.length < 10) {
            const message = document.createElement("span");
            message.classList.add("required");
            message.innerText = "This field is required";
            (_c = personalPhone.previousElementSibling) === null || _c === void 0 ? void 0 : _c.appendChild(message);
            personalPhone.style.borderColor = "#ed3548";
        }
        if (personalName.value === "" ||
            personalEmail.value === "" ||
            personalPhone.value === "") {
            return;
        }
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