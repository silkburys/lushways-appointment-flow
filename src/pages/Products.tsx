
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Instagram, PhoneCall, Mail, MapPin, ChevronDown, Grid3X3, List, Search } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showCount, setShowCount] = useState(12);
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid');

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Absolut Repair Mask',
      brand: 'L\'OREAL',
      price: 160.00,
      originalPrice: 200.00,
      discount: '20% Off',
      image: '/lovable-uploads/a160d735-8920-49a3-a9a7-69c27b4b3b58.png',
      category: 'hair'
    },
    {
      id: 2,
      name: 'Absolut Repair Shampoo, 300ml',
      brand: 'L\'OREAL',
      price: 140.00,
      originalPrice: 200.00,
      discount: '30% Off',
      image: '/lovable-uploads/a160d735-8920-49a3-a9a7-69c27b4b3b58.png',
      category: 'hair'
    },
    {
      id: 3,
      name: 'Absolute repair Set Mask & Shampoo (Copy)',
      brand: 'L\'OREAL',
      price: 320.00,
      originalPrice: 400.00,
      discount: '20% Off',
      image: '/lovable-uploads/a160d735-8920-49a3-a9a7-69c27b4b3b58.png',
      category: 'hair'
    },
    {
      id: 4,
      name: 'Liss Serum ANTI-FRIZZ BLOWDRY SERUM',
      brand: 'L\'OREAL',
      price: 95.00,
      originalPrice: 120.00,
      discount: '20% Off',
      image: '/lovable-uploads/a160d735-8920-49a3-a9a7-69c27b4b3b58.png',
      category: 'hair'
    },
    {
      id: 5,
      name: 'Loreal Mask',
      brand: 'L\'OREAL',
      price: 180.00,
      originalPrice: 220.00,
      discount: '18% Off',
      image: '/lovable-uploads/a160d735-8920-49a3-a9a7-69c27b4b3b58.png',
      category: 'hair'
    },
    {
      id: 6,
      name: 'Loreal Set Mask & Shampoo',
      brand: 'L\'OREAL',
      price: 350.00,
      originalPrice: 420.00,
      discount: '17% Off',
      image: '/lovable-uploads/a160d735-8920-49a3-a9a7-69c27b4b3b58.png',
      category: 'hair'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'hair', name: 'Hair Care', count: products.filter(p => p.category === 'hair').length },
    { id: 'skin', name: 'Skin Care', count: 0 },
    { id: 'nails', name: 'Nail Care', count: 0 }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/">
                <img 
                  src="/lovable-uploads/b3235b7a-c67c-4b61-8d20-82fc8d031c95.png" 
                  alt="LUSHWAYS" 
                  className="h-8 md:h-10 cursor-pointer" 
                />
              </a>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-amber-100 hover:text-white text-sm font-medium">HOME</a>
              <a href="/quick-pay" className="text-amber-100 hover:text-white text-sm font-medium">QUICK PAY</a>
              <a href="/terms" className="text-amber-100 hover:text-white text-sm font-medium">TERMS & CONDITIONS</a>
              <a href="/privacy" className="text-amber-100 hover:text-white text-sm font-medium">PRIVACY POLICY</a>
              <a href="/contact" className="text-amber-100 hover:text-white text-sm font-medium">CONTACT US</a>
            </nav>
            
            <Button 
              variant="link" 
              className="text-amber-100 hover:text-white"
            >
              LOG IN
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Product Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center justify-between">
                PRODUCT CATEGORIES
                <ChevronDown className="h-4 w-4" />
              </h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`block w-full text-left py-2 px-3 rounded hover:bg-gray-50 ${
                      selectedCategory === category.id ? 'text-amber-600 font-medium' : 'text-gray-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Price */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center justify-between">
                FILTER BY PRICE
                <ChevronDown className="h-4 w-4" />
              </h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setPriceRange('100-200')}
                  className={`block w-full text-left py-2 px-3 rounded hover:bg-gray-50 ${
                    priceRange === '100-200' ? 'text-amber-600 font-medium' : 'text-gray-600'
                  }`}
                >
                  100.00 د.إ-200.00 د.إ
                </button>
                <button 
                  onClick={() => setPriceRange('200-400')}
                  className={`block w-full text-left py-2 px-3 rounded hover:bg-gray-50 ${
                    priceRange === '200-400' ? 'text-amber-600 font-medium' : 'text-gray-600'
                  }`}
                >
                  200.00 د.إ-400.00 د.إ
                </button>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:w-3/4">
            {/* Breadcrumb */}
            <div className="mb-6">
              <p className="text-gray-600">
                <span className="font-semibold text-amber-600">Local</span> Showing all {filteredProducts.length} results
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Show:</span>
                  <select 
                    value={showCount}
                    onChange={(e) => setShowCount(Number(e.target.value))}
                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                  >
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={36}>36</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                  >
                    <option value="default">Default sorting</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProducts.slice(0, showCount).map(product => (
                <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                    <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-semibold text-gray-800">{product.price.toFixed(2)} د.إ</span>
                      {product.originalPrice && (
                        <>
                          <span className="text-sm text-gray-500 line-through">{product.originalPrice.toFixed(2)} د.إ</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{product.discount}</span>
                        </>
                      )}
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-amber-100 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">LUSHWAYS</h3>
              <p className="mb-4">Professional beauty and salon services across Dubai.</p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Instagram size={20} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <PhoneCall size={16} className="mr-2" /> 
                  <a href="tel:0521622999" className="hover:text-white">052 162 2999</a>
                </p>
                <p className="flex items-center">
                  <Mail size={16} className="mr-2" /> 
                  <a href="mailto:booking@lushways.com" className="hover:text-white">booking@lushways.com</a>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/quick-pay" className="hover:text-white">Quick Pay</a></li>
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Lushways. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
