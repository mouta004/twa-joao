import { writeFile } from 'fs/promises'

const res = await fetch(
  'https://api.github.com/repos/nodejs/node',
)
if (!res.ok) throw new Error(`HTTP ${res.status}`)
const repo = await res.json()
console.log(repo.name, repo.stargazers_count)

const dados = {
  name: repo.name,
  full_name: repo.full_name,
  description: repo.description,
  stargazers_count: repo.stargazers_count,
  forks_count: repo.forks_count,
  language: repo.language,
  html_url: repo.html_url,
}
await writeFile('repo.json', JSON.stringify(dados, null, 2) + '\n')
console.log('Guardado em repo.json')
