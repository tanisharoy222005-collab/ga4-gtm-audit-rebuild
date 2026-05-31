# Analytics QA Validation Checklist

## GTM Validation

### Tags

- [x] GA4 Configuration Tag firing
- [x] page_view event tag firing
- [x] cta_click event tag firing
- [x] form_start event tag firing
- [x] generate_lead event tag firing

### Triggers

- [x] Homepage CTA click trigger
- [x] Contact form start trigger
- [x] Contact form submit trigger

### Variables

- [x] Click Text
- [x] Page URL
- [x] Page Path
- [x] Referrer
- [x] Traffic Source

---

## GA4 Validation

### Event Validation

- [x] page_view received
- [x] cta_click received
- [x] form_start received
- [x] generate_lead received

### Parameter Validation

- [x] page_location
- [x] page_title
- [x] cta_text
- [x] form_name
- [x] source
- [x] medium

---

## Data Quality Checks

### Duplicate Event Check

- [x] No duplicate page_view events
- [x] No duplicate generate_lead events

### Naming Convention Check

- [x] snake_case naming used
- [x] No legacy UA event names present

---

## Debug Validation

- [x] GTM Preview completed
- [x] GA4 DebugView verified
- [x] Test conversions recorded

---

## Sign-off

QA Status: PASSED

Validation Date: June 2026
