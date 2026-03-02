import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

const VideoSection = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
          Assista e Conheça Mais Sobre Meu Trabalho
        </h2>
      </div>

      <div className="max-w-4xl mx-auto mb-8">
        <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-border">
          <iframe
            src="https://www.youtube.com/embed/WCmmxR0dAEI?autoplay=1&controls=1&rel=0"
            title="Dr. Moises Chencinski - Pediatria e Homeopatia"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="text-center space-y-4">
        <a
          href="https://youtu.be/WCmmxR0dAEI?si=3ZMlVluVlxV-EJCq"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-body font-semibold text-primary-foreground shadow-md transition-all hover:brightness-110 hover:shadow-lg active:scale-[0.98]"
        >
          <ExternalLink className="w-5 h-5" />
          Assistir no YouTube
        </a>

        <div className="flex justify-center">
          <Badge variant="secondary" className="text-sm px-4 py-1.5">
            📺 +150 mil inscritos no YouTube
          </Badge>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          Conteúdo educativo em saúde para milhares de famílias no Brasil.
        </p>
      </div>
    </div>
  </section>
);

export default VideoSection;
