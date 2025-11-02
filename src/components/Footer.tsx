import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex justify-center md:justify-start">
            <div className="w-20 h-20 bg-gradient-to-br from-coral via-accent to-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">KT</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground text-lg mb-3">Tentang Kami</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Karang Taruna adalah organisasi kepemudaan yang berfokus pada pemberdayaan dan pengembangan potensi pemuda dalam masyarakat. Visi kami adalah untuk menciptakan generasi muda yang mandiri, kreatif, dan berdaya saing tinggi.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground text-lg mb-3">Sosial Media Kami</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
                aria-label="Instagram Karang Taruna Pabuaran"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
                aria-label="TikTok Karang Taruna Pabuaran"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Karang Taruna Pabuaran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
