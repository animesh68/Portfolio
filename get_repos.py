import urllib.request
import json

try:
    req = urllib.request.Request(
        'https://api.github.com/users/animesh68/repos?per_page=100',
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req) as resp:
        repos = json.loads(resp.read().decode())
        print(f"Total repos: {len(repos)}")
        with open("github_repos.json", "w", encoding="utf-8") as f:
            json.dump(repos, f, indent=2)
        for r in repos:
            print(f"- {r['name']}: {r['html_url']} (fork: {r['fork']})")
except Exception as e:
    print("Error:", e)
