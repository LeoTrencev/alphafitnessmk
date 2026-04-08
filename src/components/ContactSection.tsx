import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:alphafitnessmk@gmail.com?subject=Контакт од ${formData.name}&body=${formData.message}`;
  };

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

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6 }}
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
            </div>

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 rounded-lg overflow-hidden border border-border h-[300px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1487.7!2d22.4643!3d41.6381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135500b153444071%3A0x7e28aa24bfdb08f0!2sAlpha%20Fitness!5e0!3m2!1smk!2smk!4v1700000000000!5m2!1smk!2smk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alpha Fitness Location - бул. Александар Македонски бр.3, Радовиш"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">{t("contact.name")}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsla(48,100%,50%,0.15)] transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">{t("contact.email")}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsla(48,100%,50%,0.15)] transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">{t("contact.message")}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsla(48,100%,50%,0.15)] transition-all duration-300 resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsla(48, 100%, 50%, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 rounded-sm"
              >
                {t("contact.send")}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
