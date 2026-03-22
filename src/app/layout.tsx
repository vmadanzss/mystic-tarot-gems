import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mystic Tarot & Gems - Unlock Your Destiny',
  description:
    'Premium AI-powered spiritual services platform combining tarot reading services with an e-commerce gem shop. Discover your destiny through mystical guidance and healing crystals.',
  keywords:
    'tarot reading, healing crystals, spiritual guidance, mystical services, gems, astrology, spiritual wellness',
  authors: [{ name: 'Mystic Tarot & Gems' }],
  creator: 'Mystic Tarot & Gems',
  publisher: 'Mystic Tarot & Gems',
  openGraph: {
    title: 'Mystic Tarot & Gems - Unlock Your Destiny',
    description:
      'Premium AI-powered spiritual services platform combining tarot reading services with an e-commerce gem shop.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Mystic Tarot & Gems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mystic Tarot & Gems - Unlock Your Destiny',
    description:
      'Premium AI-powered spiritual services platform combining tarot reading services with an e-commerce gem shop.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
