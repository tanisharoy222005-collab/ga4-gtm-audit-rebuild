# Measurement Specification

## Project Overview

This document defines the analytics implementation for the GA4 + GTM Audit Rebuild project. It serves as the source of truth for event tracking, parameter definitions, trigger logic, and reporting requirements.

---

# Page Taxonomy

| Page Type | Example |
|------------|------------|
| Homepage | / |
| Services | /services |
| Case Study | /case-study |
| Contact | /contact |

---

# Event Taxonomy

## page_view

### Purpose

Track page visits across the website.

### Parameters

| Parameter | Type |
|------------|------------|
| page_location | string |
| page_title | string |
| page_referrer | string |

### Trigger

Page Load

---

## cta_click

### Purpose

Measure engagement with primary call-to-action elements.

### Parameters

| Parameter | Type |
|------------|------------|
| cta_text | string |
| page_location | string |
| traffic_source | string |

### Trigger

Click Element contains:

Get Started

---

## form_start

### Purpose

Measure intent to complete a lead form.

### Parameters

| Parameter | Type |
|------------|------------|
| form_name | string |
| page_location | string |

### Trigger

First interaction with form

---

## generate_lead

### Purpose

Measure successful lead generation.

### Parameters

| Parameter | Type |
|------------|------------|
| form_name | string |
| source | string |
| medium | string |

### Trigger

Successful form submission

---

# Custom Dimensions

| Dimension | Scope |
|------------|------------|
| traffic_source | Event |
| landing_page_type | Event |
| campaign_name | Event |
| user_type | User |

---

# GTM Configuration

## Tags

- GA4 Configuration Tag
- page_view Event Tag
- cta_click Event Tag
- form_start Event Tag
- generate_lead Event Tag

---

## Variables

- Click Text
- Page URL
- Page Path
- Referrer
- Traffic Source

---

## Data Layer Example

```javascript
dataLayer.push({
  event: "generate_lead",
  form_name: "contact_form",
  source: "organic",
  medium: "website"
});
```

# QA Requirements

## Validation Checklist

- Event fires correctly
- Parameters populated correctly
- No duplicate events
- GTM Preview validation completed
- GA4 DebugView validation completed

---

# Expected Business Outcomes

- Improved attribution accuracy
- Cleaner event naming conventions
- Consistent reporting structure
- Increased confidence in conversion reporting
