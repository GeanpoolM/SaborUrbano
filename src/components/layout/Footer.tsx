import { SiVisa, SiMastercard, SiAmericanexpress, SiWhatsapp } from "react-icons/si";
import FadeIn from "@/components/FadeIn";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border/30 pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">

          {/* Col 1 */}
          <FadeIn direction="up" delay={0}>
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection("#hero"); }}
              className="font-serif text-2xl font-bold tracking-wider text-primary block mb-6"
            >
              SABOR URBANO
            </a>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              Donde la tradición culinaria se encuentra con la innovación para crear experiencias memorables para el paladar.
            </p>
          </FadeIn>

          {/* Col 2 */}
          <FadeIn direction="up" delay={0.1}>
            <h4 className="font-bold text-foreground uppercase tracking-widest text-sm mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {['Nosotros', 'Menú', 'Galería', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(`#${item.toLowerCase()}`); }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Col 3 */}
          <FadeIn direction="up" delay={0.2}>
            <h4 className="font-bold text-foreground uppercase tracking-widest text-sm mb-6">Contáctanos</h4>
            <p className="text-muted-foreground font-light mb-6">
              ¿Tienes alguna consulta o quieres hacernos llegar un mensaje? Escríbenos directamente por WhatsApp.
            </p>
            <a
              href="https://wa.me/51913552558?text=Hola%2C%20quiero%20hacer%20una%20consulta%20a%20Sabor%20Urbano"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#20bc5a] transition-colors shadow-md"
            >
              <SiWhatsapp size={20} />
              Escríbenos
            </a>
          </FadeIn>

        </div>

        {/* Bottom Bar */}
        <FadeIn direction="up" delay={0.3}>
          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Sabor Urbano. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <SiVisa size={24} className="hover:text-foreground transition-colors" />
              <SiMastercard size={24} className="hover:text-foreground transition-colors" />
              <SiAmericanexpress size={24} className="hover:text-foreground transition-colors" />
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
