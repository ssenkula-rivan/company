import { Html, Head, Main, NextScript } from 'next/document'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Document() {
  useEffect(() => {
    // Ensure favicon stays centered during loading
    const link = document.createElement('link')
    link.rel = 'icon'
    link.href = '/LOGO.png'
    link.type = 'image/png'
    document.head.appendChild(link)
  }, [])

  return (
    <Html lang="en">
      <Head>
        <title>AMODZ PROPERTIES LIMITED</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
