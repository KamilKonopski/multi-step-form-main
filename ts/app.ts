const pages = document.querySelectorAll<HTMLDivElement>(".page");
const changePageContainer = document.querySelector(
	".change-page"
) as HTMLDivElement;
const nextPageButton = document.querySelector(
	".page__next-btn"
) as HTMLButtonElement;
const backPageButton = document.querySelector(
	".page__back-btn"
) as HTMLButtonElement;
const stepNumbers = document.querySelectorAll(".menu__number");
const planOptions = document.querySelectorAll<HTMLDivElement>(".plan__option");

let currentPage = 1;

// checkbox.addEventListener("change", function () {
// 	if (this.checked) {
// 		console.log("Checkbox is checked..");
// 	} else {
// 		console.log("Checkbox is not checked..");
// 	}
// });

for (let i = 0; i < planOptions.length; i++) {
	planOptions[i].addEventListener("click", function () {
		let current = document.getElementsByClassName("plan__option--selected");
		current[0].className = current[0].className.replace(
			" plan__option--selected",
			""
		);
		this.className += " plan__option--selected";
	});
}

nextPageButton.addEventListener("click", () => {
	currentPage += 1;

	stepNumbers.forEach((step) => {
		if (+step.innerHTML === currentPage) {
			step.classList.add("menu__number--active");
		} else {
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
		if (currentPage === +page.dataset.page!) {
			page.style.display = "flex";
		} else {
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
		} else {
			step.classList.remove("menu__number--active");
		}
	});

	if (!(currentPage === 4)) {
		nextPageButton.innerText = "Next Step";
		nextPageButton.classList.remove("confirm");
	}

	pages.forEach((page) => {
		if (currentPage === +page.dataset.page!) {
			page.style.display = "flex";
		} else {
			page.style.display = "none";
		}
	});
});
