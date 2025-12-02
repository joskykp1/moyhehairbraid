import { motion } from 'framer-motion';

const GalleryPage = () => {
  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-dark mb-4">Our Gallery</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "/images/boho box6.jpg",
            "/images/bohobox1.jpg",
            "/images/bohobox2.jpg",
            "/images/bohobox3.jpg",
            "/images/bohobox5.jpg",
      "/images/bohoboxpp.jpg",
      "/images/boxpp5.jpg",
            "/images/box4.jpg",
            "/images/boxb1.jpg",
            "/images/boxb3.jpg",
            "/images/bobbox.jpg",
            "/images/bohob.jpg",
            "/images/bohob2.jpg",
            "/images/stitchesc.jpg",
            "/images/stitches.jpg",
            "/images/boxbr.jpg",
            "/images/bstich.jpg",
            "/images/boxb5.jpg",
            "/images/boxb6.jpg",
            "/images/boxb7.jpg",
            "/images/boxb9.jpg",
            "/images/boxb10.jpg",
            "/images/boxb11.jpg",
            "/images/boxbn.jpg",
            "/images/borabora.jpg",
            "/images/conrows.jpg",
            "/images/IMG-20251024-WA0008.jpg",
            "/images/IMG-20251024-WA0019.jpg",
            "/images/IMG-20251024-WA0041.jpg",
            "/images/IMG-20251024-WA0050.jpg",
            "/images/IMG-20251024-WA0053.jpg",
            "/images/IMG-20251024-WA0054.jpg",
            "/images/IMG-20251024-WA0055.jpg",
            "/images/IMG-20251024-WA0056.jpg",
            "/images/IMG-20251024-WA0057.jpg",
            "/images/IMG-20251024-WA0059.jpg",
            "/images/IMG-20251024-WA0060.jpg",
            "/images/IMG-20251024-WA0061.jpg",
            "/images/IMG-20251024-WA0062.jpg",
            "/images/IMG-20251024-WA0063.jpg",
            "/images/IMG-20251024-WA0064.jpg",
            "/images/IMG-20251024-WA0065.jpg",
            "/images/IMG-20251024-WA0067.jpg",
            "/images/IMG-20251024-WA0068.jpg",
            "/images/IMG-20251024-WA0069.jpg",
            "/images/IMG-20251024-WA0070.jpg",
            "/images/IMG-20251024-WA0073.jpg",
            "/images/IMG-20251024-WA0074.jpg",
            "/images/IMG-20251024-WA0075.jpg",
            "/images/IMG-20251024-WA0076.jpg",
            "/images/IMG-20251024-WA0077.jpg",
            "/images/IMG-20251024-WA0080.jpg",
            "/images/IMG-20251024-WA0081.jpg",
            "/images/IMG-20251024-WA0082.jpg",
            "/images/IMG-20251024-WA0085.jpg",
            "/images/IMG-20251024-WA0086.jpg"
          ].map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img src={img} alt={`Hair styling ${index + 1}`} className="w-full h-64 object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;

