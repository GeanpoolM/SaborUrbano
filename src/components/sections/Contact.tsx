import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Car, Copy, Check } from "lucide-react";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";
import FadeIn from "@/components/FadeIn";

const PHONE = "+51913552558";
const PHONE_DISPLAY = "+51 913 552 558";
const EMAIL = "geanpool1612@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  function copyPhone() {
    navigator.clipboard.writeText(PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  }

  return (
    <section id="contacto" className="py-0 relative flex flex-col md:flex-row min-h-[600px]">
      {/* Left side - Map */}
      <FadeIn direction="left" className="w-full md:w-1/2 h-[400px] md:h-auto bg-muted relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.684954!2d-77.0114484!3d-12.198324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7266ee612bb%3A0xa9b15c695ca0b97b!2sDonde+V%C3%ADctor!5e0!3m2!1ses!2spe!4v1718000000000!5m2!1ses!2spe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </FadeIn>

      {/* Right side - Info */}
      <div className="w-full md:w-1/2 bg-card p-12 md:p-16 lg:p-24 flex flex-col justify-center">
        <FadeIn delay={0.1}>
          <div className="mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Visítenos</h2>
            <p className="text-muted-foreground font-light text-lg">
              Estamos ubicados en el corazón de la ciudad, listos para brindarle una experiencia memorable.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={0.2}>
            <div className="flex gap-4">
              <MapPin className="text-primary w-6 h-6 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground uppercase tracking-widest text-sm mb-1">Dirección</h4>
                <p className="text-muted-foreground">Calle 51, Chorrillos<br/>Lima, Perú</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex gap-4">
              <Clock className="text-primary w-6 h-6 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground uppercase tracking-widest text-sm mb-1">Horarios</h4>
                <div className="text-muted-foreground grid grid-cols-2 gap-x-8 gap-y-1">
                  <span>Almuerzo:</span>
                  <span>13:00 - 16:00</span>
                  <span>Cena:</span>
                  <span>19:00 - 23:00</span>
                  <span className="col-span-2 text-sm italic mt-2 text-secondary">Cerrado los Lunes</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex gap-4">
              <Phone className="text-primary w-6 h-6 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground uppercase tracking-widest text-sm mb-1">Contacto</h4>
                <button
                  onClick={copyPhone}
                  data-testid="button-copy-phone"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  {PHONE_DISPLAY}
                  <span className="ml-1 flex items-center gap-1 text-xs">
                    {copied
                      ? <><Check size={13} className="text-green-400" /><span className="text-green-400">Copiado</span></>
                      : <Copy size={13} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    }
                  </span>
                </button>
                <button
                  onClick={copyEmail}
                  data-testid="button-copy-email"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  {EMAIL}
                  <span className="ml-1 flex items-center gap-1 text-xs">
                    {copiedEmail
                      ? <><Check size={13} className="text-green-400" /><span className="text-green-400">Copiado</span></>
                      : <Copy size={13} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    }
                  </span>
                </button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex gap-4">
              <Car className="text-primary w-6 h-6 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground uppercase tracking-widest text-sm mb-1">Estacionamiento</h4>
                <p className="text-muted-foreground">Servicio de Valet Parking disponible. Estacionamiento público a 50 metros.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-12 pt-8 border-t border-border/50 flex gap-6">
            <a href="https://www.instagram.com/geanpoolmalasquez/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-input flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              <SiInstagram size={18} />
            </a>
            <a href="https://www.facebook.com/geanpool.malasquezrosas/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-input flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              <SiFacebook size={18} />
            </a>
            <a href="https://w.app/saborurbano" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-input flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              <SiWhatsapp size={18} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
