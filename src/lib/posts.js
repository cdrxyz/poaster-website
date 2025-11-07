import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeAddClasses from 'rehype-add-classes'
import rehypeStringify from 'rehype-stringify'

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
  let contentHtml = processedContent.toString()

  // Add Tailwind classes to HTML elements
  const classes = {
    h1: 'text-4xl font-medium tracking-tight text-gray-950 mt-8 mb-4',
    h2: 'text-2xl font-medium tracking-tight text-gray-950 mt-8 mb-4',
    h3: 'text-xl font-medium tracking-tight text-gray-950 mt-6 mb-3',
    h4: 'text-lg font-medium tracking-tight text-gray-950 mt-6 mb-3',
    h5: 'text-base font-medium tracking-tight text-gray-950 mt-4 mb-2',
    h6: 'text-sm font-medium tracking-tight text-gray-950 mt-4 mb-2',
    p: 'text-sm/6 text-gray-600 mb-4',
    ul: 'list-disc list-inside text-sm/6 text-gray-600 mb-4',
    ol: 'list-decimal list-inside text-sm/6 text-gray-600 mb-4',
    li: 'mb-2',
    blockquote: 'border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4',
    a: 'text-indigo-600 hover:text-indigo-800 underline',
    img: 'max-w-full h-auto rounded-lg shadow-md',
    strong: 'font-semibold text-gray-900',
    em: 'italic text-gray-700',
  }

  const processedHtml = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeAddClasses, classes)
    .use(rehypeStringify)
    .process(contentHtml)

  contentHtml = processedHtml.toString()

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  }
}
