window.dataLayer = window.dataLayer || [];

/**
 * Track CTA Click
 */
function trackCTAClick(buttonText) {
  dataLayer.push({
    event: "cta_click",
    cta_text: buttonText,
    page_location: window.location.pathname,
    traffic_source: "organic"
  });

  console.log("cta_click event pushed");
}

/**
 * Track Form Start
 */
function trackFormStart(formName) {
  dataLayer.push({
    event: "form_start",
    form_name: formName,
    page_location: window.location.pathname
  });

  console.log("form_start event pushed");
}

/**
 * Track Lead Generation
 */
function trackLeadSubmission(formName) {
  dataLayer.push({
    event: "generate_lead",
    form_name: formName,
    source: "website",
    medium: "organic"
  });

  console.log("generate_lead event pushed");
}

/**
 * Example Usage
 */

trackCTAClick("Get Started");

trackFormStart("Contact Form");

trackLeadSubmission("Contact Form");

/**
 * Display current dataLayer
 */

console.log("Current dataLayer:");
console.log(dataLayer);
