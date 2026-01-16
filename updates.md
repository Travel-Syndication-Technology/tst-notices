---
layout: page
title: Updates
permalink: /updates/
---

<section class="card">
  <h1>{{ page.title }}</h1>
  <p class="muted">TST (Travel Syndication Technology) releases, hotfixes, configuration changes, and incident notes.</p>
</section>

{% assign items = site.updates | sort: "timestamp" | reverse %}
<ul class="updates-grid">
{% for item in items %}
  <li>
    <article class="card update-card">
      <div class="meta-row">
        <span>{{ item.timestamp | date: "%b %d, %Y" }} • {{ item.timestamp | date: "%H:%M %Z" }}</span>
      </div>
      <h3><a href="{{ item.url }}">{{ item.title }}</a></h3>
      <div class="meta-row">
        <span class="pill">{{ item.type | default: "update" }}</span>
        {% if item.env %}<span class="badge">{{ item.env }}</span>{% endif %}
        {% if item.severity %}<span class="badge">Severity: {{ item.severity }}</span>{% endif %}
        {% if item.status %}<span class="badge">Status: {{ item.status }}</span>{% endif %}
      </div>
      <p class="summary">{{ item.summary | default: item.excerpt | strip_html | truncate: 220 }}</p>
      <a href="{{ item.url }}">Read full update →</a>
    </article>
  </li>
{% endfor %}
</ul>
