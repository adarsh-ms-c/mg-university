import type { Metadata, Viewport } from 'next';
import { Anton, Inter } from 'next/font/google';
import './globals.css';

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://mg-university.vercel.app'),
  title: 'Mahatma Gandhi University, Kottayam, Kerala',
  description: 'Official homepage concept for Mahatma Gandhi University, Priyadarsini Hills, Kottayam, Kerala. Explore admissions, academics, research, news and student services.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_IN', url: 'https://mg-university.vercel.app', siteName: 'Mahatma Gandhi University', title: 'Mahatma Gandhi University, Kottayam', description: 'Explore admissions, academics, research, news and student services at Mahatma Gandhi University.' },
  twitter: { card: 'summary', title: 'Mahatma Gandhi University, Kottayam', description: 'Explore admissions, academics, research, news and student services at MGU.' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#030816', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${anton.variable} ${inter.variable}`}>{children}</body></html>;
}
