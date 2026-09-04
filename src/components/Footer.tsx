import { Instagram, Facebook } from "lucide-react";
import salesforyouLogo from "@/assets/salesforyou-logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-10">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-bold mb-3">Contato</h4>
          <div className="font-body text-sm opacity-80 space-y-1">
            <p>📍 Rua Itapeva, 202 cj. 119</p>
            <p>Bela Vista, São Paulo - SP - 01332-000</p>
            <p>📞 (11) 99440-4507</p>
            <p>📧 contato@doutormoises.com.br</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display text-lg font-bold mb-3">Redes Sociais</h4>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/doutormoises/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-body opacity-80 hover:opacity-100 transition-opacity"
            >
              <Instagram className="w-5 h-5" /> Instagram
            </a>
            <a
              href="https://www.facebook.com/doutormoises.chencinski"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-body opacity-80 hover:opacity-100 transition-opacity"
            >
              <Facebook className="w-5 h-5" /> Facebook
            </a>
          </div>
        </div>

        {/* CRM */}
        <div>
          <h4 className="font-display text-lg font-bold mb-3">Registro Profissional</h4>
          <p className="font-body text-sm opacity-80">
            CRM: 36.349<br />
            RQE Nº 37546 e Nº 37545
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-body opacity-70">
        <span>Feito com ❤️ por</span>
        <a
          href="https://salesforyou.com.br/?utm_source=doutormoises"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={salesforyouLogo}
            alt="Sales for You"
            className="h-10 brightness-0 invert"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
