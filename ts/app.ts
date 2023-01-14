import { planSectionElementBuilder } from "./dom-utils.js";

const pages = document.querySelector(".pages") as HTMLDivElement;
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
const pickInputs = document.querySelectorAll<HTMLInputElement>(".pick__input");
const personalName = document.getElementById("name") as HTMLInputElement;
const personalEmail = document.getElementById("email") as HTMLInputElement;
const personalPhone = document.getElementById("phone") as HTMLInputElement;

let currentPage = 1;
// let planOption: string;
let pickSelectedArray: {
	text: string;
	price: string;
}[] = [];

// PERSONAL FORM VALIDATE

// if (personalName.value === "") {
// 	const message = document.createElement("span");
// 	message.classList.add("required");
// 	message.innerText = "This field is required";
// 	personalName.previousElementSibling?.appendChild(message);
// }

// PLAN SELECTED
for (let i = 0; i < planOptions.length; i++) {
	planOptions[i].addEventListener("click", function () {
		// planOption = planOptions[i].dataset.option!;
		// console.log(planOption);
		// document.querySelector<HTMLSpanElement>(".finish__plan-chosen")!.innerText =
		// 	planOption;

		// const planPrice = planOptions[i].children[2] as HTMLSpanElement;

		// document.querySelector<HTMLSpanElement>(".finish__plan-price")!.innerText =
		// 	planPrice.innerText;

		let current = document.getElementsByClassName("plan__option--selected");
		current[0].className = current[0].className.replace(
			" plan__option--selected",
			""
		);
		this.className += " plan__option--selected";
	});
}

// PLAN SWITCH
// document
// 	.querySelector<HTMLButtonElement>(".plan__switch")!
// 	.addEventListener("click", () => {
// 		console.log("i`m here");

// 		document
// 			.querySelector<HTMLDivElement>(".plan__switch-dot")!
// 			.classList.toggle("yearly");
// 	});

// PICK SELECTED
for (let i = 0; i < pickInputs.length; i++) {
	pickInputs[i].addEventListener("change", function () {
		const pickOption = pickInputs[i].parentElement;

		if (this.checked) {
			pickOption?.classList.add("pick__option--selected");
			const pickSelected = pickOption?.children[1] as HTMLLabelElement;
			const pickPriceSelected = pickOption?.children[3] as HTMLLabelElement;
			const pickSelectedObject = {
				text: pickSelected.innerText,
				price: pickPriceSelected.innerText,
			};
			pickSelectedArray.push(pickSelectedObject);
		} else {
			pickOption?.classList.remove("pick__option--selected");
			const pickSelected = pickOption?.children[1] as HTMLLabelElement;
			const newPickArray = pickSelectedArray.filter(
				(el) => el.text !== pickSelected.innerText
			);
			pickSelectedArray = newPickArray;
		}
	});
}

document.querySelectorAll(".personal__input").forEach((input) => {
	input.addEventListener("focus", (e) => {
		const target = e.target as HTMLInputElement;
		target.style.borderColor = "#d6d9e6";
		const label = target.previousElementSibling as HTMLLabelElement;
		const requiredSpan = label.children[0] as HTMLSpanElement;
		if (requiredSpan) {
			requiredSpan.style.display = "none";
		}
	});
});

// NEXT STEP BUTTON
nextPageButton.addEventListener("click", () => {
	if (currentPage === 1) {
		if (personalName.value === "") {
			const message = document.createElement("span");
			message.classList.add("required");
			message.innerText = "This field is required";
			personalName.previousElementSibling?.appendChild(message);
			personalName.style.borderColor = "#ed3548";
		}
		if (personalEmail.value === "") {
			const message = document.createElement("span");
			message.classList.add("required");
			message.innerText = "This field is required";
			personalEmail.previousElementSibling?.appendChild(message);
			personalEmail.style.borderColor = "#ed3548";
		}
		if (personalPhone.value === "" || personalPhone.value.length < 10) {
			const message = document.createElement("span");
			message.classList.add("required");
			message.innerText = "This field is required";
			personalPhone.previousElementSibling?.appendChild(message);
			personalPhone.style.borderColor = "#ed3548";
		}
		if (
			personalName.value === "" ||
			personalEmail.value === "" ||
			personalPhone.value === ""
		) {
			return;
		}
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
		nextPageButton.innerText = "Confirm";
		nextPageButton.classList.add("confirm");
	}

	if (currentPage === 5) {
		nextPageButton.style.display = "none";
		backPageButton.style.display = "none";
	}

	if (currentPage === 2) {
		pages.innerHTML = "";
		pages.appendChild(planSectionElementBuilder());
	}

	document.querySelectorAll<HTMLDivElement>(".page").forEach((page) => {
		if (currentPage === +page.dataset.page!) {
			page.style.display = "flex";
		} else {
			page.style.display = "none";
		}
	});
});

// BACK STEP BUTTON
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

	document.querySelectorAll<HTMLDivElement>(".page").forEach((page) => {
		if (currentPage === +page.dataset.page!) {
			page.style.display = "flex";
		} else {
			page.style.display = "none";
		}
	});
});
