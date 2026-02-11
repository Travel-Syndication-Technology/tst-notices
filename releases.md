---
layout: page
title: Releases
permalink: /releases/
summary: Production releases and milestones from TST Engineering.
hide_header: true
---

<section class="card hero">
  <p class="eyebrow">Releases</p>
  <h2 class="page-title">Production-ready builds and milestones</h2>
  <p class="summary">Browse the latest engineering releases with quick links to full notes and related updates.</p>
</section>

{% assign releases = site.posts | where: "category", "release" | where: "status", "active" | sort: "date" | reverse %}

<div class="releases-grid">
{% for post in releases %}
  {% assign release_type = post.category | default: 'release' | downcase %}
  <article class="card release-card type-{{ release_type }}">
    <div class="post-meta-bar">
      <span class="pill {{ release_type }}">Release</span>
      <span class="meta">{{ post.date | date: "%b %d, %Y" }}</span>
    </div>
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="summary">{{ post.summary | default: post.excerpt | strip_html | truncate: 210 }}</p>
    <div class="card-actions">
      <a href="{{ post.url | relative_url }}">Read release →</a>
    </div>
  </article>
{% endfor %}
</div>
