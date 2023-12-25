import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NinjaWars: Live by the Shuriken',
  description: 'NinjaWars: Live by the Shuriken, a text-based RPG',
}

interface withChildren {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: withChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
