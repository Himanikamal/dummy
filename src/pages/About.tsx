import { Users, Target, Rocket, Shield, Heart, Zap, Leaf } from 'lucide-react';

export default function About() {
  const values = [
    { title: 'Quality First', icon: Shield },
    { title: 'Customer Focus', icon: Heart },
    { title: 'Innovation', icon: Zap },
    { title: 'Sustainability', icon: Leaf },
    { title: 'Integrity', icon: Users },
  ];

  return (
    <div className="animate-in fade-in duration-500 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            About <span className="text-brand-600">Walk & Talk</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Founded in 2023, Walk & Talk was created with a simple mission: to provide footwear that helps people move confidently and comfortably.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-brand-50 p-8 md:p-12 rounded-3xl">
            <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-brand-600 mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become a leading footwear brand recognized for innovation, quality, and customer satisfaction.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl">
            <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-gray-900 mb-6">
              <Rocket className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-0.5 shadow-sm text-xs font-bold">1</span>
                Deliver premium footwear at affordable prices.
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-0.5 shadow-sm text-xs font-bold">2</span>
                Promote comfort without compromising style.
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-0.5 shadow-sm text-xs font-bold">3</span>
                Build long-term relationships with customers.
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-600 mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our dedicated team of designers, craftsmen, and customer service professionals work together to create exceptional footwear experiences.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
