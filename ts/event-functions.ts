import {
	pages,
	stepNumbers,
	nextPageButton,
	backPageButton,
	changePageContainer,
} from "./variables.js";

import {
	personalSectionElementBuilder,
	pickSectionElementBuilder,
	planSectionElementBuilder,
	finishSectionElementBuilder,
	thanksSectionElementBuilder,
} from "./dom-utils.js";

let currentPage = 1;

export function nextPageHandler() {
	if (currentPage === 1) {
		pages.innerHTML = "";
		pages.appendChild(personalSectionElementBuilder());
		// if (personalName.value === "") {
		// 	const message = document.createElement("span");
		// 	message.classList.add("required");
		// 	message.innerText = "This field is required";
		// 	personalName.previousElementSibling?.appendChild(message);
		// 	personalName.style.borderColor = "#ed3548";
		// }
		// if (personalEmail.value === "") {
		// 	const message = document.createElement("span");
		// 	message.classList.add("required");
		// 	message.innerText = "This field is required";
		// 	personalEmail.previousElementSibling?.appendChild(message);
		// 	personalEmail.style.borderColor = "#ed3548";
		// }
		// if (personalPhone.value === "" || personalPhone.value.length < 10) {
		// 	const message = document.createElement("span");
		// 	message.classList.add("required");
		// 	message.innerText = "This field is required";
		// 	personalPhone.previousElementSibling?.appendChild(message);
		// 	personalPhone.style.borderColor = "#ed3548";
		// }
		// if (
		// 	personalName.value === "" ||
		// 	personalEmail.value === "" ||
		// 	personalPhone.value === ""
		// ) {
		// 	return;
		// }
	}

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
		pages.innerHTML = "";
		pages.appendChild(finishSectionElementBuilder());

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

	document.querySelectorAll<HTMLDivElement>(".page").forEach((page) => {
		if (currentPage === +page.dataset.page!) {
			page.style.display = "flex";
		} else {
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
		} else {
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

	document.querySelectorAll<HTMLDivElement>(".page").forEach((page) => {
		if (currentPage === +page.dataset.page!) {
			page.style.display = "flex";
		} else {
			page.style.display = "none";
		}
	});
}
