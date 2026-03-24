'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { products, categories, ITEMS_PER_PAGE, Product } from '@/data/products';

export default function ShopPage() {
  // Shop is temporarily locked - coming soon
  const isShopLocked = true;

  if (isShopLocked) {
    return (
      <div className="min-h-screen mystical-gradient pt-24 pb-16 relative">
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-10"></div>
        
        {/* Lock message */}
        <div className="relative z-20 flex items-center justify-center min-h-[80vh]">
          <div className="text-center max-w-2xl mx-auto px-4">
            {/* Lock Icon */}
            <div className="text-8xl mb-8 animate-pulse">
              🔒
            </div>
            
            {/* Coming Soon Message */}
            <h1 className="font-handwritten text-5xl md:text-6xl text-accent-gold mb-6">
              Shop is Coming Soon
            </h1>
            
            <p className="font-serif text-xl text-white/90 mb-8 leading-relaxed">
              So if you want any gems, crystals and any other spiritual items and need inquiry feel free to contact
            </p>
            
            {/* Contact Button */}
            <div className="space-y-4">
              <Button 
                onClick={() => window.location.href = '/contact'}
                className="bg-accent-neon-glow text-black hover:bg-accent-gold text-lg px-8 py-3"
              >
                Contact Us for Inquiry
              </Button>
              
              <div className="text-white/70 space-y-2">
                <p className="font-serif">📞 Call: +91-9217673528</p>
                <p className="font-serif">📧 Email: vmadan6113@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blurred background content */}
        <div className="absolute inset-0 opacity-20 blur-md">
          <ShopContent />
        </div>
      </div>
    );
  }

  return <ShopContent />;
}

function ShopContent() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
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
            <Card 
              key={product.id} 
              className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <CardHeader>
                <div className="aspect-square bg-white/10 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  {/* Certificate Image on Hover */}
                  {product.certificateImage && (
                    <img 
                      src={product.certificateImage} 
                      alt={`${product.name} Certificate`}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95"
                    />
                  )}
                  <div className="text-6xl hidden">
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
                  {product.certificateImage && (
                    <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Certificate
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

      {/* Product Details Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProduct && (
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <div className="relative">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/api/placeholder/400/400';
                    }}
                  />
                  {selectedProduct.certificateImage && (
                    <div className="mt-4">
                      <h4 className="font-serif text-accent-gold text-sm mb-2">Certificate:</h4>
                      <img 
                        src={selectedProduct.certificateImage} 
                        alt={`${selectedProduct.name} Certificate`}
                        className="w-full h-32 object-cover rounded-lg border border-accent-gold/30"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="font-handwritten text-3xl text-accent-gold mb-4">
                  {selectedProduct.name}
                </h2>
                
                {selectedProduct.origin && (
                  <p className="text-accent-gold text-sm mb-2">
                    <strong>Origin:</strong> {selectedProduct.origin}
                  </p>
                )}
                
                {selectedProduct.certification && (
                  <p className="text-accent-gold text-sm mb-2">
                    <strong>Certification:</strong> {selectedProduct.certification}
                  </p>
                )}
                
                {selectedProduct.weight && (
                  <p className="text-accent-gold text-sm mb-2">
                    <strong>Weight:</strong> {selectedProduct.weight}
                  </p>
                )}
                
                {selectedProduct.reportNo && (
                  <p className="text-accent-gold text-sm mb-2">
                    <strong>Report No:</strong> {selectedProduct.reportNo}
                  </p>
                )}
                
                {selectedProduct.dimensions && (
                  <p className="text-accent-gold text-sm mb-2">
                    <strong>Dimensions:</strong> {selectedProduct.dimensions}
                  </p>
                )}
                
                {selectedProduct.shape && (
                  <p className="text-accent-gold text-sm mb-2">
                    <strong>Shape:</strong> {selectedProduct.shape}
                  </p>
                )}
                
                {selectedProduct.wearingDay && (
                  <p className="text-accent-gold text-sm mb-2">
                    <strong>Wearing Day:</strong> {selectedProduct.wearingDay}
                  </p>
                )}
                
                {selectedProduct.finger && (
                  <p className="text-accent-gold text-sm mb-2">
                    <strong>Finger/Usage:</strong> {selectedProduct.finger}
                  </p>
                )}
                
                {selectedProduct.metal && (
                  <p className="text-accent-gold text-sm mb-4">
                    <strong>Metal:</strong> {selectedProduct.metal}
                  </p>
                )}
                
                <p className="font-serif text-white/90 mb-6">
                  {selectedProduct.description}
                </p>
                
                {selectedProduct.benefits && (
                  <div className="mb-6">
                    <h3 className="font-serif text-accent-gold text-lg mb-3">Astrological Benefits:</h3>
                    <p className="font-serif text-white/80 text-sm mb-4">
                      {selectedProduct.benefits}
                    </p>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="font-serif text-accent-gold text-lg mb-3">Properties & Benefits:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.properties.map((property) => (
                      <span
                        key={property}
                        className="px-3 py-1 bg-accent-neon-glow/20 text-accent-neon-glow text-sm rounded-full"
                      >
                        {property}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <span className="font-handwritten text-2xl text-accent-gold">
                    {selectedProduct.price}
                  </span>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1" size="sm">
                    {selectedProduct.price === 'Contact for Price' ? 'Inquire Now' : 'Add to Cart'}
                  </Button>
                  <Button variant="outline" size="sm" onClick={closeModal}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}