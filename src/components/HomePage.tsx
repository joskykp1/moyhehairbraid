import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
        <img
          src="/images/fppic.jpg"
          alt="Background"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
      </div>

      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-accent text-lg md:text-xl mb-4 tracking-widest uppercase font-semibold"
        >
          Charlotte & Concord, NC
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
        >
          The Art of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">African Braids</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-10 font-light text-gray-200"
        >
          Elevate your style with our STUNNING services.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a href="tel:+17046417227" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl inline-block text-center animate-pulse">
            📞 Call Now
          </a>
          <a href="sms:+17046417227" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl inline-block text-center animate-bounce">
            💬 Send SMS
          </a>
          <a href="/services" className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary transition-all shadow-lg hover:shadow-xl inline-block text-center">
            View Services
          </a>
          <a href="/gallery" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all inline-block text-center">
            Our Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;