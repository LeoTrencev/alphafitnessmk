import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: MapPin, label: t("contact.address"), value: 'бул. "Александар Македонски" бр.3, Радовиш' },
    { icon: Phone, label: t("contact.phone"), value: "071 219 056" },
    { icon: Mail, label: t("contact.email"), value: "alphafitnessmk@gmail.com" },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "60px" } : {}}
            transition={{ duration: 0.6 }}
            className="h-[2px] bg-primary mx-auto mb-4"
          />
          <p className="font-display text-sm tracking-[0.3em] text-primary font-medium mb-3">
            {t("contact.subtitle")}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            {t("contact.title")}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex gap-4 items-start group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-body text-foreground font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-card rounded-lg p-6 border border-border"
            >
              <div className="flex gap-3 items-center mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">{t("contact.hours")}</h3>
              </div>
              <div className="space-y-2 font-body text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("contact.monFri")}</span>
                  <span className="text-foreground font-medium">06:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("contact.sat")}</span>
                  <span className="text-foreground font-medium">06:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("contact.sun")}</span>
                  <span className="text-foreground font-medium">15:00 - 19:00</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 rounded-xl overflow-hidden border border-border shadow-lg shadow-black/20"
            style={{ minHeight: "550px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d22.459959!3d41.630350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135541c58a9f09c7%3A0x7955d64503b3c0c9!2sAlpha%20Fitness!5e0!3m2!1smk!2smk!4v1700000000000&style=element:geometry%7Ccolor:0x212121&style=element:labels.text.fill%7Ccolor:0xd4a017"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "550px", filter: "saturate(0.8) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alpha Fitness Location - бул. Александар Македонски бр.3, Радовиш"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
