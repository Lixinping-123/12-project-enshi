import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { craftSteps } from '@/data/content';

function CraftStep({ step }: { step: typeof craftSteps[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref, offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-20 border-b border-black/5 last:border-0"
    >
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#6B1515] flex items-center justify-center text-white font-display text-sm font-bold shrink-0">
            {step.number}
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-[#2C2C2C]">{step.title}</h3>
        </div>

        <p className="sxhm-text">{step.description}</p>

        <div className="bg-[#F7F5F0] rounded-sm p-5 border-l-2 border-[#6B1515]">
          <p className="text-[#777] text-sm leading-relaxed">{step.details}</p>
        </div>
      </div>

      <motion.div style={{ y: imageY }} className="sxhm-card">
        <div className="sxhm-img-box">
          <img src={step.imageUrl} alt={step.title} className="aspect-[4/3]" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CraftSection() {
  return (
    <section id="craft" className="bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="sxhm-label">Craft Process</span>
          <h2 className="sxhm-heading text-3xl md:text-4xl lg:text-5xl mt-2">制作工艺</h2>
          <div className="sxhm-section-divider max-w-[200px] mx-auto mt-3">
            <i className="sxhm-dot" />
          </div>
          <p className="sxhm-text mt-4 max-w-2xl mx-auto">
            从一缕丝线到一幅传世织锦，每一道工序都凝聚着土家织女的心血与智慧
          </p>
        </motion.div>

        <div className="bg-white rounded-sm px-6 lg:px-14 py-10 lg:py-16">
          {craftSteps.map((step) => (
            <CraftStep key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
