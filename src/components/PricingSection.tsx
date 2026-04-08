import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, Crown } from "lucide-react";

const PricingSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    { name: t("pricing.daily"), price: "100", badge: null },
    { name: t("pricing.biweekly"), price: "700", badge: null },
    { name: t("pricing.monthly"), price: "1,100", badge: t("pricing.popular") },
    { name: t("pricing.quarterly"), price: "2,700", badge: null },
    { name: t("pricing.yearly"), price: "8,000", badge: t("pricing.bestValue") },
  ];

  const features = [t("pricing.feature1"), t("pricing.feature2"), t("pricing.feature3")];

  return (
    <section id="pricing" className="section-padding bg-background" ref={ref}>
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
            {t("pricing.subtitle")}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            {t("pricing.title")}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {plans.map((plan, i) => {
            const isPopular = plan.badge === t("pricing.popular");
            const isBest = plan.badge === t("pricing.bestValue");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -12, boxShadow: isPopular ? "0 20px 40px hsla(0, 80%, 50%, 0.25)" : isBest ? "0 20px 40px hsla(48, 100%, 50%, 0.2)" : "0 20px 40px hsla(0, 0%, 0%, 0.3)" }}
                className={`relative rounded-lg p-6 border transition-all duration-300 ${
                  isPopular
                    ? "bg-destructive/10 border-destructive shadow-lg shadow-destructive/10"
                    : isBest
                    ? "bg-accent/10 border-accent shadow-lg shadow-accent/10"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                {plan.badge && (
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1, type: "spring" }}
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-body font-semibold flex items-center gap-1 ${
                      isPopular ? "bg-destructive text-white" : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {isPopular ? <Star className="w-3 h-3" /> : <Crown className="w-3 h-3" />}
                    {plan.badge}
                  </motion.div>
                )}

                <h3 className="font-display text-lg font-semibold text-foreground mb-4 text-center">
                  {plan.name}
                </h3>

                <div className="text-center mb-6">
                  <motion.span
                    className="font-display text-4xl font-bold text-foreground inline-block"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {plan.price}
                  </motion.span>
                  <span className="font-body text-sm text-muted-foreground ml-1">{t("pricing.den")}</span>
                </div>

                <div className="space-y-3">
                  {features.map((feature, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
