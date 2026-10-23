import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'شِعب | محمد شعبان',
  description: 'الموقع الرسمي لمحمد شعبان — صانع محتوى، مصور، مونتير وممثل.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>
}
