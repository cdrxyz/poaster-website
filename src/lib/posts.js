import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        ...matterResult.data,
        content: matterResult.content,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)) // Sort by date descending

  return allPostsData
}

export function getPosts(startIndex, endIndex, category) {
  let posts = getAllPosts()

  if (category) {
    posts = posts.filter((post) => post.categories?.includes(category))
  }

  return posts.slice(startIndex, endIndex)
}

export function getPostsCount(category) {
  let posts = getAllPosts()

  if (category) {
    posts = posts.filter((post) => post.categories?.includes(category))
  }

  return posts.length
}

export function getFeaturedPosts(quantity) {
  const posts = getAllPosts()
  return posts.filter((post) => post.featured).slice(0, quantity)
}

export function getCategories() {
  const posts = getAllPosts()
  const categories = new Set()

  posts.forEach((post) => {
    if (post.categories) {
      post.categories.forEach((cat) => categories.add(cat))
    }
  })

  return Array.from(categories).map((name) => ({ name, slug: name }))
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(remarkHtml)
    .use(remarkGfm)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  }
}
