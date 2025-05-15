ddEventListener('DOMContentLoaded', function() {
  const repoListDiv = document.getElementById('repo-list');
  if (repoListDiv) {
    fetch('https://api.github.com/orgs/pyiron-node-store/repos')
      .then(response => response.json())
      .then(data => {
        let html = '<ul>';
        data.forEach(repo => {
          html += `<li><a href="<span class="math-inline">\{repo\.html\_url\}"\></span>{repo.name}</a></li>`;
        });
        html += '</ul>';
        repoListDiv.innerHTML = html;
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der Repos:', error);
        repoListDiv.innerHTML = '<p>Fehler beim Laden der Repositories.</p>';
      });
  } else {
    console.error('Das Element mit der ID "repo-list" wurde nicht gefunden.');
  }
});
