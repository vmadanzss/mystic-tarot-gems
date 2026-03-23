'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    readingType: '',
    preferredDateTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS integration
      const emailData = {
        to_email: 'vmadan6113@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        reading_type: formData.readingType,
        preferred_datetime: formData.preferredDateTime,
        message: formData.message,
        subject: 'New Booking Request - Mystic Tarot & Gems'
      };

      // Send email using EmailJS
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          readingType: '',
          preferredDateTime: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your booking request. Please try again or contact us directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen mystical-gradient pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-handwritten text-5xl md:text-6xl text-accent-gold mb-4">
            Book Your Reading
          </h1>
          <p className="font-serif text-xl text-white/90 max-w-2xl mx-auto">
            Connect with the mystical realm and discover what the universe has
            in store for you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle>
                {isSubmitted ? 'Booking Confirmed!' : 'Schedule Your Session'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-accent-gold mb-2">
                    Thank You!
                  </h3>
                  <p className="font-serif text-white/80 mb-4">
                    Your booking request has been received successfully. We will contact you shortly to confirm your appointment.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    Book Another Reading
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                      Type of Reading *
                    </label>
                    <select 
                      name="readingType"
                      value={formData.readingType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent"
                    >
                      <option value="">Select a reading type</option>
                      <option value="love">Love & Relationships</option>
                      <option value="career">Career & Success</option>
                      <option value="finance">Finance & Prosperity</option>
                      <option value="health">Health & Wellness</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                      Preferred Date & Time *
                    </label>
                    <input
                      type="datetime-local"
                      name="preferredDateTime"
                      value={formData.preferredDateTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                      Message or Specific Concerns
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent resize-none"
                      placeholder="Share any specific questions or areas you'd like to focus on..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Book My Reading'}
                  </Button>
                </form>
              )}
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
                  Discover insights about your romantic life, soulmate
                  connections, and relationship dynamics.
                </p>
                <p className="font-serif text-accent-gold font-semibold">
                  ₹2,999
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Career & Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-white/80 mb-4">
                  Uncover your professional path, career opportunities, and
                  success potential.
                </p>
                <p className="font-serif text-accent-gold font-semibold">
                  ₹2,999
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Finance & Prosperity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-white/80 mb-4">
                  Explore your financial future, investment opportunities, and
                  wealth manifestation.
                </p>
                <p className="font-serif text-accent-gold font-semibold">
                  ₹2,999
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-white/80 mb-4">
                  Gain insights into your physical and spiritual well-being,
                  healing, and vitality.
                </p>
                <p className="font-serif text-accent-gold font-semibold">
                  ₹2,999
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
