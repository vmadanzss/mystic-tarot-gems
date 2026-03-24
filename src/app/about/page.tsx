'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import Link from 'next/link';

export default function AboutPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    name: string;
    file: string;
  } | null>(null);

  const certificates = [
    { name: 'Tarot Reading Certification', file: 'IMG_20260322_200344.jpg' },
    { name: 'Advanced Tarot & Divination', file: 'IMG-20260322-WA0004.jpg' },
    { name: 'Reiki Healing Certification', file: 'IMG-20260322-WA0005.jpg' },
  ];
  return (
    <div className="min-h-screen mystical-gradient pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Logo Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src="/images/profile/ChatGPT Image Mar 22, 2026, 08_09_21 PM.png"
                alt="Mystic Tarot & Gems Logo"
                className="h-56 w-56 object-contain"
                style={{
                  filter: 'drop-shadow(0 0 25px rgba(139, 92, 246, 0.6))',
                  mixBlendMode: 'screen',
                }}
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  e.currentTarget.style.display = 'none';
                  const fallbackElement = e.currentTarget
                    .nextElementSibling as HTMLElement;
                  if (fallbackElement) {
                    fallbackElement.style.display = 'flex';
                  }
                }}
              />
              <div className="w-56 h-56 bg-gradient-to-br from-accent-gold to-accent-neon-glow rounded-full items-center justify-center hidden">
                <span className="text-mystical-black font-bold text-4xl">
                  MTG
                </span>
              </div>
            </div>
          </div>
          <h1 className="font-handwritten text-5xl md:text-6xl text-accent-gold mb-4">
            Mystic Tarot & Gems
          </h1>
          <p className="font-serif text-xl text-white/90 max-w-2xl mx-auto">
            Bridging ancient wisdom with modern technology to guide souls on
            their spiritual journey
          </p>
        </div>

        {/* About Us and Brand Story */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-center">
              About Anita Madan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent-gold shadow-glow">
                  <img
                    src="/images/profile/anita-madan.jpg"
                    alt="Anita Madan - Spiritual Guide"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNEMxRDk1Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRjU5RTBCIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iQXJpYWwiPkFuaXRhIE1hZGFuPC90ZXh0Pgo8L3N2Zz4K';
                    }}
                  />
                </div>
              </div>

              {/* Bio Content */}
              <div className="flex-1">
                <p className="font-serif text-white/80 text-lg leading-relaxed mb-4">
                  Anita Madan is a professional Tarot Reader with over 5–6 years of experience, helping individuals gain clarity in love, career, and life decisions. She holds a Diploma in Tarot Card Reading from the International School of Astrology and is also skilled in Reiki Healing, a natural energy healing method. Through Mystic Tarot & Gems, she aims to guide people toward positivity, balance, and personal growth.
                </p>
                <p className="font-serif text-white/80 text-lg leading-relaxed mb-4">
                  Born from a deep reverence for ancient mystical traditions and
                  powered by cutting-edge tarot techniques, Anita Madan
                  represents a new era in tarot reading and divination. Her
                  journey began with a simple belief: that everyone deserves
                  access to profound tarot insights that can illuminate their
                  path forward.
                </p>
                <p className="font-serif text-white/80 text-lg leading-relaxed mb-4">
                  With years of experience in Tarot reading, card
                  interpretation, and mystical counseling, Anita combines
                  timeless tarot wisdom with modern understanding to deliver
                  personalized readings that resonate with your unique energy
                  signature and life circumstances.
                </p>
                <p className="font-serif text-white/80 text-lg leading-relaxed">
                  Based in New Delhi, she draws from centuries of tarot
                  traditions while embracing innovation to serve seekers
                  worldwide. Every reading, every card interpretation, every
                  interaction is infused with intention, authenticity, and deep
                  respect for the sacred art of tarot divination.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-serif text-white/80 leading-relaxed">
                To democratize access to tarot guidance by combining ancient
                card reading wisdom with modern technology, empowering
                individuals to make informed decisions about their life's
                journey while maintaining the sacred essence of tarot divination
                practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-serif text-white/80 leading-relaxed">
                To become the world's most trusted platform for tarot guidance,
                where technology serves divination, and where every seeker finds
                the clarity, insight, and empowerment they need through the
                ancient art of tarot reading.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-center">
              Our Core Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-handwritten text-xl text-accent-gold mb-2">
                    🔮 Authenticity
                  </h3>
                  <p className="font-serif text-white/70 text-sm">
                    We honor the sacred traditions of tarot and crystal healing
                    while embracing innovation that serves the highest good.
                  </p>
                </div>

                <div>
                  <h3 className="font-handwritten text-xl text-accent-gold mb-2">
                    ✨ Empowerment
                  </h3>
                  <p className="font-serif text-white/70 text-sm">
                    Our guidance empowers you to make your own decisions, never
                    creating dependency but fostering inner wisdom and
                    self-trust.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-handwritten text-xl text-accent-gold mb-2">
                    💎 Integrity
                  </h3>
                  <p className="font-serif text-white/70 text-sm">
                    We provide honest, compassionate guidance with complete
                    transparency about our methods and the nature of spiritual
                    insight.
                  </p>
                </div>

                <div>
                  <h3 className="font-handwritten text-xl text-accent-gold mb-2">
                    🌟 Innovation
                  </h3>
                  <p className="font-serif text-white/70 text-sm">
                    We continuously evolve our platform to better serve our
                    community while respecting the timeless wisdom of mystical
                    traditions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Makes Us Different */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-center">
              What Makes Us Different
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🔮</div>
                <div>
                  <h3 className="font-handwritten text-lg text-accent-gold mb-2">
                    Authentic Human Intuition
                  </h3>
                  <p className="font-serif text-white/70">
                    Every reading is conducted personally by Anita Madan using her natural intuitive abilities and years of tarot expertise, providing genuine spiritual guidance without any artificial assistance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🎯</div>
                <div>
                  <h3 className="font-handwritten text-lg text-accent-gold mb-2">
                    Personalized Approach
                  </h3>
                  <p className="font-serif text-white/70">
                    Every reading is tailored to your unique energy signature,
                    life circumstances, and spiritual journey—no generic
                    interpretations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🌍</div>
                <div>
                  <h3 className="font-handwritten text-lg text-accent-gold mb-2">
                    Global Accessibility
                  </h3>
                  <p className="font-serif text-white/70">
                    Access profound spiritual guidance from anywhere in the
                    world, at any time, with the same quality and depth as
                    in-person sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">💎</div>
                <div>
                  <h3 className="font-handwritten text-lg text-accent-gold mb-2">
                    Holistic Healing
                  </h3>
                  <p className="font-serif text-white/70">
                    Beyond readings, we offer carefully curated healing crystals
                    and gems to support your ongoing spiritual practice and
                    energy work.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certificates Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-center">
              Certifications & Credentials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-serif text-white/80 text-center mb-8 max-w-2xl mx-auto">
              Anita Madan's expertise in Tarot reading and mystical arts is
              backed by professional certifications and years of dedicated study
              in various divination and healing modalities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Certificate images - actual certificates */}
              {certificates.map((cert, index) => (
                <Card
                  key={index}
                  className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <CardContent className="p-4">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary-purple/20 to-primary-deep-purple/20 rounded-lg mb-4 overflow-hidden relative">
                      <img
                        src={`/images/certificates/${cert.file}`}
                        alt={cert.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDMwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjI1IiBmaWxsPSIjNEMxRDk1Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRjU5RTBCIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwiPkNlcnRpZmljYXRlPC90ZXh0Pgo8dGV4dCB4PSIxNTAiIHk9IjEzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0Y1OUUwQiIgZm9udC1zaXplPSIxMiIgZm9udC1mYW1pbHk9IkFyaWFsIj5QbGFjZWhvbGRlcjwvdGV4dD4KPC9zdmc+Cg==`;
                        }}
                      />
                      {/* Click indicator */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-handwritten text-lg text-accent-gold text-center">
                      {cert.name}
                    </h3>
                    <p className="text-center text-white/60 text-sm mt-1">
                      Click to view full size
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="font-serif text-white/60 text-sm">
                All certifications are from recognized Tarot and mystical arts
                institutions
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="text-center">
          <CardContent className="p-8">
            <h2 className="font-handwritten text-3xl text-accent-gold mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="font-serif text-white/80 mb-6 max-w-2xl mx-auto">
              Join thousands of seekers who have found clarity, healing, and
              empowerment through our platform. Your spiritual journey awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg">Book a Reading</Button>
              </Link>
              <Link href="/shop">
                <Button variant="outline" size="lg">
                  Explore Crystals
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Certificate Modal */}
      <Modal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      >
        {selectedCertificate && (
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="p-6 bg-gradient-to-r from-primary-purple to-primary-deep-purple">
              <h3 className="text-2xl font-handwritten text-accent-gold text-center">
                {selectedCertificate.name}
              </h3>
            </div>
            <div className="p-4">
              <img
                src={`/images/certificates/${selectedCertificate.file}`}
                alt={selectedCertificate.name}
                className="w-full h-auto max-h-[70vh] object-contain"
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDYwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjNEMxRDk1Ii8+Cjx0ZXh0IHg9IjMwMCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRjU5RTBCIiBmb250LXNpemU9IjI0IiBmb250LWZhbWlseT0iQXJpYWwiPkNlcnRpZmljYXRlPC90ZXh0Pgo8dGV4dCB4PSIzMDAiIHk9IjI0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0Y1OUUwQiIgZm9udC1zaXplPSIxOCIgZm9udC1mYW1pbHk9IkFyaWFsIj5GdWxsIFNpemUgVmlldyBOb3QgQXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4K`;
                }}
              />
            </div>
            <div className="p-4 bg-gray-50 text-center">
              <p className="text-gray-600 text-sm">
                Click outside or press ESC to close
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
