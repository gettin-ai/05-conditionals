// Get the form and output area from the page.
const weatherForm = document.getElementById("weatherForm");
const weatherSelect = document.getElementById("weather");
const temperatureInput = document.getElementById("temperature");
const suggestionBox = document.getElementById("suggestion");

// Run this code when the user clicks "Get Suggestion".
weatherForm.addEventListener("submit", function (event) {
	event.preventDefault();

	const weather = weatherSelect.value;
	const temperature = Number(temperatureInput.value);
	let message = "";

	// Check the weather and choose what to bring.
	if (weather === "cloudy" || weather === "rainy") {
		message = `It's ${weather}! A light jacket might be a good idea.`;
	} else if (weather === "sunny") {
		message = `It's ${weather}! Bring sunglasses and water. 😎💧`;
	} else if (weather === "snowy") {
		message = `It's ${weather}! Bring a warm coat, gloves, and boots. ❄️🧤`;
	} else if (weather === "windy") {
		message = `It's ${weather}! Bring a windbreaker and tie your hair back. 💨🧢`;
	} else {
		message = "Please select the weather first. 🙂";
	}

	// Add an extra suggestion when the temperature is cold.
	if (!Number.isNaN(temperature) && temperature < 50) {
		message = `${message} It's below 50°F, so wear a warm jacket. 🧥`;
	}

	suggestionBox.innerHTML = `<p>${message}</p>`;
});
