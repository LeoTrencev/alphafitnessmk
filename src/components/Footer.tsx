import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-wider text-primary">ALPHA</span>
            <span className="font-display text-xl font-light tracking-wider text-foreground">FITNESS</span>
          </div>

          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alpha Fitness. {t("footer.rights")}
          </p>

          <div className="flex items-center gap-2">
            <span className="font-body text-sm text-muted-foreground mr-2">{t("footer.followUs")}:</span>
            <a
              href="https://www.facebook.com/p/Alpha-Fitness-Mk-100086247827098/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/alphafitness_mk/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
