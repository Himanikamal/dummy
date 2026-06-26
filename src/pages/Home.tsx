import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, ThumbsUp } from 'lucide-react';
import { products } from '../data';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative bg-surface-950 py-24 lg:py-32 overflow-hidden">
        {/* Background visual accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-500 blur-[120px]"></div>
           <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-600 blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span>New Collection 2026</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Welcome to <span className="text-brand-500">Walk & Talk</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light">
              Your trusted destination for stylish, comfortable, and high-quality footwear. We believe that every step matters, whether you're heading to work, going for a run, or exploring new places.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-full text-white bg-brand-600 hover:bg-brand-500 transition-all shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_25px_rgba(234,88,12,0.6)] hover:-translate-y-0.5"
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promises Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Promise</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We are committed to delivering the best experience with every pair.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Premium Quality', icon: Star },
              { title: 'Affordable Prices', icon: ThumbsUp },
              { title: 'Latest Trends', icon: ShieldCheck },
              { title: 'Fast Delivery', icon: Truck },
            ].map((promise, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="h-16 w-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-5 group-hover:scale-110 transition-transform group-hover:bg-brand-500 group-hover:text-white group-hover:rotate-3">
                  <promise.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-gray-900">{promise.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-gray-500">Handpicked selections for you.</p>
            </div>
            <Link to="/products" className="hidden sm:inline-flex items-center text-brand-600 font-medium hover:text-brand-700">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-gray-100 group">
                <div className="h-56 bg-surface-50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative">
                   <img 
                     src={product.imageUrl} 
                     alt={product.name}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-brand-600 font-bold mb-4">{product.price}</p>
                </div>
                <Link
                  to="/products"
                  className="w-full text-center px-4 py-3 bg-surface-50 hover:bg-brand-600 text-surface-900 hover:text-white rounded-xl font-medium transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/products" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700">
              View All Products <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us & CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Walk & Talk?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Walk & Talk, we combine comfort, durability, and style to create footwear that supports your lifestyle. Our shoes are designed using high-quality materials and modern technology to ensure maximum comfort.
            </p>
          </div>
          
          <div className="p-8 md:p-14 bg-surface-950 rounded-3xl text-white shadow-[0_20px_50px_rgba(2ea,88,12,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 blur-[80px] rounded-full"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-brand-500/20 blur-[80px] rounded-full"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Step into comfort today!</h2>
              <p className="text-gray-300 mb-10 max-w-lg mx-auto text-lg font-light">
                Ready to experience the perfect blend of style and comfort?
              </p>
              <Link
                to="/products"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold rounded-full text-surface-950 bg-white hover:bg-brand-50 hover:text-brand-600 hover:scale-105 transition-all shadow-lg"
              >
                Explore Our Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
