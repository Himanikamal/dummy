import { products } from '../data';
import { ShoppingBag, Check } from 'lucide-react';

export default function Products() {
  return (
    <div className="animate-in fade-in duration-500 py-12 md:py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Our Shoe Collection
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover the perfect pair for every occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col group">
              <div className="h-72 bg-surface-50 flex items-center justify-center relative overflow-hidden p-6 group-hover:p-0 transition-all duration-500">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl group-hover:rounded-none group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/0 to-surface-100/0 group-hover:from-brand-500/20 group-hover:to-brand-400/10 transition-colors duration-500 pointer-events-none"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-surface-900 shadow-lg border border-white/50">
                  {product.price}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col relative bg-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 font-display">{product.name}</h2>
                <p className="text-gray-500 leading-relaxed mb-6 flex-grow">{product.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <div className="mt-0.5 mr-3 bg-brand-50 rounded-full p-1">
                          <Check className="h-3 w-3 text-brand-600 shrink-0" strokeWidth={3} />
                        </div>
                        <span className="font-medium text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full py-4 px-6 bg-surface-950 hover:bg-brand-600 text-white rounded-2xl font-medium transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-xl hover:shadow-brand-500/20 active:scale-[0.98]">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
