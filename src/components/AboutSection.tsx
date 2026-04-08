import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Fingerprint, Clock } from "lucide-react";
import aboutImg from "@/assets/gym-interior-4.jpg";

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Dumbbell, title: t("about.feature1.title"), desc: t("about.feature1.desc") },
    { icon: Fingerprint, title: t("about.feature2.title"), desc: t("about.feature2.desc") },
    { icon: Clock, title: t("about.feature3.title"), desc: t("about.feature3.desc") },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "60px" } : {}}
              transition={{ duration: 0.6 }}
              className="h-[2px] bg-primary mb-4"
            />
            <p className="font-display text-sm tracking-[0.3em] text-primary font-medium mb-3">
              {t("about.subtitle")}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t("about.title")}
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10 text-base sm:text-lg">
              {t("about.desc")}
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  whileHover={{ x: 8 }}
                  className="flex gap-4 items-start group cursor-default"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <motion.img
                src={aboutImg}
                alt="Alpha Fitness gym interior"
                className="w-full h-[500px] object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary rounded-lg"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
