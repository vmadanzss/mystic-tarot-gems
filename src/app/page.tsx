'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen mystical-gradient flex flex-col items-center justify-center p-8 pt-24">
      <main className="text-center space-y-8">
        <h1 className="font-handwritten text-6xl md:text-8xl text-accent-gold animate-glow">
          Mystic Tarot & Gems
        </h1>
        <p className="font-serif text-xl md:text-2xl text-white/90 max-w-2xl">
          Unlock Your Destiny with Mystic Tarot & Gems
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/booking" className="mystical-button">
            Book a Reading
          </Link>
          <Link href="/shop" className="mystical-button">
            Shop Gems
          </Link>
        </div>
      </main>

      <div className="mt-16 text-center">
        <p className="text-white/60 font-sans">
          Premium AI-powered spiritual services platform
        </p>
      </div>
    </div>
  );
}
