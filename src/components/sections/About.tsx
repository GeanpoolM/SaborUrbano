import { motion } from "framer-motion";
import { Award, Clock, Users } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function About() {
  const stats = [
    { icon: <Clock className="w-8 h-8 text-primary mb-4" />, value: "12", label: "Años de experiencia" },
    { icon: <Award className="w-8 h-8 text-primary mb-4" />, value: "8", label: "Premios culinarios" },
    { icon: <Users className="w-8 h-8 text-primary mb-4" />, value: "+15k", label: "Clientes satisfechos" },
  ];

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <FadeIn direction="left">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Nuestra Historia</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
              Una pasión arraigada en <span className="text-primary italic font-light">cada ingrediente</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed mb-12">
              <p>
                SABOR URBANO nació de una visión simple pero audaz: elevar los sabores tradicionales de nuestra tierra utilizando técnicas culinarias de vanguardia europea. Lo que comenzó como un pequeño bistró hace más de una década, se ha convertido en un referente de la gastronomía contemporánea.
              </p>
              <p>
                Nuestra filosofía se basa en el respeto absoluto por el producto. Trabajamos directamente con productores locales, asegurando que cada ingrediente que llega a nuestra cocina esté en su punto óptimo de frescura y sabor.
              </p>
              <p>
                Creemos que una comida no es solo alimento, es una experiencia que debe despertar los sentidos, evocar memorias y crear momentos inolvidables alrededor de la mesa.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                  <div className="text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-3">
                    <div className="hidden sm:block">{stat.icon}</div>
                    <div>
                      <div className="text-3xl font-serif font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Right Content - Images */}
          <FadeIn direction="right" delay={0.15} className="relative">
            <div className="relative z-10 aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954&auto=format&fit=crop"
                alt="Chef Alejandro Mora plating a dish"
                className="w-full h-full object-cover shadow-2xl"
              />

              {/* Chef Bio Box */}
              <FadeIn delay={0.4} direction="up">
                <div className="absolute -bottom-8 -left-8 md:-left-16 bg-card p-6 md:p-8 shadow-xl border border-border/50 max-w-xs">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Alejandro Mora</h3>
                  <p className="text-primary text-sm uppercase tracking-widest mb-4">Chef Ejecutivo</p>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    "El verdadero arte culinario ocurre cuando la técnica desaparece y solo queda la emoción en el paladar."
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Decorative background box */}
            <div className="absolute top-8 right-8 bottom-8 -left-8 border border-primary/30 z-0 hidden md:block"></div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
