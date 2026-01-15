---
layout: page
title: Updates
permalink: /updates/
---

<div class="card" style="margin-bottom: 18px;">
  <h1>{{ page.title }}</h1>
  <p class="muted">Latest releases, hotfixes, configs, and incident notes.</p>
</div>

{% assign items = site.updates | sort: "timestamp" | reverse %}
<ul class="list-grid">
{% for item in items %}
  <li>
    <div class="card">
      <div class="muted" style="font-weight: 600; letter-spacing: 0.3px;">{{ item.timestamp | date: "%b %d, %Y" }} • {{ item.timestamp | date: "%H:%M %Z" }}</div>
      <h3 style="margin-top: 8px; margin-bottom: 6px;"><a href="{{ item.url }}">{{ item.title }}</a></h3>
      <div class="muted" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
        <span class="pill">{{ item.type | default: "update" }}</span>
        {% if item.env %}<span class="badge">{{ item.env }}</span>{% endif %}
        {% if item.severity %}<span class="badge">Severity: {{ item.severity }}</span>{% endif %}
        {% if item.status %}<span class="badge">Status: {{ item.status }}</span>{% endif %}
      </div>
      <p class="summary">{{ item.summary | default: item.excerpt | strip_html | truncate: 220 }}</p>
      <p style="margin-top: 12px;"><a href="{{ item.url }}">Read full update →</a></p>
    </div>
  </li>
{% endfor %}
</ul>
