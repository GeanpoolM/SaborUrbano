import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop", alt: "Plating exquisite dish" },
    { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop", alt: "Restaurant interior ambiance" },
    { src: "https://images.unsplash.com/photo-1478144592103-25e218a04891?q=80&w=1975&auto=format&fit=crop", alt: "Cocktail preparation" },
    { src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop", alt: "Gourmet steak dish" },
    { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop", alt: "Wine pouring" },
    { src: "https://images.unsplash.com/photo-1505826759037-406b40feb4cd?q=80&w=2072&auto=format&fit=crop", alt: "Fresh ingredients" },
  ];

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Experiencia</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Nuestra Galería</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, index) => (
            <FadeIn key={index} delay={index * 0.08} direction="up">
              <div
                className="relative aspect-square overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="text-primary w-10 h-10" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
