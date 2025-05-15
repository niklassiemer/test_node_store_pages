---
title: pyiron-node-store Repositories mit Properties
---

<h1>{{ page.title }}</h1>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>URL</th>
      {% assign first_repo_props = site.data.repos_with_properties[0].custom_properties %}
      {% if first_repo_props %}
        {% for key in first_repo_props %}
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
        {% assign current_repo_props = repo.custom_properties %}
        {% assign first_repo_props = site.data.repos_with_properties[0].custom_properties %}
        {% if first_repo_props %}
          {% for key in first_repo_props %}
            <td>
              {% if current_repo_props and current_repo_props[key] %}
                {{ current_repo_props[key] }}
              {% else %}
                -
              {% endif %}
            </td>
          {% endfor %}
        {% endif %}
      </tr>
    {% endfor %}
  {% for repo in site.data.repos_with_properties %}
    <tr>
      <td>{{ repo.name }}</td>
      <td><a href="{{ repo.html_url }}">{{ repo.html_url }}</a></td>
      {% assign current_repo_props = repo.custom_properties %}
      {% assign first_repo_props = site.data.repos_with_properties[0].custom_properties %}
      {% if first_repo_props %}
        {% for key in first_repo_props %}
          <td>
            DEBUG: Key={{ key }}, Value={{ current_repo_props[key] }}
          </td>
        {% endfor %}
      {% endif %}
    </tr>
  {% endfor %}
  </tbody>
</table>

<script src="/test_node_store_pages/assets/js/script.js"></script>
