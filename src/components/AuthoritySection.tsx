import { Stethoscope, BookOpen, GraduationCap, Youtube, Newspaper, Star } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const items = [
  {
    icon: Stethoscope,
    title: "Médico Especialista",
    text: "Formado pela Faculdade de Medicina da USP com título de especialista em pediatria pela Associação Médica Brasileira (AMB). Título de especialista em homeopatia pela Associação Médica Homeopática Brasileira (AMHB).",
  },
  {
    icon: BookOpen,
    title: "Autor de 5 Livros",
    text: "GERAR E NASCER um canto de amor e aconchego. CRÔNICAS AGUDAS de aleitamento materno. HOMEOPATIA Mais Simples do Que Parece. É MAMÍFERO QUE FALA NÉ? Dicionário AMAMENTÊS-PORTUGUÊS.",
  },
  {
    icon: GraduationCap,
    title: "Certificações e Atualização Contínua",
    text: "Participação constante em cursos, congressos e atualizações científicas.",
  },
  {
    icon: Youtube,
    title: "Canal no YouTube com +150 mil inscritos",
    text: "Produção de conteúdo educativo em saúde, alcançando milhares de famílias em todo o Brasil.",
  },
  {
    icon: Newspaper,
    title: "Colunista e Presença na Mídia",
    text: "Artigos e participações em revistas e portais especializados.",
  },
  {
    icon: Star,
    title: "Mais de 30 anos de experiência",
    text: "Milhares de famílias atendidas em meu consultório particular.",
  },
];

const AuthoritySection = () => (
  <section className="bg-warm py-16 md:py-24">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
          Reconhecimento e Autoridade na Área Médica
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Experiência consolidada, presença na mídia e produção de conteúdo para milhares de pessoas.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-card rounded-xl p-5 md:p-6 shadow-sm border border-border animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <item.icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
            <h3 className="font-display text-sm md:text-base font-semibold text-foreground mb-1">
              {item.title}
            </h3>
            <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <WhatsAppButton className="text-base">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Agendar Consulta
        </WhatsAppButton>
      </div>
    </div>
  </section>
);

export default AuthoritySection;
