'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const remedies = [
  // Magic Oils - Fixed Price ₹500
  {
    id: 1,
    name: 'Love Attraction Oil',
    price: '₹500',
    category: 'Magic Oils',
    description: 'Specially blessed oil for attracting love and enhancing relationships',
    image: '/api/placeholder/300/300',
    properties: ['Love', 'Attraction', 'Relationships'],
    volume: '10ml',
    isFixed: true,
  },
  {
    id: 2,
    name: 'Prosperity Oil',
    price: '₹500',
    category: 'Magic Oils',
    description: 'Sacred oil for manifesting abundance and financial success',
    image: '/api/placeholder/300/300',
    properties: ['Abundance', 'Prosperity', 'Success'],
    volume: '10ml',
    isFixed: true,
  },
  {
    id: 3,
    name: 'Protection Oil',
    price: '₹500',
    category: 'Magic Oils',
    description: 'Powerful protective oil for spiritual shielding and safety',
    image: '/api/placeholder/300/300',
    properties: ['Protection', 'Safety', 'Shielding'],
    volume: '10ml',
    isFixed: true,
  },
  
  // Gems - Dynamic Pricing
  {
    id: 4,
    name: 'Rose Quartz',
    price: '₹1,299',
    category: 'Gems',
    description: 'The stone of unconditional love and infinite peace',
    image: '/api/placeholder/300/300',
    properties: ['Love', 'Healing', 'Self-Love'],
  },
  {
    id: 5,
    name: 'Citrine',
    price: '₹1,799',
    category: 'Gems',
    description: 'The merchant stone for abundance and prosperity',
    image: '/api/placeholder/300/300',
    properties: ['Abundance', 'Success', 'Confidence'],
  },
  {
    id: 6,
    name: 'Emerald',
    price: '₹3,999',
    category: 'Gems',
    description: 'Stone of wisdom, growth, and patience',
    image: '/api/placeholder/300/300',
    properties: ['Wisdom', 'Growth', 'Patience'],
  },
  
  // Crystals - Dynamic Pricing
  {
    id: 7,
    name: 'Amethyst Crystal',
    price: '₹1,599',
    category: 'Crystals',
    description: 'A natural tranquilizer and protective stone',
    image: '/api/placeholder/300/300',
    properties: ['Protection', 'Clarity', 'Intuition'],
  },
  {
    id: 8,
    name: 'Clear Quartz Point',
    price: '₹999',
    category: 'Crystals',
    description: 'The master healer and energy amplifier',
    image: '/api/placeholder/300/300',
    properties: ['Amplification', 'Clarity', 'Healing'],
  },
  {
    id: 9,
    name: 'Black Tourmaline',
    price: '₹1,399',
    category: 'Crystals',
    description: 'Powerful protection against negative energy',
    image: '/api/placeholder/300/300',
    properties: ['Protection', 'Grounding', 'Cleansing'],
  },
  
  // Pure Rudraksha - Dynamic Pricing
  {
    id: 10,
    name: 'Pure Rudraksha Mala (108 Beads)',
    price: '₹2,999',
    category: 'Pure Rudraksha',
    description: 'Authentic 108 beads Rudraksha mala for meditation and spiritual practice',
    image: '/api/placeholder/300/300',
    properties: ['Meditation', 'Spiritual Growth', 'Peace'],
  },
  {
    id: 11,
    name: 'Gauri Shankar Rudraksha',
    price: '₹4,999',
    category: 'Pure Rudraksha',
    description: 'Rare twin Rudraksha for harmony and relationships',
    image: '/api/placeholder/300/300',
    properties: ['Harmony', 'Relationships', 'Unity'],
  },
  {
    id: 12,
    name: '5 Mukhi Rudraksha',
    price: '₹299',
    category: 'Pure Rudraksha',
    description: 'Most common and powerful Rudraksha for overall well-being',
    image: '/api/placeholder/300/300',
    properties: ['Well-being', 'Peace', 'Health'],
  },
  
  // All Spiritual Items - Dynamic Pricing
  {
    id: 13,
    name: 'Sacred Incense Set',
    price: '₹799',
    category: 'All Spiritual Items',
    description: 'Premium incense collection for meditation and rituals',
    image: '/api/placeholder/300/300',
    properties: ['Purification', 'Meditation', 'Sacred Space'],
  },
  {
    id: 14,
    name: 'Tibetan Singing Bowl',
    price: '₹2,499',
    category: 'All Spiritual Items',
    description: 'Handcrafted singing bowl for sound healing and meditation',
    image: '/api/placeholder/300/300',
    properties: ['Sound Healing', 'Meditation', 'Cleansing'],
  },
  {
    id: 15,
    name: 'Crystal Pyramid Set',
    price: '₹1,899',
    category: 'All Spiritual Items',
    description: 'Set of 7 chakra crystal pyramids for energy work',
    image: '/api/placeholder/300/300',
    properties: ['Chakra Healing', 'Energy Work', 'Balance'],
  },
];

