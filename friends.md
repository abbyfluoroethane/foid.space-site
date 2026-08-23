---
layout: default
title: friends
permalink: /friends/
---

<div class="card-grid">
{% for friend in site.data.friends %}
  {% include friend-card.html friend=friend %}
{% endfor %}
</div>
