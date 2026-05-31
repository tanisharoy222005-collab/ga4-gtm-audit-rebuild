SELECT
  event_date,
  COUNT(DISTINCT user_pseudo_id) AS users,
  COUNT(*) AS total_events
FROM `project.analytics.events_*`
GROUP BY event_date
ORDER BY event_date DESC;
