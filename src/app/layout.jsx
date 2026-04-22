import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Poaster',
    default: 'Poaster - Grow your Substack with AI',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/blog/feed.xml"
          title="Poaster Blog"
        />
      </head>
      <body className="bg-gray-50 text-gray-950 antialiased">
        {children}
      </body>
    </html>
  )
}
