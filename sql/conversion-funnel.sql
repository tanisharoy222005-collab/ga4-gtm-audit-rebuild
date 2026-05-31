WITH funnel AS (
  SELECT
    user_pseudo_id,

    MAX(CASE WHEN event_name = 'page_view' THEN 1 ELSE 0 END) AS viewed_page,

    MAX(CASE WHEN event_name = 'cta_click' THEN 1 ELSE 0 END) AS clicked_cta,

    MAX(CASE WHEN event_name = 'form_start' THEN 1 ELSE 0 END) AS started_form,

    MAX(CASE WHEN event_name = 'generate_lead' THEN 1 ELSE 0 END) AS generated_lead

  FROM `project.analytics.events_*`
  GROUP BY user_pseudo_id
)

SELECT
  COUNTIF(viewed_page = 1) AS page_views,
  COUNTIF(clicked_cta = 1) AS cta_clicks,
  COUNTIF(started_form = 1) AS form_starts,
  COUNTIF(generated_lead = 1) AS leads
FROM funnel;
