import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Check, Star, Crown } from "lucide-react";

const PricingSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    { name: t("pricing.daily"), price: 100, badge: null },
    { name: t("pricing.biweekly"), price: 700, badge: null },
    { name: t("pricing.monthly"), price: 1100, badge: t("pricing.popular") },
    { name: t("pricing.quarterly"), price: 2700, badge: null },
    { name: t("pricing.yearly"), price: 8000, badge: t("pricing.bestValue") },
  ];

  const features = [t("pricing.feature1"), t("pricing.feature2"), t("pricing.feature3")];

  return (
    <section id="pricing" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "60px" } : {}}
            transition={{ duration: 0.4 }}
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
              <PricingCard
                key={i}
                plan={plan}
                index={i}
                isInView={isInView}
                isPopular={isPopular}
                isBest={isBest}
                features={features}
                den={t("pricing.den")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  plan: { name: string; price: number; badge: string | null };
  index: number;
  isInView: boolean;
  isPopular: boolean;
  isBest: boolean;
  features: string[];
  den: string;
}

const AnimatedPrice = ({ value, isInView }: { value: number; isInView: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return <>{display.toLocaleString()}</>;
};

const PricingCard = ({ plan, index, isInView, isPopular, isBest, features, den }: PricingCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-lg p-6 border transition-all duration-150 ${
        isPopular
          ? "bg-destructive/10 border-destructive shadow-lg shadow-destructive/10"
          : isBest
          ? "bg-accent/10 border-accent shadow-lg shadow-accent/10"
          : "bg-card border-border"
      }`}
      style={{
        boxShadow: hovered
          ? isPopular
            ? "0 0 40px hsla(0, 80%, 50%, 0.35), inset 0 0 30px hsla(0, 80%, 50%, 0.08)"
            : isBest
            ? "0 0 40px hsla(48, 100%, 50%, 0.3), inset 0 0 30px hsla(48, 100%, 50%, 0.08)"
            : "0 0 40px hsla(48, 100%, 50%, 0.15), inset 0 0 30px hsla(48, 100%, 50%, 0.05)"
          : undefined,
        borderColor: hovered && !isPopular && !isBest ? "hsla(48, 100%, 50%, 0.5)" : undefined,
        transition: "box-shadow 0.15s ease, border-color 0.15s ease",
      }}
    >
      {plan.badge && (
        <motion.div
          initial={{ scale: 0, rotate: -12 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.08, type: "spring" }}
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
        <span className="font-display text-4xl font-bold text-foreground inline-block">
          <AnimatedPrice value={plan.price} isInView={isInView} />
        </span>
        <span className="font-body text-sm text-muted-foreground ml-1">{den}</span>
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
};

export default PricingSection;
