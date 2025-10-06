/**
 * Output element selection
 *
 * More details:
 * - https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 */
let figureTarget = document.querySelector("#js-figureTarget");
let quoteTarget = document.querySelector("#js-quoteTarget");
let authorTarget = document.querySelector("#js-authorTarget");

// console.info("quoteTarget before modification: " + quoteTarget);
// console.log(quoteTarget);
console.info("quoteTarget text contents before modification:");
console.log(quoteTarget.textContent);

/**
 * Text snippets for the quotes
 */
const quoteText =
	"If I had nine hours to chop down a tree, I'd spend the first six	sharpening my ax.";

/**
 * Quote marks for better typography
 */
const quoteMarksOpen = "“";
const quoteMarksClose = "”";

/**
 * Combine quoted text with proper typographic elements around it.
 */
const quoteTextCombined = quoteMarksOpen + quoteText + quoteMarksClose;

/**
 * Typographically suitable Em dash, together with
 * a NARROW NO-BREAK SPACE Unicode character.
 *
 * More details:
 * - https://en.wikipedia.org/wiki/Dash#Em_dash
 * - https://en.wikipedia.org/wiki/Thin_space
 */
const quoteAuthorName = "Abraham Lincoln";
const quoteAuthorDash = "— ";
const quoteAuthor = quoteAuthorDash + quoteAuthorName;

/**
 * Injecting content to HTML page more securely
 *
 * More details:
 * - https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html
 * - https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page
 * - https://javascript.sumankunwar.com.np/en/document-object-model/dom-manipulation.html
 * - https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
 */
quoteTarget.textContent = quoteTextCombined;
authorTarget.textContent = quoteAuthor;

// console.info("quoteTarget after modification: " + quoteTarget);
// console.log(quoteTarget);
console.info("quoteTarget text contents after modification:");
console.log(quoteTarget.textContent);
