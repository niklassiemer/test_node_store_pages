---
title: pyiron-node-store Repositories mit Properties
---

<h1>{{ page.title }}</h1>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>URL</th>
      {% if site.data.repos_with_properties.size > 0 and site.data.repos_with_properties[0].custom_properties %}
        {% for key in site.data.repos_with_properties[0].custom_properties %}
          <th>{{ key | capitalize }}</th>
        {% endfor %}
      {% endif %}
    </tr>
  </thead>
  <tbody>
    {% for repo in site.data.repos_with_properties %}
      <tr>
        <td>{{ repo.name }}</td>
        <td><a href="{{ repo.html_url }}">{{ repo.html_url }}</a></td>
        {% if repo.custom_properties %}
          {% for value in repo.custom_properties %}
            <td>{{ value }}</td>
          {% endfor %}
        {% else %}
          {% if site.data.repos_with_properties.size > 0 and site.data.repos_with_properties[0].custom_properties %}
            {% for key in site.data.repos_with_properties[0].custom_properties %}
              <td></td>
            {% endfor %}
          {% endif %}
        {% endif %}
      </tr>
    {% endfor %}
  </tbody>
</table>

<script src="/test_node_store_pages/assets/js/script.js"></script>
