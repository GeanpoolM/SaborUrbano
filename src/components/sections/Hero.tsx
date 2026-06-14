import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
          alt="Fine dining restaurant ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="block text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-6">
            Sabor Urbano
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground font-bold leading-tight mb-6">
            Donde la Tradición <br className="hidden md:block" />
            <span className="italic font-light text-primary">se Reinventa</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-10 font-light">
            Cocina de autor con alma local.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection("#contacto")}
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 text-sm md:text-base uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20"
            >
              Contáctanos
            </button>
            <button
              onClick={() => scrollToSection("#menu")}
              className="w-full sm:w-auto border border-foreground text-foreground px-8 py-4 text-sm md:text-base uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Ver menú
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={() => scrollToSection("#nosotros")}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Descubrir</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
