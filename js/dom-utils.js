import { planSwitch } from "./event-functions.js";
const headingElementBuilder = (pageName, headingText) => {
    const headingElement = document.createElement("h2");
    headingElement.classList.add(`${pageName}__heading`);
    headingElement.innerText = headingText;
    return headingElement;
};
const textInfoElementBuilder = (pageName, textInfo) => {
    const textInfoElement = document.createElement("p");
    textInfoElement.classList.add(`${pageName}__text-info`);
    textInfoElement.innerText = textInfo;
    return textInfoElement;
};
const personalInputElementBuilder = (text, type, name, placeholder) => {
    const personalLabelElement = document.createElement("label");
    personalLabelElement.classList.add("personal__label");
    personalLabelElement.htmlFor = name;
    personalLabelElement.innerText = text;
    const personalInputElement = document.createElement("input");
    personalInputElement.classList.add("personal__input");
    personalInputElement.type = type;
    personalInputElement.name = name;
    personalInputElement.id = name;
    personalInputElement.placeholder = placeholder;
    personalLabelElement.appendChild(personalInputElement);
    return personalLabelElement;
};
const planOptionElementBuilder = (option, name, price, activeClass) => {
    const planOptionElement = document.createElement("div");
    planOptionElement.classList.add("plan__option", `${activeClass}`);
    planOptionElement.setAttribute("data-option", option);
    const planImageElement = document.createElement("img");
    planImageElement.classList.add("plan__image");
    planImageElement.src = `./assets/images/icon-${option}.svg`;
    planImageElement.alt = `${option} plan ${price}`;
    planOptionElement.appendChild(planImageElement);
    const planNameElement = document.createElement("span");
    planNameElement.classList.add("plan__name");
    planNameElement.innerText = name;
    planOptionElement.appendChild(planNameElement);
    const planPriceElement = document.createElement("span");
    planPriceElement.classList.add("plan__price");
    planPriceElement.innerText = price;
    planOptionElement.appendChild(planPriceElement);
    return planOptionElement;
};
const pickOptionElementBuilder = (name, nameText, desc, price) => {
    const pickOption = document.createElement("label");
    pickOption.classList.add("pick__option");
    pickOption.htmlFor = name;
    const pickInput = document.createElement("input");
    pickInput.classList.add("pick__input");
    pickInput.type = "checkbox";
    pickInput.name = name;
    pickInput.id = name;
    pickOption.appendChild(pickInput);
    const pickName = document.createElement("span");
    pickName.classList.add("pick__name");
    pickName.innerText = nameText;
    pickOption.appendChild(pickName);
    const pickDesc = document.createElement("span");
    pickDesc.classList.add("pick__desc");
    pickDesc.innerText = desc;
    pickOption.appendChild(pickDesc);
    const pickPrice = document.createElement("span");
    pickPrice.classList.add("pick__price");
    pickPrice.innerText = price;
    pickOption.appendChild(pickPrice);
    return pickOption;
};
export const personalSectionElementBuilder = () => {
    const personalSectionElement = document.createElement("section");
    personalSectionElement.classList.add("page", "personal");
    personalSectionElement.setAttribute("data-page", "1");
    personalSectionElement.appendChild(headingElementBuilder("personal", "Personal info"));
    personalSectionElement.appendChild(textInfoElementBuilder("personal", "Please provide your name, email address, and phone number."));
    const personalFormElement = document.createElement("form");
    personalFormElement.classList.add("personal__form");
    personalFormElement.appendChild(personalInputElementBuilder("Name", "text", "name", "e.g Stephen King"));
    personalFormElement.appendChild(personalInputElementBuilder("Email Address", "email", "email", "e.g stephenking@lorem.com"));
    personalFormElement.appendChild(personalInputElementBuilder("Phone Number", "number", "phone", "e.g + 1 234 567 890"));
    personalSectionElement.appendChild(personalFormElement);
    return personalSectionElement;
};
export const planSectionElementBuilder = () => {
    const planSectionElement = document.createElement("section");
    planSectionElement.classList.add("page", "plan");
    planSectionElement.setAttribute("data-page", "2");
    planSectionElement.appendChild(headingElementBuilder("plan", "Select your plan"));
    planSectionElement.appendChild(textInfoElementBuilder("plan", "You have the option of monthly or yearly billing"));
    const planOptionsElement = document.createElement("div");
    planOptionsElement.classList.add("plan__options");
    planOptionsElement.appendChild(planOptionElementBuilder("arcade", "Arcade", "$9/mo", "plan__option--selected"));
    planOptionsElement.appendChild(planOptionElementBuilder("advanced", "Advanced", "$12/mo"));
    planOptionsElement.appendChild(planOptionElementBuilder("pro", "Pro", "$15/mo"));
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
    planSwitchElement.addEventListener("click", planSwitch);
    const planYearlyElement = document.createElement("span");
    planYearlyElement.classList.add("plan__yearly");
    planYearlyElement.innerText = "Yearly";
    planSubElement.appendChild(planYearlyElement);
    planSectionElement.appendChild(planSubElement);
    return planSectionElement;
};
export const pickSectionElementBuilder = () => {
    const pickSectionElement = document.createElement("section");
    pickSectionElement.classList.add("page", "pick");
    pickSectionElement.setAttribute("data-page", "3");
    pickSectionElement.appendChild(headingElementBuilder("pick", "Pick add-ons"));
    pickSectionElement.appendChild(textInfoElementBuilder("pick", "Add-ons help enhance your gaming experience."));
    const pickOptions = document.createElement("div");
    pickOptions.classList.add("pick__options");
    pickOptions.appendChild(pickOptionElementBuilder("service", "Online service", "Access to multiplayer games", "+$1/mo"));
    pickOptions.appendChild(pickOptionElementBuilder("storage", "Larger storage", "Extra 1TB of cloud save", "+$2/mo"));
    pickOptions.appendChild(pickOptionElementBuilder("profile", "Customizable profile", "Custom theme on your profile", "+$2/mo"));
    pickSectionElement.appendChild(pickOptions);
    return pickSectionElement;
};
export const finishSectionElementBuilder = () => {
    const finishSectionElement = document.createElement("section");
    finishSectionElement.classList.add("page", "finish");
    finishSectionElement.setAttribute("data-page", "4");
    finishSectionElement.appendChild(headingElementBuilder("finish", "Finishing up"));
    finishSectionElement.appendChild(textInfoElementBuilder("finish", "Double-check everything looks OK before confirming."));
    const finishSummary = document.createElement("div");
    finishSummary.classList.add("finish__summary");
    finishSectionElement.appendChild(finishSummary);
    const finishPlan = document.createElement("div");
    finishPlan.classList.add("finish__plan");
    finishSectionElement.appendChild(finishPlan);
    const finishSummaryPrice = document.createElement("div");
    finishSummaryPrice.classList.add("finish__summary-price");
    finishSectionElement.appendChild(finishSummaryPrice);
    return finishSectionElement;
};
export const thanksSectionElementBuilder = () => {
    const thanksSectionElement = document.createElement("section");
    thanksSectionElement.classList.add("page", "thanks");
    thanksSectionElement.setAttribute("data-page", "5");
    const thanksIcon = document.createElement("div");
    thanksIcon.classList.add("thanks__icon");
    const thanksImage = document.createElement("img");
    thanksImage.classList.add("thanks__image");
    thanksImage.src = "./assets/images/icon-thank-you.svg";
    thanksImage.alt = "thanks icon";
    thanksIcon.appendChild(thanksImage);
    thanksSectionElement.appendChild(thanksIcon);
    thanksSectionElement.appendChild(headingElementBuilder("thanks", "Thank you!"));
    thanksSectionElement.appendChild(textInfoElementBuilder("thanks", "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com"));
    return thanksSectionElement;
};
//# sourceMappingURL=dom-utils.js.map