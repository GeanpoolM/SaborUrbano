import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

const WA_URL =
  "https://wa.me/51913552558?text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Sabor%20Urbano";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.05 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="button-whatsapp-float"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg shadow-black/40 pl-4 pr-5 py-3 group"
          aria-label="Contactar por WhatsApp"
        >
          <SiWhatsapp size={24} color="#fff" />
          <span className="text-sm font-semibold whitespace-nowrap">
            Escríbenos
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
