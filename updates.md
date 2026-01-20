---
layout: page
title: Updates
permalink: /updates/
---

<section class="card">
  Travel Syndication Technology releases, hotfixes, configuration changes, and incident notes.
  <p class="muted" style="margin: 0.35rem 0 0; font-size: 0.9rem;"><a href="{{ '/updates.xml' | relative_url }}">Subscribe to updates feed</a></p>
</section>

{% assign items = site.updates | where: "status", "active" | sort: "timestamp" | reverse %}

<ul class="updates-grid">
{% for item in items %}
  <li>
    <article class="card update-card">
      <div class="meta-row">
        <span>{{ item.timestamp | date: "%b %d, %Y" }} • {{ item.timestamp | date: "%H:%M %Z" }}</span>
      </div>
      <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
      <div class="meta-row">
        <span class="pill">{{ item.type | default: "update" }}</span>
        {% if item.env %}<span class="badge">{{ item.env }}</span>{% endif %}
        {% if item.severity %}<span class="badge">Severity: {{ item.severity }}</span>{% endif %}
        {% if item.incident_status %}<span class="badge">Status: {{ item.incident_status }}</span>{% endif %}
      </div>
      <p class="summary">{{ item.summary | default: item.excerpt | strip_html | truncate: 220 }}</p>
      {% if item.release_url %}
      <p class="summary"><strong>Release notes:</strong> <a href="{{ item.release_url | relative_url }}">View release details</a></p>
      {% endif %}
      <a href="{{ item.url | relative_url }}">Read full update →</a>
    </article>
  </li>
{% endfor %}
</ul>
