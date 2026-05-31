import pandas as pd

events = pd.DataFrame(
    {
        "event_name": [
            "page_view",
            "cta_click",
            "form_start",
            "generate_lead"
        ],
        "event_count": [
            1500,
            340,
            110,
            52
        ]
    }
)

events["conversion_rate"] = (
    events["event_count"] / events["event_count"].max()
)

print("\nGA4 Event Analysis\n")
print(events)

print("\nTop Event:")
print(events.sort_values(
    by="event_count",
    ascending=False
).head(1))
