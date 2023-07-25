// Code your solution here

// Function to find matching drivers based on a provided string (case-insensitive)
function findMatching(drivers, query) {
  return drivers.filter((driver) => driver.toLowerCase() === query.toLowerCase());
}

// Function to find drivers whose names begin with the provided letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) => driver.startsWith(letters));
}

// Function to find drivers whose names match the provided string
function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}