const categories = [
  'All Items',
  'Magic Oils',
  'Gems',
  'Crystals',
  'All Spiritual Items',
  'Pure Rudraksha',
];

export default function ShopPage() {
  return (
    <div className="min-h-screen mystical-gradient pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-handwritten text-5xl md:text-6xl text-accent-gold mb-4">
            Spiritual Remedies Store
          </h1>
          <p className="font-serif text-xl text-white/90 max-w-2xl mx-auto">
            Discover authentic spiritual remedies, blessed items, and sacred tools for your spiritual journey
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={category === 'All Items' ? 'mystical' : 'outline'} 
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remedies.map((item) => (
            <Card key={item.id} className="group hover:scale-105 transition-transform duration-300">
              <CardHeader className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary-purple/20 to-primary-deep-purple/20 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                  <img
                    src={`/images/products/${item.category.toLowerCase().replace(/\s+/g, '-')}/${item.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to category-based placeholder
                      e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="300" height="300" fill="#4C1D95"/>
                          <text x="150" y="140" text-anchor="middle" fill="#F59E0B" font-size="40" font-family="Arial">
                            ${item.category === 'Magic Oils' ? '🧴' : 
                              item.category === 'Gems' ? '💎' : 
                              item.category === 'Crystals' ? '🔮' : 
                              item.category === 'Pure Rudraksha' ? '📿' : '✨'}
                          </text>
                          <text x="150" y="180" text-anchor="middle" fill="#F59E0B" font-size="14" font-family="Arial">${item.name}</text>
                        </svg>
                      `)}`;
                    }}
                  />
                  <span className="absolute top-2 right-2 px-2 py-1 bg-accent-gold text-mystical-black text-xs font-bold rounded-full">
                    {item.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">
                  {item.name}
                  {item.volume && (
                    <span className="text-sm font-serif text-accent-gold ml-2">
                      ({item.volume})
                    </span>
                  )}
                </CardTitle>
                <p className="font-serif text-white/70 text-sm mb-4">
                  {item.description}
                </p>
                
                {/* Properties */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.properties.map((property) => (
                    <span
                      key={property}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs font-serif text-accent-gold"
                    >
                      {property}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-handwritten text-2xl text-accent-gold">
                      {item.price}
                    </span>
                    {item.isFixed && (
                      <span className="text-xs font-serif text-white/60">
                        Fixed Price
                      </span>
                    )}
                  </div>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-16">
          <Card className="text-center">
            <CardContent className="p-8">
              <h2 className="font-handwritten text-3xl text-accent-gold mb-4">
                Spiritual Starter Kit
              </h2>
              <p className="font-serif text-white/80 mb-6 max-w-2xl mx-auto">
                Perfect for beginners! This curated collection includes Magic Oil, Rose Quartz, 
                Amethyst, and a comprehensive guide to spiritual practices.
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="font-serif text-white/60 line-through text-lg">₹4,999</span>
                <span className="font-handwritten text-3xl text-accent-gold">₹2,999</span>
              </div>
              <Button size="lg">Get Starter Kit</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}