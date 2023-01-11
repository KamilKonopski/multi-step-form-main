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

let currentPage = 1;

// Working!!!!

nextPageButton.addEventListener("click", () => {
	currentPage += 1;
	console.log(currentPage);

	if (currentPage >= 2) {
		backPageButton.style.display = "block";
		changePageContainer.style.justifyContent = "space-between";
	}

	pages.forEach((page) => {
		if (currentPage === +page.dataset.page!) {
			console.log(currentPage);
			console.log(page);
			page.style.display = "flex";
		} else {
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

	pages.forEach((page) => {
		if (currentPage === +page.dataset.page!) {
			console.log(currentPage);
			console.log(page);
			page.style.display = "flex";
		} else {
			page.style.display = "none";
		}
	});
});
