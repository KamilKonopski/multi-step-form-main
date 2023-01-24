import {
	pages,
	planOptions,
	pickInputs,
	nextPageButton,
	backPageButton,
} from "./variables.js";

import { personalSectionElementBuilder } from "./dom-utils.js";

import { nextPageHandler, backPageHandler } from "./event-functions.js";

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
nextPageButton.addEventListener("click", nextPageHandler);

// BACK STEP BUTTON
backPageButton.addEventListener("click", backPageHandler);

pages.appendChild(personalSectionElementBuilder());
