const events = require("./events");

console.log("=================================");
console.log("Running Analytics QA Checks");
console.log("=================================\n");

let passed = 0;

events.forEach((event) => {
  if (event.parameters.length > 0) {
    console.log(`✅ ${event.name} validated`);
    passed++;
  } else {
    console.log(`❌ ${event.name} missing parameters`);
  }
});

console.log("\n=================================");
console.log(`Checks Passed: ${passed}/${events.length}`);
console.log("QA Complete");
console.log("=================================");
