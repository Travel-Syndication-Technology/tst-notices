---
layout: page
title: Releases
permalink: /releases/
---

{% assign releases = site.posts | where: "category", "release" | where: "status", "active" %}
{% for post in releases %}
### [{{ post.title }}]({{ post.url | relative_url }})
- **When:** {{ post.date | date: "%Y-%m-%d" }}
{% if post.version %}- **Version:** {{ post.version }}{% endif %}
- **Summary:** {{ post.summary | default: post.excerpt | strip_html | truncate: 220 }}
{% endfor %}
