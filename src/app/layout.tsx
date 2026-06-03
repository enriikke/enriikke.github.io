import type { Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://imenrique.com'),
  title: {
    template: '%s - Enrique Gonzalez',
    default: 'Enrique Gonzalez - Software engineer',
  },
  description:
    'Personal website of Enrique Gonzalez, a software engineer building web applications, developer tools, and AI-powered product experiences.',
  openGraph: {
    title: 'Enrique Gonzalez - Software engineer',
    description:
      'Personal website of Enrique Gonzalez, a software engineer building web applications, developer tools, and AI-powered product experiences.',
    url: 'https://imenrique.com',
    siteName: 'Enrique Gonzalez',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
