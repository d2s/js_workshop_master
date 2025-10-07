/**
 * Select output element
 */
const output = document.querySelector("#js-exerciseOutput");

const images = [
	"https://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
	"https://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
	"https://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
];

/**
 * Create new image element with a random image source address
 */
function loadRandomImage() {
	/**
	 * Create index number for random image selection
	 *
	 * - `Math.random() * 3` gives value between `0` to `2.999`
	 * - `Math.floor` rounds value down to either `0`, `1`, `2`
	 */
	let randomIndex = Math.floor(Math.random() * images.length);

	/**
	 * Create new image element
	 */
	let imageElement = document.createElement("img");

	// Set attributes for the new element
	imageElement.id = "js-randomImageElement";
	imageElement.className = "randomImageStyles";
	imageElement.src = images[randomIndex];
	imageElement.alt = "Random Tech Image";

	// Insert element to the output section
	output.append(imageElement);
}

// Run code after page has loaded
window.onload = function () {
	loadRandomImage();
}
