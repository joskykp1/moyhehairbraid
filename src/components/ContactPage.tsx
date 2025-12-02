import { Phone, Instagram, Facebook, MapPin, Calendar } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-cream">
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-dark mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none" />
              </div>
              <textarea placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none mb-6"></textarea>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/moyhe hair branding logo.jpg" alt="Moyhe Logo" className="h-10 w-10 rounded-full border border-gray-600" />
                <span className="text-2xl font-serif font-bold">Moyhe Hair</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your premier destination for authentic African hair braiding in Charlotte & Concord. We combine tradition with modern style.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-serif font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3"><Phone size={18} className="text-primary" /> (704) 641-7227</li>
                <li className="flex items-center gap-3"><MapPin size={18} className="text-primary" /> Charlotte & Concord, NC</li>
                <li className="flex items-center gap-3"><Calendar size={18} className="text-primary" /> Mon-Sat: 9am - 7pm</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-serif font-bold mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors"><Instagram size={20} /></a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Moyhe Hair Braiding. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;