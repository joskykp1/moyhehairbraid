import { Link } from 'react-router-dom';
import { Phone, Instagram, Facebook, MapPin, Calendar } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-cream font-sans text-dark">
      <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/images/moyhe hair branding logo.jpg" alt="Moyhe Logo" className="h-12 w-12 rounded-full object-cover border-2 border-primary" />
            <div className="text-2xl font-serif font-bold text-primary tracking-wide">Moyhe Hair</div>
          </div>
          <nav className="hidden md:flex space-x-8 font-medium">
            <Link to="/" className="text-dark hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="text-dark hover:text-primary transition-colors">Services</Link>
            <Link to="/gallery" className="text-dark hover:text-primary transition-colors">Gallery</Link>
            <Link to="/blog" className="text-dark hover:text-primary transition-colors">Blog</Link>
            <Link to="/contact" className="text-dark hover:text-primary transition-colors">Contact</Link>
          </nav>
          <Link to="/contact" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200 inline-block">
            Book Now
          </Link>
        </div>
      </header>

      <main>
        {children}
      </main>

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

export default Layout;