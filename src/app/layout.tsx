import { Geist, Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider, I18nProvider } from '@/providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata = {
  title: 'Rakudash | 高パフォーマンスな運用のための統合管理。',
  description:
    'Rakudashは、分散したデータを一元化し、採用パイプラインを最適化して、管理業務を自動化します。',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background text-foreground min-h-screen font-sans antialiased',
          inter.variable,
          geistSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
