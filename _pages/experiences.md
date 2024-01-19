---
layout: page
permalink: /experiences/
title: experiences
description: past research and industry experiences
years: [2024,2023,2021,2020,2019]
nav: true
nav_order: 0
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f experiences -q @*[year={{y}}]* %}
{% endfor %}

</div>
