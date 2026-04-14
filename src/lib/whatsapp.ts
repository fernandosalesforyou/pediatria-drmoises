export const trackWhatsAppConversion = (url: string) => {
  if (typeof window === "undefined") return;

  let hasOpened = false;

  const openWhatsApp = () => {
    if (hasOpened) return;
    hasOpened = true;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const analyticsWindow = window as Window & {
    gtag?: (...args: unknown[]) => void;
  };

  if (typeof analyticsWindow.gtag === "function") {
    analyticsWindow.gtag("event", "conversion", {
      send_to: "AW-17953908597/cxX7CNOWvIccEPXOi_FC",
      value: 1,
      currency: "BRL",
      event_callback: openWhatsApp,
    });

    window.setTimeout(openWhatsApp, 1200);
    return;
  }

  openWhatsApp();
};