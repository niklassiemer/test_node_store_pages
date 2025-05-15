import requests
import json
import os

GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")
ORG = "pyiron-node-store"

def get_repos(org):
    headers = {}
    if GITHUB_TOKEN:
        headers['Authorization'] = f'Bearer {GITHUB_TOKEN}'
    url = f"https://api.github.com/orgs/{org}/repos"
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    return response.json()

def get_custom_properties(repo_url):
    headers = {}
    if GITHUB_TOKEN:
        headers['Authorization'] = f'Bearer {GITHUB_TOKEN}'
    custom_properties_url = f"{repo_url}/properties/values"
    try:
        response = requests.get(custom_properties_url, headers=headers)
        response.raise_for_status()
        properties = {}
        for prop in response.json():
            properties[prop["property_name"]] = prop["value"]
        return properties
    except requests.exceptions.HTTPError as e:
        if e.response.status_code == 404:
            return {} # Keine Custom Properties gefunden
        else:
            print(f"Fehler beim Abrufen der Custom Properties für {repo_url}: {e}")
            return None

if __name__ == "__main__":
    all_repos_data = []
    repos = get_repos(ORG)
    for repo in repos:
        repo_data = {
            "name": repo["name"],
            "html_url": repo["html_url"],
            "custom_properties": get_custom_properties(repo["url"]) or {}
        }
        all_repos_data.append(repo_data)

    # Speichere die Daten im _data-Ordner als repos_with_properties.json
    data_folder = "_data"
    os.makedirs(data_folder, exist_ok=True)
    output_file = os.path.join(data_folder, "repos_with_properties.json")
    with open(output_file, "w") as f:
        json.dump(all_repos_data, f, indent=2)

    print(f"Daten mit Custom Properties erfolgreich in {output_file} gespeichert.")
    
    with open(output_file, "r") as f:
        print(json.dumps(json.load(f)))

