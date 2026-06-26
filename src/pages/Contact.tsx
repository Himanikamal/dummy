import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="animate-in fade-in duration-500 py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We would love to hear from you! Reach out for any questions or support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Information */}
          <div>
            <div className="bg-surface-950 text-white rounded-[2rem] p-8 md:p-12 mb-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-brand-600/20 blur-[60px] rounded-full pointer-events-none"></div>
              <h2 className="text-3xl font-bold mb-10 font-display relative z-10">Store Information</h2>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-400 mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-300 mb-1">Address</h3>
                    <p className="text-gray-400 leading-relaxed">
                      123 Fashion Street,<br />
                      New Delhi, India - 110001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-400 mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-300 mb-1">Phone</h3>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-400 mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-300 mb-1">Email</h3>
                    <a href="mailto:info@walkandtalk.com" className="text-gray-400 hover:text-white transition-colors">
                      info@walkandtalk.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-brand-400 mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-300 mb-1">Website</h3>
                    <a href="http://www.walkandtalk.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      www.walkandtalk.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Business Hours</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-brand-600">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-4 rounded-2xl bg-surface-50 border border-gray-200 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-4 rounded-2xl bg-surface-50 border border-gray-200 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-5 py-4 rounded-2xl bg-surface-50 border border-gray-200 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all placeholder:text-gray-400"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-5 py-4 rounded-2xl bg-surface-50 border border-gray-200 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all placeholder:text-gray-400"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl bg-surface-50 border border-gray-200 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all resize-none placeholder:text-gray-400"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 px-6 bg-brand-600 hover:bg-brand-500 active:scale-[0.98] text-white rounded-2xl font-bold transition-all flex items-center justify-center shadow-[0_10px_20px_rgba(234,88,12,0.3)] hover:shadow-[0_15px_25px_rgba(234,88,12,0.4)]"
              >
                <Send className="h-5 w-5 mr-3" />
                Submit Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
