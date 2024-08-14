import { Octokit } from '@octokit/rest'
import matter from 'gray-matter'

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
})

/**
 * Repositories
 */

type Repo = {
  nameWithOwner: string
  stargazerCount: number
  description: string
}

export async function getRepos(repos: Array<string>): Promise<Array<Repo>> {
  const query = `{
    ${repos
      .map((repo, index) => {
        const [owner, name] = repo.split('/')

        return `repo${index}: repository(owner: "${owner}", name: "${name}") { 
          nameWithOwner 
          stargazerCount 
          description 
        }`
      })
      .join('\n')}
  }`

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  })

  const json = await res.json()

  const data = Object.keys(json.data).map((key) => json.data[key])

  return data
}

/**
 * Notes from Gist
 * https://gist.github.com/mxstbr/29f4eebada6196debb1b085a844e49aa
 */

const NOTES_GIST_ID = '29f4eebada6196debb1b085a844e49aa'

export async function getGistFiles() {
  const response = await octokit.gists.get({
    gist_id: NOTES_GIST_ID,
  })

  const { files } = response.data

  if (!files || response.status !== 200) {
    throw new Error('Could not get gist.')
  }

  return files
}

type Frontmatter = {
  title: string
  summary: string
  slug: string
  publishedAt: string
  updatedAt?: string
}

type Note = {
  frontmatter: Frontmatter
  content: string
}

export async function getNotes(): Promise<Array<Note>> {
  const files = await getGistFiles()

  // @ts-ignore
  return Object.keys(files)
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      if (!files[filename] || !files[filename].content) throw new Error('wtf')

      const { data, content } = matter(files[filename].content)
      return {
        frontmatter: {
          ...data,
          slug: filename.replace('.md', ''),
        },
        content,
      }
    })
}

export async function getNote(
  slug,
): Promise<{ content: string; frontmatter: Frontmatter } | null> {
  const files = await getGistFiles()
  const file = files[slug + '.md']
  if (!file || !file.content) return null

  const { data, content } = matter(file.content)

  return {
    // @ts-ignore
    frontmatter: {
      ...data,
      slug,
    },
    content,
  }
}
