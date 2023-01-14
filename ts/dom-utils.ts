const headingElementBuilder = (pageName: string, headingText: string) => {
	const headingElement = document.createElement("h2");
	headingElement.classList.add(`${pageName}__heading`);
	headingElement.innerText = `${headingText}`;

	return headingElement;
};

const textInfoElementBuilder = (pageName: string, textInfo: string) => {
	const textInfoElement = document.createElement("p");
	textInfoElement.classList.add(`${pageName}__text-info`);
	textInfoElement.innerText = `${textInfo}`;

	return textInfoElement;
};

const personalInputElementBuilder = (
	text: string,
	type: string,
	name: string,
	placeholder: string
) => {
	const personalLabelElement = document.createElement("label");
	personalLabelElement.classList.add("personal__label");
	personalLabelElement.htmlFor = `${name}`;
	personalLabelElement.innerText = `${text}`;

	const personalInputElement = document.createElement("input");
	personalInputElement.classList.add("personal__input");
	personalInputElement.type = `${type}`;
	personalInputElement.name = `${name}`;
	personalInputElement.id = `${name}`;
	personalInputElement.placeholder = `${placeholder}`;

	personalLabelElement.appendChild(personalInputElement);

	return personalLabelElement;
};

const planOptionElementBuilder = (
	option: string,
	name: string,
	price: string,
	activeClass?: string
) => {
	const planOptionElement = document.createElement("div");
	planOptionElement.classList.add("plan__option", `${activeClass}`);
	planOptionElement.setAttribute("data-option", `${option}`);

	const planImageElement = document.createElement("img");
	planImageElement.classList.add("plan__image");
	planImageElement.src = `./assets/images/icon-${option}.svg`;
	planImageElement.alt = `${option} plan ${price}`;
	planOptionElement.appendChild(planImageElement);

	const planNameElement = document.createElement("span");
	planNameElement.classList.add("plan__name");
	planNameElement.innerText = `${name}`;
	planOptionElement.appendChild(planNameElement);

	const planPriceElement = document.createElement("span");
	planPriceElement.classList.add("plan__price");
	planPriceElement.innerText = `${price}`;
	planOptionElement.appendChild(planPriceElement);

	return planOptionElement;
};

export const personalSectionElementBuilder = () => {
	const personalSectionElement = document.createElement("section");
	personalSectionElement.classList.add("page", "personal");
	personalSectionElement.setAttribute("data-page", "1");

	personalSectionElement.appendChild(
		headingElementBuilder("personal", "Personal info")
	);

	personalSectionElement.appendChild(
		textInfoElementBuilder(
			"personal",
			"Please provide your name, email address, and phone number."
		)
	);

	const personalFormElement = document.createElement("form");
	personalFormElement.classList.add("personal__form");

	personalFormElement.appendChild(
		personalInputElementBuilder("Name", "text", "name", "e.g Stephen King")
	);
	personalFormElement.appendChild(
		personalInputElementBuilder(
			"Email Address",
			"email",
			"email",
			"e.g stephenking@lorem.com"
		)
	);
	personalFormElement.appendChild(
		personalInputElementBuilder(
			"Phone Number",
			"number",
			"phone",
			"e.g + 1 234 567 890"
		)
	);

	personalSectionElement.appendChild(personalFormElement);

	return personalSectionElement;
};

export const planSectionElementBuilder = () => {
	const planSectionElement = document.createElement("section");
	planSectionElement.classList.add("page", "plan");
	planSectionElement.setAttribute("data-page", "2");

	planSectionElement.appendChild(
		headingElementBuilder("plan", "Select your plan")
	);

	planSectionElement.appendChild(
		textInfoElementBuilder(
			"plan",
			"You have the option of monthly or yearly billing"
		)
	);

	const planOptionsElement = document.createElement("div");
	planOptionsElement.classList.add("plan__options");
	planOptionsElement.appendChild(
		planOptionElementBuilder(
			"arcade",
			"Arcade",
			"$9/mo",
			"plan__option--selected"
		)
	);
	planOptionsElement.appendChild(
		planOptionElementBuilder("advanced", "Advanced", "$12/mo")
	);
	planOptionsElement.appendChild(
		planOptionElementBuilder("pro", "Pro", "$15/mo")
	);
	planSectionElement.appendChild(planOptionsElement);

	const planSubElement = document.createElement("div");
	planSubElement.classList.add("plan__sub");

	const planMonthlyElement = document.createElement("span");
	planMonthlyElement.classList.add("plan__monthly");
	planMonthlyElement.innerText = "Monthly";
	planSubElement.appendChild(planMonthlyElement);

	const planSwitchElement = document.createElement("button");
	planSwitchElement.classList.add("plan__switch");
	const planSwitchDotElement = document.createElement("div");
	planSwitchDotElement.classList.add("plan__switch-dot");
	planSwitchElement.appendChild(planSwitchDotElement);
	planSubElement.appendChild(planSwitchElement);

	const planYearlyElement = document.createElement("span");
	planYearlyElement.classList.add("plan__yearly");
	planYearlyElement.innerText = "Yearly";
	planSubElement.appendChild(planYearlyElement);

	return planSectionElement;
};
