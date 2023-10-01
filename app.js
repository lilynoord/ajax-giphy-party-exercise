//Global Constants
const apiKey = "6bJLXp174a8qDa8N7UhB6fM5MK2gWzms";
const apiKeyText = "api_key=" + apiKey;
const searchBar = document.querySelector("#gifsearchbar");
const search = document.querySelector('form[name="gif-srch-form"]');
const thisdiv = document.querySelector('div[name="div"]');

async function axiGet() {
	let x = await axios.get("http://api.giphy.com/v1/gifs/search", {
		params: {
			q: searchBar.value,
			api_key: apiKey,
		},
	});
	return x;
}

search.addEventListener("submit", async function (event) {
	event.preventDefault();
	console.log(searchBar.value);
	let t = await axiGet();
	console.log(t);
	let data;
	data = t.data.data;

	let gif = document.createElement("img");
	gif.src = data[Math.floor(Math.random() * data.length)].images.original.url;
	thisdiv.append(gif);
});

search.addEventListener("reset", function (event) {
	let gifs = document.querySelectorAll("img");
	gifs.forEach((x) => x.remove());
});
