SELECT
  event_name,
  COUNT(*) AS event_count
FROM `project.analytics.events_*`
GROUP BY event_name
ORDER BY event_count DESC;
