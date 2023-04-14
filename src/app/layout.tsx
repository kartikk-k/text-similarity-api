import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Providers from '@/components/Providers'
import Navbar from '@/components/Navbar'
import Toaster2 from '@/components/ui/Toaster'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn
      ("bg-white text-slate-900 antialiased")
    }>
      <body className='min-h-screen antialiased text-gray-800 dark:text-white bg-slate-50 dark:bg-gray-700'>
        <Providers>
          {children}
          <Toaster2 />

          {/* @ts-expect-error Server Component */}
          <Navbar />
        </Providers>


        {/* to allow extra space for mobile devices */}
        <div className='h-40 md:hidden' />
      </body>
    </html>
  )
}
