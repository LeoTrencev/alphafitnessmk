import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import heroImg from "@/assets/homepage.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={heroImg}
          alt="Alpha Fitness gym interior"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-[2px] bg-primary mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-sm sm:text-base tracking-[0.4em] text-primary font-medium mb-4"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white whitespace-pre-line mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-[2px] bg-primary mx-auto mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsla(48, 100%, 50%, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 rounded-sm"
          >
            {t("hero.cta")}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "hsl(48, 100%, 50%)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 border border-white/30 text-white font-display text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 rounded-sm"
          >
            {t("hero.hours")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
