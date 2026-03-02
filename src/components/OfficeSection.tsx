import WhatsAppButton from "./WhatsAppButton";
import img1 from "@/assets/consultorio-recepcao.jpeg";
import img2 from "@/assets/consultorio-sala.jpeg";
import img3 from "@/assets/consultorio-brinquedos.jpeg";
import img4 from "@/assets/consultorio-atendimento.jpeg";
import img5 from "@/assets/consultorio-pediatria.jpeg";
import img6 from "@/assets/consultorio-porta.jpeg";

const images = [
  { src: img1, alt: "Recepção do consultório" },
  { src: img2, alt: "Sala de consulta" },
  { src: img3, alt: "Espaço infantil com brinquedos" },
  { src: img4, alt: "Sala de atendimento" },
  { src: img5, alt: "Sala de pediatria" },
  { src: img6, alt: "Entrada do consultório" },
];

const OfficeSection = () => (
  <section id="consultorio" className="py-16 md:py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
        O Consultório
      </h2>
      <p className="font-body text-muted-foreground text-center mb-10 max-w-lg mx-auto">
        Ambiente acolhedor, confortável e preparado para oferecer segurança e tranquilidade às famílias no coração de São Paulo, próximo à Av. Paulista.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
        {images.map((img) => (
          <div key={img.alt} className="rounded-lg overflow-hidden aspect-[4/3] shadow-sm">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <WhatsAppButton>Agendar Consulta</WhatsAppButton>
      </div>
    </div>
  </section>
);

export default OfficeSection;
