import { Baby, Leaf } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const pediatriaItems = [
  "Acompanhamento desde o pré-natal",
  "Orientação sobre amamentação",
  "Sono infantil",
  "Alimentação e introdução alimentar",
  "Alergias e imunidade",
  "Crescimento e desenvolvimento",
  
];

const homeopatiaItems = [
  "Atendimento individualizado",
  "Consulta aprofundada",
  "Avaliação integral do paciente",
  "Abordagem complementar definida em consulta médica",
  "Acompanhamento contínuo",
];

const SpecialtiesSection = () => (
  <section id="especialidades" className="py-16 md:py-24 bg-warm">
    <div className="container">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
        Especialidades
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Pediatria */}
        <div className="bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <Baby className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Pediatria</h3>
          </div>
          <ul className="space-y-2.5 mb-6">
            {pediatriaItems.map((item) => (
              <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <WhatsAppButton>
            Agendar Consulta
          </WhatsAppButton>
        </div>

        {/* Homeopatia */}
        <div className="bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Homeopatia para Crianças e Adultos</h3>
          </div>
          <ul className="space-y-2.5 mb-6">
            {homeopatiaItems.map((item) => (
              <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <WhatsAppButton href="https://wa.me/5511994404507?text=Ol%C3%A1,%20conheci%20o%20Dr%20Moises%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20de%20homeopatia%20com%20ele">
            Agendar Consulta
          </WhatsAppButton>
        </div>
      </div>
    </div>
  </section>
);

export default SpecialtiesSection;
