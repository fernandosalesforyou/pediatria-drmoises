import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O Dr. Moises atende por algum convênio?",
    a: "Atualmente atendo apenas no particular e gero recibo para a solicitação de reembolso junto ao convênio.",
  },
  {
    q: "Como funciona o agendamento?",
    a: "Diretamente pelo WhatsApp.",
  },
  {
    q: "A consulta tem duração média de quanto tempo?",
    a: "O tempo necessário para avaliação cuidadosa e individualizada.",
  },
  {
    q: "Atende adultos?",
    a: "Sim, para consultas em Homeopatia.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-16 md:py-24 bg-warm">
    <div className="container max-w-2xl">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
        Perguntas Frequentes
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg border border-border px-4">
            <AccordionTrigger className="font-body font-semibold text-sm text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-sm text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
