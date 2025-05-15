document.addEventListener('DOMContentLoaded', function() {
  const repoListDiv = document.getElementById('repo-list');
  if (repoListDiv) {
    fetch('https://api.github.com/orgs/pyiron-node-store/repos')
      .then(response => {
        if (!response.ok) {
          console.error(`HTTP error! status: ${response.status}`);
          repoListDiv.innerHTML = '<p>Fehler beim Laden der Repositories.</p>';
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        let html = '<ul>';
        data.forEach(repo => {
          html += `<li><a href="${repo.html_url}">${repo.name}</a></li>`;
        });
        html += '</ul>';
        repoListDiv.innerHTML = html;
      })
      .catch(error => {
        console.error('Fetch error:', error);
        repoListDiv.innerHTML = '<p>Fehler beim Laden der Repositories.</p>';
      });
  } else {
    console.error('Das Element mit der ID "repo-list" wurde nicht gefunden.');
  }
});
