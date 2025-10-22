import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Radiant',
    default: 'Radiant - Close every deal',
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
          title="Radiant Blog"
        />
      </head>
      <body className="bg-gray-50 text-gray-950 antialiased">
        {children}
      </body>
    </html>
  )
}
