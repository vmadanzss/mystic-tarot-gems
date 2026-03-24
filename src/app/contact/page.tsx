'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
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
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        form_type: 'Contact Form'
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
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen mystical-gradient pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-handwritten text-5xl md:text-6xl text-accent-gold mb-4">
            Connect with Anita Madan
          </h1>
          <p className="font-serif text-xl text-white/90 max-w-2xl mx-auto">
            Reach out for spiritual guidance, healing sessions, or any questions
            about your spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
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
                    Message Sent Successfully!
                  </h3>
                  <p className="font-serif text-white/80 mb-4">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
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
                      Subject *
                    </label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent"
                      style={{
                        colorScheme: 'dark'
                      }}
                    >
                      <option value="" style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>Select a subject</option>
                      <option value="general" style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>General Inquiry</option>
                      <option value="booking" style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>Booking Support</option>
                      <option value="technical" style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>Technical Support</option>
                      <option value="crystals" style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>Crystal Information</option>
                      <option value="partnership" style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>Partnership Inquiry</option>
                      <option value="feedback" style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-serif text-white/90 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-neon-glow focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">👤</div>
                  <div>
                    <h3 className="font-handwritten text-lg text-accent-gold mb-1">
                      Spiritual Guide
                    </h3>
                    <p className="font-serif text-white/80 text-lg font-semibold">
                      Anita Madan
                    </p>
                    <p className="font-serif text-white/60 text-sm">
                      Certified Tarot Reader & Spiritual Healer
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="font-handwritten text-lg text-accent-gold mb-1">
                      Phone
                    </h3>
                    <p className="font-serif text-white/80">+91-9217673528</p>
                    <p className="font-serif text-white/80">+91-9871008250</p>
                    <p className="font-serif text-white/60 text-sm">
                      Available Mon-Sat, 10 AM - 7 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-handwritten text-lg text-accent-gold mb-1">
                      Email
                    </h3>
                    <p className="font-serif text-white/80">vmadan6113@gmail.com</p>
                    <p className="font-serif text-white/60 text-sm">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-handwritten text-lg text-accent-gold mb-1">
                      Address
                    </h3>
                    <p className="font-serif text-white/80">
                      Block C2A, JanakPuri
                      <br />
                      New Delhi, 110058
                    </p>
                    <p className="font-serif text-white/60 text-sm">
                      Home & Office (By Appointment)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-handwritten text-lg text-accent-gold mb-2">
                    Are readings available both offline and online?
                  </h3>
                  <p className="font-serif text-white/70 text-sm">
                    Yes, we offer both offline and online reading sessions. For online readings, we connect through Google Meet or Zoom meetings to provide the same quality experience as in-person sessions.
                  </p>
                </div>

                <div>
                  <h3 className="font-handwritten text-lg text-accent-gold mb-2">
                    How long does a reading take?
                  </h3>
                  <p className="font-serif text-white/70 text-sm">
                    Most readings take 30-45 minutes, depending on the
                    complexity of your questions and the depth of guidance you
                    seek.
                  </p>
                </div>

                <div>
                  <h3 className="font-handwritten text-lg text-accent-gold mb-2">
                    Do you ship crystals internationally?
                  </h3>
                  <p className="font-serif text-white/70 text-sm">
                    Currently, we ship within India. International shipping is
                    coming soon. Contact us for updates on availability in your
                    region.
                  </p>
                </div>

                <div>
                  <h3 className="font-handwritten text-lg text-accent-gold mb-2">
                    Can I reschedule my reading?
                  </h3>
                  <p className="font-serif text-white/70 text-sm">
                    Yes, you can reschedule up to 24 hours before your
                    appointment. Contact us via email or phone to make changes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Follow Our Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-white/70 mb-4">
                  Stay connected with daily insights, crystal wisdom, and
                  spiritual guidance.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/mystictarotandgems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-accent-gold transition-colors duration-300 hover:glow-effect"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/mystictarotandgems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-accent-gold transition-colors duration-300 hover:glow-effect"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
