---
layout: page
title: Releases
permalink: /releases/
---

{% assign releases = site.posts | where: "category", "release" | where: "status", "active" %}
<p class="muted" style="margin-bottom: 0.5rem; font-size: 0.9rem;"><a href="{{ '/releases.xml' | relative_url }}">Subscribe to releases feed</a></p>
{% for post in releases %}
### [{{ post.title }}]({{ post.url | relative_url }})
- **When:** {{ post.date | date: "%Y-%m-%d" }}
{% if post.version %}- **Version:** {{ post.version }}{% endif %}
- **Summary:** {{ post.summary | default: post.excerpt | strip_html | truncate: 220 }}
{% endfor %}
