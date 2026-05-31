# GA4 BigQuery Export Schema

## Events Table

Dataset:

analytics.events_*

---

## Core Fields

| Field | Description |
|---------|---------|
| event_date | Event date |
| event_timestamp | Event timestamp |
| event_name | Event name |
| user_pseudo_id | Anonymous user identifier |

---

## Event Parameters

| Parameter | Description |
|------------|------------|
| page_location | URL |
| page_title | Page title |
| traffic_source | Source of traffic |
| source | Acquisition source |
| medium | Acquisition medium |
| campaign | Campaign name |

---

## Example Query

```sql
SELECT
  event_name,
  COUNT(*) AS event_count
FROM analytics.events_*
GROUP BY event_name
ORDER BY event_count DESC;
```

---

## Common Analysis

- Session trends
- Traffic source analysis
- Funnel analysis
- Event frequency analysis
- Lead generation reporting
