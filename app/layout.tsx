import { Analytics } from "@vercel/analytics/react"
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils'
import './globals.css'
// import VisitCounter from '@/components/visit-counter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mayank Vyas - Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if ('serviceWorker' in navigator) navigator.serviceWorker.getRegistrations().then(r => r.forEach(sw => sw.unregister()));` }} />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
          {/* <VisitCounter /> */}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

