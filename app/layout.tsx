import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'منصة "شِعب" المرئية',
  description: 'الموقع الرسمي لمنصة شِعب المرئية ومحمد شعبان — صانع محتوى، مصور ومحرر فيديو.',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1111111111-WvjNhw5eYc7vCt0URwhKM03LW8gqaC.png',
        type: 'image/png',
      },
    ],
    shortcut: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1111111111-WvjNhw5eYc7vCt0URwhKM03LW8gqaC.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1111111111-WvjNhw5eYc7vCt0URwhKM03LW8gqaC.png',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body><script dangerouslySetInnerHTML={{ __html: `(() => { const cleanUrl = window.location.pathname + window.location.search; if (window.location.hash) window.history.replaceState(null, '', cleanUrl); window.scrollTo(0, 0); })()` }} />{children}</body></html>
}
