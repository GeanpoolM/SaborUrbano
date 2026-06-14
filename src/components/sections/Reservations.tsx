import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon, Clock, Users, PhoneCall, CheckCircle2, Copy, Check } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Debe ser un correo electrónico válido." }),
  phone: z.string().min(8, { message: "Número de teléfono inválido." }),
  date: z.date({ required_error: "Seleccione una fecha." }),
  time: z.string({ required_error: "Seleccione una hora." }),
  guests: z.string({ required_error: "Seleccione el número de personas." }),
  notes: z.string().optional(),
});

export default function Reservations() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  function copyPhone() {
    navigator.clipboard.writeText("+51913552558");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          date: values.date.toISOString(),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Error al enviar la reservación.");
      }
      setIsSuccess(true);
      form.reset();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Error al enviar. Intente de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Generate times from 12:00 to 22:00 every 30 mins
const times: string[] = [];

for (let i = 12; i <= 22; i++) {
  times.push(`${i}:00`);
  if (i !== 22) {
    times.push(`${i}:30`);
  }
}

  return (
    <section id="reservaciones" className="py-24 md:py-32 bg-card relative bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')] bg-fixed bg-cover bg-center">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Asegure su lugar</h2>
            <p className="text-muted-foreground font-light text-lg">
              Reserve su mesa en SABOR URBANO para una experiencia gastronómica inolvidable.
            </p>
          </div>

          <div className="bg-card border border-border/50 p-8 md:p-12 shadow-2xl">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle2 className="w-20 h-20 text-primary mb-6" />
                <h3 className="font-serif text-3xl font-bold text-foreground mb-4">Reserva Confirmada</h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                  Hemos enviado los detalles de su reservación a su correo electrónico. ¡Le esperamos con ansias!
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 uppercase tracking-widest"
                >
                  Hacer otra reserva
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-muted-foreground font-normal uppercase tracking-wider text-xs mb-2">Fecha</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full h-12 bg-input border-border text-left font-normal hover:bg-input/80 hover:text-foreground",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP", { locale: es })
                                  ) : (
                                    <span>Seleccionar fecha</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date(new Date().setHours(0, 0, 0, 0))
                                }
                                initialFocus
                                className="bg-card border-border"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground font-normal uppercase tracking-wider text-xs mb-2">Hora</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-input border-border focus:ring-primary">
                                <SelectValue placeholder="Seleccionar hora" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border-border max-h-[300px]">
                              {times.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground font-normal uppercase tracking-wider text-xs mb-2">Personas</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-input border-border focus:ring-primary">
                                <SelectValue placeholder="Número de personas" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border-border">
                              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num} {num === 1 ? 'Persona' : 'Personas'}
                                </SelectItem>
                              ))}
                              <SelectItem value="9+">Más de 8 (Grupos)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground font-normal uppercase tracking-wider text-xs mb-2">Nombre completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. Juan Pérez" className="h-12 bg-input border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground font-normal uppercase tracking-wider text-xs mb-2">Teléfono</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. +1 555 123 4567" className="h-12 bg-input border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground font-normal uppercase tracking-wider text-xs mb-2">Correo electrónico</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="ejemplo@correo.com" className="h-12 bg-input border-border focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground font-normal uppercase tracking-wider text-xs mb-2">Peticiones especiales (Opcional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Alergias, celebraciones, etc." 
                            className="resize-none bg-input border-border focus-visible:ring-primary min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 text-lg uppercase tracking-widest font-medium transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></span>
                        Procesando...
                      </span>
                    ) : (
                      "Confirmar Reservación"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">¿Prefiere hacer su reserva por teléfono?</p>
            <button
              onClick={copyPhone}
              data-testid="button-copy-phone-reservations"
              className="inline-flex items-center gap-3 text-2xl font-serif text-foreground hover:text-primary transition-colors group"
            >
              <PhoneCall className="text-primary" />
              +51 913 552 558
              <span className="flex items-center gap-1 text-sm">
                {copiedPhone
                  ? <><Check size={15} className="text-green-400" /><span className="text-green-400 font-sans">Copiado</span></>
                  : <Copy size={15} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                }
              </span>
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
