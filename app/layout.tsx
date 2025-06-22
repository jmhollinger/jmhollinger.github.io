import type { Metadata } from 'next'
import { Saira_Extra_Condensed, Inter } from 'next/font/google'
import './globals.css'

const saira = Saira_Extra_Condensed({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-saira',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Jonathan Hollinger',
  description: 'Experienced data engineer and architect with a track record of building scalable data platforms to power data-driven decision-making.',
  authors: [{ name: 'Jonathan Hollinger' }],
  keywords: ['data engineer', 'data architect', 'analytics', 'SQL', 'Python', 'AWS'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${saira.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous"></script>
      </head>
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
} 