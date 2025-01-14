// Take care of the navigation for the navbar "Home - About - Contact"
// Does a React kind of thing with Page as Component and SPA
const homeComponent = document.querySelector("#home-component");
const aboutComponent = document.querySelector("#about-component");
const contactComponent = document.querySelector("#contact-component");
const mainComponent = document.querySelector("#main");
const navbarSearch = document.querySelector(".navbar-search");

const homeLink = document.querySelector("#home-link");
const aboutLink = document.querySelector("#about-link");
const contactLink = document.querySelector("#contact-link");

homeLink.addEventListener("click", () => showComponent(homeComponent));
aboutLink.addEventListener("click", () => showComponent(aboutComponent));
contactLink.addEventListener("click", () => showComponent(contactComponent));

function showComponent(selected) {
	switch (selected.getAttribute("id")) {
		case "home-component":
			changeVisibility(homeComponent, "visible");
			changeVisibility(navbarSearch, "visible");
			changeVisibility(aboutComponent, "hidden");
			changeVisibility(contactComponent, "hidden");
			break;
		case "about-component":
			changeVisibility(aboutComponent, "visible");
			changeVisibility(navbarSearch, "hidden");
			changeVisibility(homeComponent, "hidden");
			changeVisibility(contactComponent, "hidden");
			break;
		case "contact-component":
			changeVisibility(contactComponent, "visible");
			changeVisibility(navbarSearch, "hidden");
			changeVisibility(homeComponent, "hidden");
			changeVisibility(aboutComponent, "hidden");
			break;
	}
}

function changeVisibility(component, visibility) {
	component.style.visibility = visibility;
}

showComponent(homeComponent);
