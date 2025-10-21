/**
 * Output element for the functions.
 */
const output = document.querySelector("#js-exerciseOutput");

/**
 * Reusable text output function.
 *
 * @param {String} outputTextContents
 */
function showOutputText(outputTextContents) {
	console.log(outputTextContents);
	// Add text to the HTML document's output section.
	output.append(outputTextContents);
}

/**
 * Action to run when mouse pointer enters element.
 */
function pointerEnterAction() {
	const outputTextContents = "Stepped over my a mouse! ";
	showOutputText(outputTextContents)
}

/**
 * Action to run when mouse pointer leaves element.
 */
function pointerLeaveAction() {
	const outputTextContents = "Bye bye mouse! ";
	showOutputText(outputTextContents)
}

// -----------------------------------------
// Add event listeners
//
// - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events
// - https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
// - https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent
// - https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerover_event
// - https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerenter_event
// - https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerleave_event

// Top level heading on the page header
// document.querySelector("#js-headerHeading").addEventListener("pointerenter", pointerEnterAction);
// document.querySelector("#js-headerHeading").addEventListener("pointerleave", pointerLeaveAction);

// Exercise heading
document.querySelector("#js-exerciseHeading").addEventListener("pointerenter", pointerEnterAction);
document.querySelector("#js-exerciseHeading").addEventListener("pointerleave", pointerLeaveAction);
