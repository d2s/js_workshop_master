/**
 * Confirm dialog for asking whether the user is a student.
 */
function checkStudent() {
	const confirmText = "Are you a student?";
	const resultText = "You are a student: ";
	const result = document.getElementById("js-result");

	/**
	 * Show confirm dialog
	 *
	 * returns true/false
	 */
	let isStudent = confirm(confirmText);

	/**
	 * Show output by replacing text contents of the result element.
	 */
	result.innerHTML = resultText + isStudent;
}
