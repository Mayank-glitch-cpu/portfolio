import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils'
import './globals.css'
import VisitCounter from '@/components/visit-counter'

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
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <VisitCounter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

