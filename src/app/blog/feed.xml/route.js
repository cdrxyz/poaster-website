import { getAllPosts } from '@/lib/posts'
import { Feed } from 'feed'
import assert from 'node:assert'

export const dynamic = "force-static"

export async function GET() {
  let siteUrl = 'https://poaster.app'

  let feed = new Feed({
    title: 'The Radiant Blog',
    description:
      'Stay informed with product updates, company news, and insights on how to sell smarter at your company.',
    author: {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
    },
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let posts = await getAllPosts()

  posts.forEach((post) => {
    try {
      assert(typeof post.title === 'string')
      assert(typeof post.slug === 'string')
      assert(typeof post.excerpt === 'string')
      assert(typeof post.date === 'string')
    } catch (error) {
      console.log('Post is missing required fields for RSS feed:', post, error)
      return
    }

    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `${siteUrl}/blog/${post.slug}`,
      content: post.excerpt,
      image: post.mainImage
        ? post.mainImage.replaceAll('&', '&amp;')
        : undefined,
      date: new Date(post.date),
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
