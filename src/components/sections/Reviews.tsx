import { useEffect } from "react";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import FadeIn from "@/components/FadeIn";

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  const reviews = [
    {
      name: "María Gómez",
      text: "Una experiencia culinaria excepcional. La fusión de sabores en el Ceviche de Robalo es algo que nunca había probado. El servicio es impecable y el ambiente perfecto para una cena romántica.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Carlos Ruiz",
      text: "El Filete Mignon estaba cocinado a la perfección. Se nota la pasión y el respeto por los ingredientes en cada plato. Sin duda, el mejor restaurante de la ciudad.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Laura Jiménez",
      text: "Celebramos nuestro aniversario aquí y fue mágico. El personal fue extremadamente atento y los postres son verdaderas obras de arte. El Volcán de Chocolate es imperdible.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Roberto Méndez",
      text: "Como aficionado a la buena mesa, Sabor Urbano superó todas mis expectativas. La carta de vinos complementa maravillosamente la propuesta gastronómica del chef.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section id="resenas" className="py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Lo que dicen nuestros clientes</h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {reviews.map((review, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:pl-6">
                    <div className="bg-card p-8 md:p-12 text-center h-full flex flex-col items-center justify-center border border-border/30">
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground font-serif text-lg md:text-xl italic mb-8 leading-relaxed max-w-2xl">
                        "{review.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                        />
                        <span className="font-bold text-foreground uppercase tracking-widest text-sm">{review.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
