'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const hrcmMethods = [
  {
    id: 'health',
    title: 'Health',
    description: 'Physical, mental, and spiritual well-being insights',
    icon: '🌿',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 'relationship',
    title: 'Relationship',
    description: 'Love, family, friendship, and connection guidance',
    icon: '💕',
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 'career',
    title: 'Career',
    description: 'Professional path, opportunities, and success',
    icon: '🌟',
    color: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    id: 'money',
    title: 'Money',
    description: 'Financial abundance, prosperity, and wealth',
    icon: '💰',
    color: 'from-purple-500/20 to-violet-500/20',
  },
];

const pgtMethods = [
  {
    id: 'possibility',
    title: 'Possibility Reading',
    description: 'Explore potential outcomes and future possibilities',
    icon: '🔮',
  },
  {
    id: 'guidance',
    title: 'Guidance Reading',
    description: 'Receive clear direction and actionable advice',
    icon: '🧭',
  },
  {
    id: 'timeperiod',
    title: 'Time Period Reading',
    description: 'Understand timing and when events may unfold',
    icon: '⏰',
  },
];

const otherServices = [
  {
    id: 'reiki-healing',
    title: 'Reiki Healing',
    price: '₹1,499',
    duration: '60 minutes',
    description: 'Experience profound energy healing and chakra balancing for complete physical and emotional well-being. Ancient Reiki techniques channel universal life force energy to restore harmony within your body, mind, and spirit.',
    features: [
      'Chakra balancing and energy alignment',
      'Stress and anxiety relief',
      'Physical and emotional healing',
      'Energy blockage removal',
      'Deep relaxation and peace',
    ],
    icon: '✨',
    hasGlow: true,
  },
  {
    id: 'dowsing',
    title: 'Dowsing',
    price: '₹999',
    duration: '20-30 minutes',
    description: 'Harness the power of energy detection to receive clear yes/no answers and directional guidance. This ancient technique uses spiritual sensitivity to tap into universal wisdom for decision-making clarity.',
    features: [
      'Yes/No question clarity',
      'Energy-based decision guidance',
      'Spiritual compass direction',
      'Quick and accurate responses',
      'Universal wisdom access',
    ],
    icon: '🧭',
  },
  {
    id: 'magic-candle-spell',
    title: 'Magic Candle Spell',
    price: '₹2,499',
    duration: '45 minutes',
    description: 'Transform your desires into reality through sacred manifestation rituals and intention-based energy work. Each candle spell is carefully crafted to align your energy with your specific goals and dreams.',
    features: [
      'Personalized manifestation rituals',
      'Sacred intention setting ceremonies',
      'Goal-specific energy alignment',
      'Spiritual empowerment techniques',
      'Universal law activation',
    ],
    icon: '🕯️',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen mystical-gradient pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-handwritten text-5xl md:text-6xl text-accent-gold mb-4">
            Tarot Reading Services
          </h1>
          <p className="font-serif text-xl text-white/90 max-w-2xl mx-auto">
            Connect with ancient wisdom through personalized tarot readings that illuminate your path forward
          </p>
        </div>

        {/* Main Service - Tarot & Intuitive Reading */}
        <div className="mb-16">
          <Card className="ring-2 ring-accent-gold shadow-glow">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🔮</div>
              <CardTitle className="text-4xl mb-4">Tarot & Intuitive Reading</CardTitle>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="font-handwritten text-2xl text-accent-gold">₹1,999</span>
                <span className="font-serif text-white/60">30-45 minutes</span>
              </div>
              <p className="font-serif text-lg text-white/90 max-w-3xl mx-auto">
                Accurate intuitive guidance using advanced spiritual techniques. Unlock the mysteries of your life 
                through personalized readings that provide clarity, direction, and deep spiritual insights.
              </p>
            </CardHeader>
            <CardContent>
              {/* HRCM Method Section */}
              <div className="mb-8">
                <h3 className="font-handwritten text-2xl text-accent-gold text-center mb-6">
                  HRCM Method - Four Life Pillars
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {hrcmMethods.map((method) => (
                    <Card key={method.id} className="group hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                          <span className="text-2xl">{method.icon}</span>
                        </div>
                        <h4 className="font-handwritten text-lg text-accent-gold mb-2">
                          {method.title}
                        </h4>
                        <p className="font-serif text-white/70 text-sm">
                          {method.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* PGT Method Section */}
              <div className="mb-8">
                <h3 className="font-handwritten text-2xl text-accent-gold text-center mb-6">
                  PGT Method - Three Types of Questions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pgtMethods.map((method) => (
                    <Card key={method.id} className="group hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl mb-3">{method.icon}</div>
                        <h4 className="font-handwritten text-lg text-accent-gold mb-2">
                          {method.title}
                        </h4>
                        <p className="font-serif text-white/70 text-sm">
                          {method.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Link href="/booking">
                  <Button size="lg" className="text-lg px-8 py-4">
                    Book Your Reading Now
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Services */}
        <div className="mb-16">
          <h2 className="font-handwritten text-4xl text-accent-gold text-center mb-12">
            Additional Healing Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherServices.map((service) => (
              <Card key={service.id} className={`group hover:scale-105 transition-transform duration-300 ${service.hasGlow ? 'animate-pulse' : ''}`}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-4xl ${service.hasGlow ? 'animate-bounce' : ''}`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="font-handwritten text-xl text-accent-gold">
                          {service.price}
                        </span>
                        <span className="font-serif text-white/60 text-sm">
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-serif text-white/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-handwritten text-lg text-accent-gold mb-3">
                      What You'll Experience:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-accent-neon-glow text-sm mt-1">✨</span>
                          <span className="font-serif text-white/70 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/booking" className="block">
                    <Button className="w-full">Book This Service</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="font-handwritten text-4xl text-accent-gold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="font-handwritten text-xl text-accent-gold mb-2">
                  1. Book Your Session
                </h3>
                <p className="font-serif text-white/70 text-sm">
                  Choose your reading type and preferred time slot through our easy booking system.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="font-handwritten text-xl text-accent-gold mb-2">
                  2. Connect & Share
                </h3>
                <p className="font-serif text-white/70 text-sm">
                  Join your private session and share your questions or areas of focus.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-handwritten text-xl text-accent-gold mb-2">
                  3. Receive Guidance
                </h3>
                <p className="font-serif text-white/70 text-sm">
                  Get detailed insights, practical advice, and a recording of your session.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="text-center">
          <CardContent className="p-8">
            <h2 className="font-handwritten text-3xl text-accent-gold mb-4">
              Ready to Unlock Your Destiny?
            </h2>
            <p className="font-serif text-white/80 mb-6 max-w-2xl mx-auto">
              Take the first step towards clarity and guidance. Book your personalized tarot reading today 
              and discover what the universe has in store for you.
            </p>
            <Link href="/booking">
              <Button size="lg">Book Your Reading Now</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}