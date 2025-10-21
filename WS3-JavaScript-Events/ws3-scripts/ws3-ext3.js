/**
 * Output element for the functions.
 */
const output = document.querySelector("#js-exerciseOutput");

/**
 * Shorter name for the form textarea element
 */
const exampleTextarea = document.getElementById("js-example-textarea");

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


/**
 * Form input textarea content lenght.
 *
 * - https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/value
 */
// let textareaValue = exampleTextarea.value;
// let textareaCharacter = exampleTextarea.length;

const textareaCharcount = document.getElementById("js-example-textarea-charcount-amount");

/**
 * Update exampleTextarea character count after keypress.
 *
 * - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events
 */
exampleTextarea.addEventListener("keyup", () => {
  textareaCharcount.innerText = `${exampleTextarea.value.length} characters`;
});

/**
 * Submit button
 *
 * - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events
 */
const sendButton = document.querySelector("#js-example-send-button");
// const submitButton = document.querySelector("#js-example-submit");
const warning = document.querySelector("#js-example-warning");
const success = document.querySelector("#js-example-success");

function checkFormContents() {
	// Check that there are more than zero characters on the textarea contents.
  if (exampleTextarea.value.length === 0) {
		// Show warning message by removing hidden element state.
    warning.hidden = false;
		success.hidden = true;
  } else {
		// Hide warning message by adding hidden element state.
    warning.hidden = true;
		success.hidden = false;
  }
};

sendButton.addEventListener("click", checkFormContents);



// exampleTextarea.addEventListener("pointerenter", pointerEnterAction);
// exampleTextarea.addEventListener("pointerleave", pointerLeaveAction);




