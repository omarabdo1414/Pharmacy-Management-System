import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Pain Relief Tablets',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400',
    category: 'Pain Relief'
  },
  {
    name: 'Vitamin C Complex',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?auto=format&fit=crop&q=80&w=400',
    category: 'Vitamins'
  },
  {
    name: 'First Aid Kit',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400',
    category: 'First Aid'
  },
  {
    name: 'Digital Thermometer',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1584308666999-b85cdf62a0dc?auto=format&fit=crop&q=80&w=400',
    category: 'Medical Devices'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of high-quality healthcare products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-emerald-600 font-medium">
                  {product.category}
                </span>
                <h3 className="font-semibold text-gray-900 mt-1">
                  {product.name}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}