// Code your solution here
// Sample drivers array for testing purposes
const drivers = [
  { name: "John", hometown: "New York" },
  { name: "Jane", hometown: "Chicago" },
  { name: "Jake", hometown: "Los Angeles" },
  { name: "James", hometown: "Miami" },
];

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

// Example usage and testing
console.log(findMatching(["John", "Jane", "Jake", "James"], "john")); // Output: ["John"]
console.log(fuzzyMatch(["John", "Jane", "Jake", "James"], "Ja")); // Output: ["Jane", "Jake", "James"]
console.log(matchName(drivers, "John")); // Output: [{ name: "John", hometown: "New York" }]

