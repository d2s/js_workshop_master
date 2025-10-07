/**
 * NOTE:
 * Avoid using `document.write()` as it is going to be removed
 * from web browsers because of constant XSS injection issues!
 *
 * - https://developer.mozilla.org/en-US/docs/Web/API/Document/write
 * - https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln
 * - https://csswizardry.com/2023/01/why-not-document-write/
 * -
 */

/**
 * DOMPurify
 * "XSS sanitizer for HTML, MathML and SVG."
 *
 * - https://github.com/cure53/DOMPurify
 * - https://github.com/cure53/DOMPurify/wiki/Security-Goals-&-Threat-Model
 * - https://github.com/cure53/DOMPurify/releases/tag/3.2.7
 * - https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html
 */

/**
 * Content Security Policy (CSP) violation reports
 *
 * - https://web.dev/articles/trusted-types#prepare
 */
document.addEventListener(
	"securitypolicyviolation",
	console.error.bind(console)
);

/**
 * Trusted types
 *
 * - https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API
 * - https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill
 */

// Trusted Types tinyfill
if (typeof trustedTypes === "undefined")
	trustedTypes = { createPolicy: (n, rules) => rules };

// Create Trusted Types policy
const policy = trustedTypes.createPolicy("my-policy", {
	createHTML: (input) => DOMPurify.sanitize(input),
});

// Potentially untrusted userInput
const userInput = "<li>content</li>";

/**
 * Output element selection
 *
 * More details:
 * - https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 * - https://javascript.info/modifying-document#insertion-methods
 */
// const element = document.querySelector("#js-exerciseOutput");
const outputList = document.querySelector("#js-orderedList");

/**
 * "In supporting browsers, trustedHTML is a TrustedHTML object.
 * In non-supporting browsers, trustedHTML is a string."
 */
const trustedHTML = policy.createHTML(userInput);

/**
 * "In supporting browsers,
 * this will throw [error] if trustedHTML is not a TrustedHTML object."
 */
// outputList.innerHTML = trustedHTML;

// insert trustedHTML at the end of <ol>
// outputList.append(trustedHTML);

/**
 * Repeating text function
 *
 * @param {Number} amount Amount of repetitions
 */
function repeatingText(amount) {
	for (let i = 0; i < amount; i++) {
		// Create new list item
		let listElement = document.createElement("li");
		// Create new text contents for the list item
		let textAmount = "Hello, repeated! " + "= " + i;
		// console.log(textAmount);

		// Insert text to the element
		listElement.innerHTML = textAmount;
		// Insert listElement as the last item on the list
		outputList.append(listElement);
	}
}

// output: no output at all
// repeatingText();

// output: Repeat list item for 50 times
repeatingText(50);
