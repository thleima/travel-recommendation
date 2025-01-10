const btnSearch = document.querySelector("#btn-search");
const btnClear = document.querySelector("#btn-clear");
const results = document.querySelector("#home-results");

const searchInput = document.querySelector("#search-input");

btnSearch.addEventListener("click", handleSearch);
btnClear.addEventListener("click", handleClear);

const file = "./travel_recommendation.json";
const searchKeywords = {
	countries: ["country", "countries", "australia", "japan", "brazil"],
	temples: ["temple", "temples", "angkor wat", "taj mahal"],
	beaches: ["beach", "beaches", "bora bora", "copacabana beach"],
};

let data;

async function fetchData(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		data = await response.json();
	} catch (error) {
		console.error(error.message);
	}
}

fetchData(file);

function handleSearch() {
	results.innerHTML = "";
	const input = searchInput.value.trim().toLowerCase();
	// ** Search within the keywords array defined
	for (let theme in searchKeywords) {
		// ** Check if the word searched, is included in keywords
		if (searchKeywords[theme].includes(input)) {
			// ** YES ? Get the element from data
			// theme = the key to search in data
			console.log(`data theme is ${theme} :`, data[theme]);
			let find;
			for (let element of data[theme]) {
				element.name.toLowerCase() === input ? (find = element.cities) : false;
			}
			find.forEach(
				(item) =>
					(results.innerHTML += createCard(
						item.imageUrl,
						item.name,
						item.description
					))
			);
		} else {
			console.log("no");
		}
		// const sydney = data.countries[0].cities[0];
		// results.innerHTML += createCard(
		// 	sydney.imageUrl,
		// 	sydney.name,
		// 	sydney.description
		// );
	}
}

function createCard(img, name, description) {
	return `<div class="card-container">
						<img src="${img}" alt="Image of ${name}" />
						<h4>${name}</h4>
						<p><i>${description}</i></p>
					</div>`;
}

function handleClear() {
	results.innerHTML = "";
}
