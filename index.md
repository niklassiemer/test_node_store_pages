---
title: pyiron-node-store Repositories mit Properties
---
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ page.title }}</title>
  <link rel="stylesheet" href="/test_node_store_pages/assets/css/style.css">
</head>

<h1>{{ page.title }}</h1>

<table>
<thead>
  <tr>
    <th>Name</th>
    <th>URL</th>
    {% assign first_repo_props = site.data.repos_with_properties[0].custom_properties %}
    {% if first_repo_props %}
      {% for pair in first_repo_props %}
        <th>{{ pair[0] | capitalize }}</th>
      {% endfor %}
    {% endif %}
  </tr>
</thead>
<tbody>
  {% for repo in site.data.repos_with_properties %}
    <tr>
      <td>{{ repo.name }}</td>
      <td><a href="{{ repo.html_url }}">{{ repo.html_url }}</a></td>
      {% assign current_repo_props = repo.custom_properties %}
      {% assign first_repo_props = site.data.repos_with_properties[0].custom_properties %}
      {% if first_repo_props %}
        {% for header_pair in first_repo_props %}
          {% assign header_key = header_pair[0] %}
          <td>
            {% if current_repo_props and current_repo_props[header_key] %}
              {{ current_repo_props[header_key] }}
            {% else %}
              -
            {% endif %}
          </td>
        {% endfor %}
      {% endif %}
    </tr>
  {% endfor %}
</tbody>
</table>

<script src="/test_node_store_pages/assets/js/script.js"></script>
