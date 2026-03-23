'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { products, categories, ITEMS_PER_PAGE } from '@/data/products';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen mystical-gradient pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-handwritten text-5xl md:text-6xl text-accent-gold mb-4">
            Spiritual Remedies Store
          </h1>
          <p className="font-serif text-xl text-white/90 max-w-3xl mx-auto">
            Discover authentic spiritual items, crystals, gems, and sacred oils
            to enhance your mystical journey
          </p>
          <p className="font-serif text-lg text-white/70 mt-4">
            {filteredProducts.length} items available
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              variant={selectedCategory === category ? 'mystical' : 'outline'}
              className={`${
                selectedCategory === category
                  ? 'bg-accent-neon-glow text-black'
                  : 'border-accent-neon-glow text-accent-neon-glow hover:bg-accent-neon-glow hover:text-black'
              }`}
            >
              {category}
              <span className="ml-2 text-xs opacity-75">
                ({category === 'All' ? products.length : products.filter(p => p.category === category).length})
              </span>
            </Button>
          ))}
        </div>

        {/* Featured Offer - Only for Magic Oils */}
        {selectedCategory === 'Magic Oils' && (
          <Card className="mb-12 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-accent-gold">
            <CardContent className="text-center py-8">
              <h2 className="font-handwritten text-3xl text-accent-gold mb-4">
                🌟 Special Offer on Magic Oils 🌟
              </h2>
              <p className="font-serif text-white/90 text-lg mb-4">
                All Magic Oils at a fixed price - Perfect for beginners and
                experienced practitioners
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="font-handwritten text-3xl text-accent-gold">
                  Only ₹500 each
                </span>
              </div>
              <p className="font-serif text-white/80">
                ✨ Authentic blends ✨ Blessed & Energized ✨ Ready to use
              </p>
            </CardContent>
          </Card>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {currentProducts.map((product) => (
            <Card key={product.id} className="group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="aspect-square bg-white/10 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl">
                    {product.category === 'Magic Oils' && '🧪'}
                    {product.category === 'Gems' && '💎'}
                    {product.category === 'Crystals' && '🔮'}
                    {product.category === 'Pure Rudraksha' && '📿'}
                    {product.category === 'All Spiritual Items' && '✨'}
                  </div>
                  {product.certification && (
                    <div className="absolute top-2 right-2 bg-accent-gold text-black text-xs px-2 py-1 rounded-full">
                      {product.certification}
                    </div>
                  )}
                </div>
                <CardTitle className="text-center text-lg">{product.name}</CardTitle>
                {product.origin && (
                  <p className="text-center text-accent-gold text-sm">Origin: {product.origin}</p>
                )}
              </CardHeader>
              <CardContent>
                <p className="font-serif text-white/80 text-sm mb-4 text-center line-clamp-3">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {product.properties.slice(0, 3).map((property) => (
                    <span
                      key={property}
                      className="px-2 py-1 bg-accent-neon-glow/20 text-accent-neon-glow text-xs rounded-full"
                    >
                      {property}
                    </span>
                  ))}
                </div>

                <div className="text-center mb-4">
                  <span className="font-handwritten text-xl text-accent-gold">
                    {product.price}
                  </span>
                </div>

                <Button className="w-full" size="sm">
                  {product.price === 'Contact for Price' ? 'Inquire Now' : 'Add to Cart'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-12">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
            >
              Previous
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                variant={currentPage === page ? 'mystical' : 'outline'}
                size="sm"
                className={`${
                  currentPage === page
                    ? 'bg-accent-neon-glow text-black'
                    : 'border-accent-neon-glow text-accent-neon-glow hover:bg-accent-neon-glow hover:text-black'
                }`}
              >
                {page}
              </Button>
            ))}
            
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
            >
              Next
            </Button>
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="font-handwritten text-2xl text-accent-gold mb-4">
                Need Help Choosing?
              </h3>
              <p className="font-serif text-white/90 mb-6">
                Our spiritual advisor can help you select the perfect remedies
                for your specific needs and intentions.
              </p>
              <div className="space-y-2">
                <p className="font-serif text-white/80">
                  📞 Call: +91-9217673528
                </p>
                <p className="font-serif text-white/80">
                  📧 Email: vmadan6113@gmail.com
                </p>
                <p className="font-serif text-white/80">
                  📍 Address: C2A-106, JanakPuri, New Delhi, 110058
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}