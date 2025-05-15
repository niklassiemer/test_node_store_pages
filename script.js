fetch('https://api.github.com/orgs/pyiron-node-store/repos')
  .then(response => response.json())
  .then(data => {
    const repoListDiv = document.getElementById('repo-list');
    if (repoListDiv) {
      let html = '<ul>';
      data.forEach(repo => {
        html += `<li><a href="<span class="math-inline">\{repo\.html\_url\}"\></span>{repo.name}</a></li>`;
      });
      html += '</ul>';
      repoListDiv.innerHTML = html;
    } else {
      console.error('Das Element mit der ID "repo-list" wurde nicht gefunden.');
    }
  })
  .catch(error => console.error('Fehler beim Abrufen der Repos:', error));
