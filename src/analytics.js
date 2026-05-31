const events = require("./events");

console.log("=================================");
console.log("GA4 + GTM Measurement Plan");
console.log("=================================\n");

events.forEach((event) => {
  console.log(`Event Name: ${event.name}`);
  console.log(`Parameters: ${event.parameters.join(", ")}`);
  console.log("---------------------------------");
});

console.log("\nAnalytics configuration loaded.");
