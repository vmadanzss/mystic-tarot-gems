'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen mystical-gradient">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center p-8 pt-24 pb-16">
        <main className="text-center space-y-8">
          <h1 className="font-handwritten text-6xl md:text-8xl text-accent-gold animate-glow">
            Mystic Tarot & Gems
          </h1>
          <p className="font-serif text-xl md:text-2xl text-white/90 max-w-2xl">
            Unlock Your Destiny with Mystic Tarot & Gems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/booking" className="mystical-button">
              Inquire Now
            </Link>
            <Link href="/shop" className="mystical-button">
              Shop Gems
            </Link>
          </div>
        </main>

        <div className="mt-16 text-center">
          <p className="text-white/60 font-sans">
            Premium spiritual services platform
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-8 pb-16">
        <h2 className="font-handwritten text-4xl md:text-5xl text-accent-gold text-center mb-12">
          Discover Your Path
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tarot Reading Card */}
          <Link href="/booking?service=tarot-reading" className="group">
            <div className="mystical-card h-80 relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=320&fit=crop&crop=center"
                  alt="Tarot Cards Reading"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="font-handwritten text-2xl text-accent-gold mb-2">
                  Tarot Reading
                </h3>
                <p className="text-white/90 font-serif text-sm mb-4">
                  Discover insights into your love, career, and life decisions through authentic tarot card readings
                </p>
                <div className="flex items-center text-accent-gold text-sm font-sans">
                  <span>Inquire Now</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Spiritual Healing Card */}
          <Link href="/services" className="group">
            <div className="mystical-card h-80 relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=320&fit=crop&crop=center"
                  alt="Spiritual Healing"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="font-handwritten text-2xl text-accent-gold mb-2">
                  Spiritual Healing
                </h3>
                <p className="text-white/90 font-serif text-sm mb-4">
                  Experience Reiki healing, dowsing, and magic candle spells for spiritual wellness and energy balance
                </p>
                <div className="flex items-center text-accent-gold text-sm font-sans">
                  <span>Healing Services</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mystical-card p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 relative flex-shrink-0">
                <Image
                  src="/images/profile/ChatGPT Image Mar 22, 2026, 08_09_21 PM.png"
                  alt="Anita Madan - Professional Tarot Reader"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div className="text-left">
                <h3 className="font-handwritten text-3xl text-accent-gold mb-4">
                  Meet Anita Madan
                </h3>
                <p className="text-white/90 font-serif mb-4">
                  Professional Tarot Reader with over 5-6 years of experience, helping individuals gain clarity in love, career, and life decisions. Certified from the International School of Astrology and skilled in Reiki Healing.
                </p>
                <Link href="/about" className="inline-flex items-center text-accent-gold hover:text-accent-gold/80 transition-colors font-sans">
                  Learn More About Me
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
