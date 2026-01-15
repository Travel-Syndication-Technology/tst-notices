---
layout: page
title: Updates
permalink: /updates/
---

{% assign items = site.updates | sort: "timestamp" | reverse %}
{% for item in items %}
### [{{ item.title }}]({{ item.url }})
- **When:** {{ item.timestamp | date: "%Y-%m-%d %H:%M %Z" }}
- **Type:** {{ item.type | default: "update" }}
{% if item.env %}- **Environment:** {{ item.env }}{% endif %}
- **Summary:** {{ item.summary | default: item.excerpt | strip_html | truncate: 220 }}
{% endfor %}
