// --------------------------------------------------------
/**
 * Output element for the functions.
 */
const output = document.querySelector("#js-exerciseOutput");

// --------------------------------------------------------
/**
 * alert() dialog generation.
 */
function showAlert() {
	// Text for alert
	const textAlert = "You clicked me! Oh no! Current date is ";

	// Combine variable to dynamically changing Date() output value.
	alert(textAlert + Date());
}

// --------------------------------------------------------
/**
 * Generative text output: “oh no!”
 */
function showOhNo() {
	const textOhNo = "oh no! ";
	// Add element to the HTML document's output section.
	output.append(textOhNo);
}

// --------------------------------------------------------
/**
 * Table output generation.
 *
 * Display table about people's job positions and salaries.
 */
function showTable() {
	createAndPopulateTable(people);
}

/**
 * People (fictional data about job positions and salary amounts)
 *
 * Each row contains the following items:
 * - name
 * - position
 * - salary
 */
const people = [
  { name: 'Tiger Nixon', position: 'System Architect', salary: '$320,800' },
  { name: 'Garrett Winters', position: 'Accountant', salary: '$170,750' },
  { name: 'Ashton Cox', position: 'Junior Technical Author', salary: '$86,000' },
  { name: 'Cedric Kelly', position: 'Senior Javascript Developer', salary: '$433,060' },
  { name: 'Airi Satou', position: 'Accountant', salary: '$162,700' }
];

/**
 * Dynamic HTML table creation from Array dataset.
 *
 * Based on a modified example from:
 * - https://www.slingacademy.com/article/javascript-render-an-array-of-objects-in-an-html-table/
 *
 * @param {Array} people
 */
function createAndPopulateTable(people) {
	// Initialize HTML elements.
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  let headerRow = document.createElement('tr');

	// Create table header elements.
  ['Name', 'Position', 'Salary'].forEach(headerText => {
    let header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
  });

	// Combine elements together to the table element.
  table.appendChild(thead);
  thead.appendChild(headerRow);
  table.appendChild(tbody);

	// Create new table row for each person in the people dataset.
  people.forEach(person => {
    let row = tbody.insertRow();
    let nameCell = row.insertCell(0);
    nameCell.textContent = person.name;
    let positionCell = row.insertCell(1);
    positionCell.textContent = person.position;
    let salaryCell = row.insertCell(2);
    salaryCell.textContent = person.salary;
  });

	// Inject table to the output section on the HTML document.
  output.appendChild(table);
}

// --------------------------------------------------------
/**
 * Geolocation in a web browser environment.
 *
 * Documentation:
 * - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
 * - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
 */
function geolocateMe() {
	/**
	 * Geolocation status element.
	 */
	let status = document.createElement("p");

	/**
	 * Link to OpenStreetMap with Geolocation coordinates.
	 */
  let mapLink = document.createElement("a");

	// Set attributes for the new status element
	status.id = "js-geolocationStatus";

	// Set attributes for the new link element
  mapLink.href = "";
  mapLink.textContent = "";

	// Insert elements to the output section
	output.append(status);
	output.append(mapLink);

	/**
	 * Successful geolocation prints out a link with map coordinates.
	 * @param {*} position
	 */
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

	/**
	 * Error when geolocation is not available.
	 */
  function error() {
    status.textContent = "Unable to retrieve your location";
  }

	/**
	 * Check if geolocation features are available on the browser environment.
	 */
  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

// --------------------------------------------------------
// Add event listeners to the control buttons.

document.querySelector("#js-showAlertButton").addEventListener("click", showAlert);
document.querySelector("#js-showOhNoButton").addEventListener("click", showOhNo);
document.querySelector("#js-tableButton").addEventListener("click", showTable);
document.querySelector("#js-geolocationButton").addEventListener("click", geolocateMe);
