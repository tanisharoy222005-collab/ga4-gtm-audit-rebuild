const events = [
  {
    name: "page_view",
    parameters: ["page_location", "page_title"]
  },
  {
    name: "cta_click",
    parameters: ["cta_text", "traffic_source"]
  },
  {
    name: "generate_lead",
    parameters: ["form_name", "source", "medium"]
  }
];

module.exports = events;
