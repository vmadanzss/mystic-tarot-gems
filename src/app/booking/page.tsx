'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function BookingPage() {
  return (
    <div className="min-h-screen mystical-gradient pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-handwritten text-5xl md:text-6xl text-accent-gold mb-4">
            Book Your Reading
          </h1>
          <p className="font-serif text-xl text-white/90 max-w-2xl mx-auto">
            Connect with the mystical realm and discover what the universe has in store for you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle>Schedule Your Session</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                    Type of Reading
                  </label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent">
                    <option value="">Select a reading type</option>
                    <option value="love">Love & Relationships</option>
                    <option value="career">Career & Success</option>
                    <option value="finance">Finance & Prosperity</option>
                    <option value="health">Health & Wellness</option>
                  </select>
                </div>

                <div>
                  <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                    Preferred Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                    Message or Specific Concerns
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent resize-none"
                    placeholder="Share any specific questions or areas you'd like to focus on..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Book My Reading
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Reading Types Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Love & Relationships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-white/80 mb-4">
                  Discover insights about your romantic life, soulmate connections, and relationship dynamics.
                </p>
                <p className="font-serif text-accent-gold font-semibold">₹2,999</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Career & Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-white/80 mb-4">
                  Uncover your professional path, career opportunities, and success potential.
                </p>
                <p className="font-serif text-accent-gold font-semibold">₹2,999</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Finance & Prosperity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-white/80 mb-4">
                  Explore your financial future, investment opportunities, and wealth manifestation.
                </p>
                <p className="font-serif text-accent-gold font-semibold">₹2,999</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-white/80 mb-4">
                  Gain insights into your physical and spiritual well-being, healing, and vitality.
                </p>
                <p className="font-serif text-accent-gold font-semibold">₹2,999</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}