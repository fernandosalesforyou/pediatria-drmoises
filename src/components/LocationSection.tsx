import { MapPin, Phone, Mail, Clock } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const LocationSection = () => (
  <section id="localizacao" className="py-16 md:py-24 bg-warm">
    <div className="container">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
        Localização e Contato
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Info */}
        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div className="font-body text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Endereço</p>
              Rua Itapeva, 202 cj. 119<br />
              Bela Vista, São Paulo – SP<br />
              01332-000
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div className="font-body text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Telefone</p>
              <a href="tel:+5511994404507" className="hover:text-primary transition-colors">(11) 99440-4507</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div className="font-body text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">E-mail</p>
              <a href="mailto:contato@doutormoises.com.br" className="hover:text-primary transition-colors">contato@doutormoises.com.br</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div className="font-body text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Horário</p>
              Segunda a Sexta – 9h às 18h<br />
              Sábado sob consulta
            </div>
          </div>

          <WhatsAppButton className="mt-2">Agendar Consulta</WhatsAppButton>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-sm border border-border h-64 md:h-auto min-h-[280px]">
          <iframe
            title="Localização do Consultório Dr. Moises Chencinski"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098!2d-46.6539!3d-23.5622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x71d7b3b9d0fa6035!2sRua%20Itapeva%2C%20202%20cj.%20119%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
