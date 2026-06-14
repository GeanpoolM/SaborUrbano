import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Flame, WheatOff } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("entradas");

  const menuData = {
    entradas: [
      { name: "Ceviche de Robalo", description: "Leche de tigre al maracuyá, maíz tostado, puré de camote, rábano.", price: "$18", icons: [], image: "https://res.cloudinary.com/dumhdaeeg/image/upload/cevic_E5PHLmW6nis0JRepcGh9xZCa7l2jto_kwjqfh" },
      { name: "Burrata Ahumada", description: "Tomates heirloom, pesto de pistacho, reducción de balsámico, focaccia.", price: "$22", icons: [], image: "https://res.cloudinary.com/dumhdaeeg/image/upload/Burrata-affumicata-7_Gran-1_h5j6yn" },
      { name: "Pulpo a la Parrilla", description: "Emulsión de aguacate, ceniza de cebolla, aceite de cilantro.", price: "$24", icons: [], image: "https://res.cloudinary.com/dumhdaeeg/image/upload/Pulpo_a_la_parrila_Pescado_y_mariscos_Franklin_mxb2hj" },
      { name: "Croquetas de Asado", description: "Relleno cremoso de asado de tira, alioli de ajo negro, brotes.", price: "$16", icons: [], image: "https://res.cloudinary.com/dumhdaeeg/image/upload/croquetas-de-carne-de-cocido_00000000_241023145941_600x600_laxtpt" },
    ],
    fuertes: [
      { name: "Filete Mignon", description: "Puré trufado, espárragos glaseados, demi-glace de vino tinto.", price: "$42", icons: [], image: "https://res.cloudinary.com/dumhdaeeg/image/upload/images_kvgz6c" },
      { name: "Risotto de Hongos Silvestres", description: "Variedad de hongos, aceite de trufa blanca, parmesano reggiano.", price: "$28", icons: [], image: "https://res.cloudinary.com/dumhdaeeg/image/upload/images_1_kejhjf" },
      { name: "Salmón en Costra de Hierbas", description: "Quinoa al limón, salsa de mantequilla blanca y alcaparras.", price: "$36", icons: [], image: "https://res.cloudinary.com/dumhdaeeg/image/upload/GettyImages-506166922-1_gntqmg" },
      { name: "Cordero a Baja Temperatura", description: "Cocinado 24h, cuscús especiado, reducción de granada y menta.", price: "$45", icons: [], image: "https://res.cloudinary.com/dumhdaeeg/image/upload/images_2_vmotyq" },
    ],
    postres: [
      { name: "Volcán de Chocolate", description: "Centro líquido de chocolate amargo, helado de vainilla de Madagascar.", price: "$14", icons: [], image: "https://res.cloudinary.com/dumhdaeeg/image/upload/images_3_c3f5mu" },
      { name: "Tarta de Maracuyá Desestructurada", description: "Crema de la pasión, merengue suizo, tierra de cacao.", price: "$12", icons: [], image: "https://res.cloudinary.com/dumhdaeeg/image/upload/images_4_ifrv5a" },
      { name: "Milhojas de Crema Pastelera", description: "Capas crujientes, crema de vainilla, frutos rojos confitados.", price: "$15", icons: [], image: "https://res.cloudinary.com/dumhdaeeg/image/upload/images_5_lebv4g" },
    ],
    bebidas: [
      { name: "Infusión de Frutos del Bosque", description: "Té frío artesanal con frutos rojos y un toque de romero.", price: "$8", icons: [], image: "https://res.cloudinary.com/dumhdaeeg/image/upload/infusion-de-frutos-rojos.r_d.666-414-5410_w4trrx" },
      { name: "Vinos por Copa", description: "Selección del sommelier (Tinto, Blanco, Rosado).", price: "$12 - $18", icons: [], image: "https://res.cloudinary.com/dumhdaeeg/image/upload/images_6_ywixwg" },
    ]
  };

  const categories = [
    { id: "entradas", label: "Entradas" },
    { id: "fuertes", label: "Platos Fuertes" },
    { id: "postres", label: "Postres" },
    { id: "bebidas", label: "Bebidas" },
  ];

  const getIcon = (type: string) => {
  switch(type) {
    case "vegetariano":
      return <Leaf size={16} className="text-secondary" />;
    case "picante":
      return <Flame size={16} className="text-destructive" />;
    case "sin-gluten":
      return <WheatOff size={16} className="text-muted-foreground" />;
    default:
      return null;
    }
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Nuestra Propuesta</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">El Menú</h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="entradas" onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto bg-transparent mb-12 justify-center gap-2 md:gap-6 border-b border-border rounded-none p-0">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary text-muted-foreground uppercase tracking-wider text-sm md:text-base py-3 px-4 transition-all"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0 outline-none">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                  >
                    {menuData[category.id as keyof typeof menuData].map((item, idx) => (
                      <FadeIn key={idx} delay={idx * 0.1} direction="up">
                        <div className="group cursor-default">
                          {(item as { image?: string }).image && (
                            <img
                              src={(item as { image?: string }).image}
                              alt={item.name}
                              loading="lazy"
                              className="w-full aspect-square object-cover rounded-sm mb-4"
                            />
                          )}
                          <div className="flex justify-between items-end mb-2 border-b border-border/50 pb-2">
                            <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                            <span className="font-sans font-medium text-lg text-primary">{item.price}</span>
                          </div>
                          <p className="text-muted-foreground font-light text-sm leading-relaxed mb-3">
                            {item.description}
                          </p>
                          {item.icons.length > 0 && (
                            <div className="flex gap-2">
                              {item.icons.map((iconType, i) => (
                                <span key={i}>{getIcon(iconType)}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </FadeIn>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>

        </div>
      </div>

      {/* Highlighted Section */}
      <div className="mt-24 md:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <FadeIn direction="left" className="bg-background p-12 md:p-24 flex flex-col justify-center">
            <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4">Recomendación</span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Platos del Chef</h3>
            <p className="text-muted-foreground font-light text-lg mb-8">
              Una selección curada semanalmente por el Chef Alejandro, donde experimenta con ingredientes de temporada y técnicas vanguardistas. Pregunte a su mesero por las especialidades de esta semana.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.15} className="h-64 md:h-auto min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
              alt="Plato especial del chef"
              className="w-full h-full object-cover"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
