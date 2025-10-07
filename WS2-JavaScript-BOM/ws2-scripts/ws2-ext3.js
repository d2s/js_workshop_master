/**
 * Detect whether user is using Firefox and redirect to another page
 */

window.onload = function () {
	// Get the userAgent string
	let userAgent = navigator.userAgent;

	/**
	 * Check if browser name includes Firefox
	 * (specific to avoid false positives)
	 */
	if (userAgent.includes("Firefox")) {
		// Redirect to Mozilla's website
		location.href = "https://www.mozilla.org/en-GB/";
	} else {
		// Fallback: Show message (simple DOM write)
		location.href = "https://d2s-js-workshop.netlify.app/";
	}
};
