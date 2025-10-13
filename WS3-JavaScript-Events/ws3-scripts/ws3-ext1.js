/**
 * Select output element
 */
const output = document.querySelector("#js-exerciseOutput");


/**
 * Trigger alert dialog
 */
function showAlertDialog() {
	// Text for alert dialog
	const textAlert = "You clicked me! Oh no! Current date is ";

	// Combine variable to dynamically changing Date() output value.
	alert(textAlert + Date());
}

/**
 * “oh no!”
 */
function showOhNo() {
	const textOhNo = "oh no! ";
	// Display it!
	output.append(textOhNo);
}

/**
 * Display table of data about job positions and salaries.
 */
function showTable() {
	const showTableText = "oh no! ";
	// Display it! showTableDisplay
	output.append(showTableText);
}
