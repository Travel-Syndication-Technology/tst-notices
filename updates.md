---
layout: page
title: Updates
permalink: /updates/
summary: Latest releases, incidents, hotfixes, and configuration changes from the engineering team.
hide_header: true
---

<section class="card hero">
  <p class="eyebrow">Engineering updates</p>
  <h2 class="page-title">Recent releases, incidents, and changes</h2>
  <p class="summary">Stay current on the latest releases, incidents, hotfixes, and configuration changes with concise, scannable updates.</p>
  <div class="meta-row">
    <span class="badge">Timezone: {{ site.timezone | default: "UTC" }}</span>
  </div>
</section>

{% assign items = site.updates | where: "status", "active" | sort: "timestamp" | reverse %}

<ul class="updates-grid">
{% for item in items %}
  {% assign update_type = item.type | default: 'update' | downcase %}
  <li>
    <article class="card update-card type-{{ update_type }}">
      <div class="post-meta-bar">
        <span class="pill {{ update_type }}">{{ update_type }}</span>
        <span class="meta">{{ item.timestamp | date: "%b %d, %Y" }} • {{ item.timestamp | date: "%H:%M %Z" }}</span>
      </div>
      <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
      <div class="meta-row">
        {% if item.env %}<span class="badge">{{ item.env | capitalize }}</span>{% endif %}
        {% if item.status_label %}<span class="badge subtle">{{ item.status_label }}</span>{% endif %}
        {% if item.incident_status %}<span class="badge soft">{{ item.incident_status }}</span>{% endif %}
      </div>
      <p class="summary">{{ item.summary | default: item.excerpt | strip_html | truncate: 200 }}</p>
      {% if item.services %}
      <ul class="service-tags">
        {% for service in item.services %}
        <li>{{ service }}</li>
        {% endfor %}
      </ul>
      {% endif %}
      <div class="update-actions">
        <a href="{{ item.url | relative_url }}">Read update →</a>
        {% if item.release_url %}<a href="{{ item.release_url | relative_url }}">Release details →</a>{% endif %}
      </div>
    </article>
  </li>
{% endfor %}
</ul>
