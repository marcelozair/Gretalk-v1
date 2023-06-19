import './globals.css'
import NavBar from './components/layout/NavBar/NavBar'
import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gretalks',
  description: 'This is the app to pulic post about programing, just like personal project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
