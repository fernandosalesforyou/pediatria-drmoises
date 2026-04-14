const WHATSAPP_URL = "https://wa.me/5511994404507?text=Ol%C3%A1,%20conheci%20o%20Dr%20Moises%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20de%20pediatria%20com%20ele";

interface WhatsAppButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const WhatsAppButton = ({ children, className = "", href }: WhatsAppButtonProps) => {
  const url = href || WHATSAPP_URL;

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(url);
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-body font-semibold text-primary-foreground shadow-md transition-all hover:brightness-110 hover:shadow-lg active:scale-[0.98] ${className}`}
    >
      {children}
    </a>
  );
};

export default WhatsAppButton;
export { WHATSAPP_URL };
