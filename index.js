/**
 * @marqeta/helloworld
 * A simple hello world module for testing npm publishing
 */

/**
 * Returns a greeting message
 * @param {string} name - The name to greet (default: "World")
 * @returns {string} The greeting message
 */
export function greet(name = "World") {
  return `Hello, ${name}!`;
}

/**
 * Returns the current time greeting
 * @returns {string} Time-based greeting
 */
export function greetWithTime() {
  const hour = new Date().getHours();
  let timeGreeting;

  if (hour < 12) {
    timeGreeting = "Good morning";
  } else if (hour < 18) {
    timeGreeting = "Good afternoon";
  } else {
    timeGreeting = "Good evening";
  }

  return `${timeGreeting}, World!`;
}

/**
 * Returns package information
 * @returns {object} Package info
 */
export function getInfo() {
  return {
    name: "@marqeta/helloworld",
    version: "1.0.0",
    description: "A simple hello world package"
  };
}

// Default export
export default {
  greet,
  greetWithTime,
  getInfo
};

// If run directly, print greeting
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greet());
  console.log(greetWithTime());
  console.log("Package info:", getInfo());
}