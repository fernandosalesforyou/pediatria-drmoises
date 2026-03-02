import { Star } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const testimonials = [
  {
    text: "Já fazem 16 anos que meu filho fez um tratamento homeopático com o Doutor Moises por conta da sinusite e rinite, nunca mais ele teve problema, médico excelente, sábio e experiente naquilo que faz. Adorei o atendimento e conduta. Podem levar seus filhos sem medo que será tratado com um profissional muito capacitado naquilo que se propôs a se dedicar.",
    author: "Renata Vasconcelos",
  },
  {
    text: "Eu serei eternamente grata ao Dr Moises. Depois de passar por pediatras e outros profissionais \"renomados\" de SP e não descobrirem o que minha bebê tinha e chorava ao mamar, ele em instantes percebeu a pouca movimentação na língua. Médico experiente, objetivo, seguro e capacitado, sem rodeios e frufrus. Tudo que uma família/pais de primeira viagem precisam. Senti muita confiança e não troco mais!",
    author: "Ariane Guimarães",
  },
  {
    text: "Dr Moises foi pediatra do meu irmão e hoje é do meu filho. Ele é muito atencioso, dedicado, prático e apaixonado pela sua profissão. Precisei mandar email pra ele algumas vezes e ele sempre me responde (mesmo durante o final de semana)... sinto que meu filho tem um pediatra de verdade.",
    author: "Paula Zapparolli",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-16 md:py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
        O que dizem as famílias atendidas
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {testimonials.map((t) => (
          <div key={t.author} className="bg-warm rounded-xl p-6 border border-border">
            <Stars />
            <p className="font-body text-sm text-muted-foreground italic leading-relaxed mb-4">"{t.text}"</p>
            <p className="font-body text-xs font-semibold text-foreground">— {t.author}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <WhatsAppButton>Agendar Minha Consulta</WhatsAppButton>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
