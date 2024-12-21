import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { AppSidebar } from '@/components/app-sidebar'
import { Toaster } from '@/components/ui/toaster'
import Link from 'next/link'
import { CopyButton } from '@/components/copy-button'
import { useToast } from '@/components/ui/use-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sunset Wiki',
  description: 'Документация сервера Minecraft Sunset',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <AppSidebar />
            <div className="flex-1 transition-all duration-300 ease-in-out">
              <main className="container mx-auto p-8">{children}</main>
              <footer className="container mx-auto py-8 text-center border-t">
                <div className="flex justify-center items-center space-x-2 mb-4">
                  <span>IP: sunset.gomc.fun | sunset.servop.ru</span>
                  <CopyButton 
                    value="sunset.gomc.fun"
                    onCopy={() => {
                      toast({
                        title: "IP скопирован",
                        description: "IP-адрес сервера скопирован в буфер обмена",
                      })
                    }}
                  />
                </div>
                <p className="mb-4">
                  <Link href="/ip" className="text-primary hover:underline">
                    Онлайн-карта игроков
                  </Link>
                </p>
                <p>
                  Сайт был создан{' '}
                  <Link href="https://t.me/Catonis_dev" className="text-primary hover:underline">
                    catonis_dev
                  </Link>
                </p>
              </footer>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

