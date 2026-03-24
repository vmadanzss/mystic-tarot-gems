'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-card backdrop-blur-glass shadow-glass'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            data-testid="brand-name"
          >
            <div className="relative">
              <img
                src="/images/profile/ChatGPT Image Mar 22, 2026, 08_09_21 PM.png"
                alt="Mystic Tarot & Gems Logo"
                className="h-12 w-12 object-contain"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))',
                  mixBlendMode: 'screen',
                }}
                onError={(e) => {
                  // Fallback to gradient circle if logo fails to load
                  e.currentTarget.style.display = 'none';
                  const fallbackElement = e.currentTarget
                    .nextElementSibling as HTMLElement;
                  if (fallbackElement) {
                    fallbackElement.style.display = 'flex';
                  }
                }}
              />
              <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-neon-glow rounded-full items-center justify-center hidden">
                <span className="text-mystical-black font-bold text-sm">
                  MTG
                </span>
              </div>
            </div>
            <span className="font-handwritten text-xl text-accent-gold group-hover:text-accent-neon-glow transition-colors duration-300">
              Mystic Tarot & Gems
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'font-serif px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-accent-gold hover:glow-effect',
                    pathname === item.href
                      ? 'text-accent-gold border-b-2 border-accent-gold'
                      : 'text-white/90 hover:text-accent-gold'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/booking"
              className="mystical-button text-sm font-medium"
            >
              Inquire Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent-gold hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent-neon-glow transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative">
                <span
                  className={cn(
                    'absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out',
                    isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                  )}
                />
                <span
                  className={cn(
                    'absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-2',
                    isOpen ? 'opacity-0' : 'opacity-100'
                  )}
                />
                <span
                  className={cn(
                    'absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-4',
                    isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0'
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="glass-card mx-4 mb-4 rounded-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-serif block px-3 py-2 rounded-md text-base font-medium transition-all duration-300',
                  pathname === item.href
                    ? 'text-accent-gold bg-white/10'
                    : 'text-white/90 hover:text-accent-gold hover:bg-white/5'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/booking"
                className="mystical-button w-full text-center block"
                onClick={() => setIsOpen(false)}
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
