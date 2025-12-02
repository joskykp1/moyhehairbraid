import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <section className="py-24 bg-cream min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-dark mb-4">Our Expertise</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4">Located at Church Street, Concord, NC 28025</p>
          <p className="text-xl md:text-2xl text-gray-700 mt-8 max-w-4xl mx-auto leading-relaxed">
            With over 30 years of experience in African hair braiding, Moyhe Hair brings authentic expertise and artistry to every style.
            Our skilled stylists combine traditional techniques with modern trends to create stunning, long-lasting braids that protect and beautify your natural hair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Cornrows", desc: "Tension-free, natural looking braids that protect your edges.", img: "/images/conrows.jpg" },
            { title: "Boho Box Braids", desc: "The trendy bohemian look with curly ends for a soft finish.", img: "/images/bohoboxpp.jpg" },
            { title: "Traditional Box Braids", desc: "Classic, versatile, and long-lasting protective style.", img: "/images/boxpp.jpg" },
            { title: "Mohawk Braids", desc: "Edgy, bold style with shaved sides and braided center strip.", img: "/images/borabora.jpg" },
            { title: "Bora Braids", desc: "Unique braided patterns for a distinctive look.", img: "/images/fppic.jpg"},
            { title: "Bob Box Braids ", desc: "Classic braids patterns for vintage look.", img: "/images/bobbox.jpg" },
            { title: "Stitche conrows ", desc: "Unique braided patterns for a pretty look.", img: "/images/stitches.jpg" },
            { title: "Knotless Braids", desc: " Long-lasting protective style.", img: "/images/IMG-20251024-WA0054.jpg" },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-serif font-bold text-dark">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <div className="flex flex-col gap-3 mb-4">
                  <a href="tel:+17046417227" className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-all text-center">
                    📞 Book Now
                  </a>
                  <a href="sms:+17046417227" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all text-center">
                    💬 Send Message
                  </a>
                </div>
                <button className="text-primary font-bold uppercase tracking-wider text-sm hover:text-secondary flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

