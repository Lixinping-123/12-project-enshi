import { motion } from 'framer-motion';
import { IMAGES } from '@/data/content';

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-14 lg:pt-[86px] bg-[#1a1010]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 18%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <span className="sxhm-label text-white/60">国家级非物质文化遗产</span>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-5 leading-tight tracking-wide">
              西兰卡普
              <span className="block text-xl md:text-2xl lg:text-3xl font-normal mt-2 text-white/70 tracking-[0.3em]">
                经纬交织的恩施记忆
              </span>
            </h1>

            <div className="sxhm-red-line" style={{ background: '#C23B22' }} />

            <p className="text-white/55 text-sm md:text-base max-w-lg mt-5 leading-relaxed">
              土家族西兰卡普织锦技艺，是中国民间四大名锦之一。以绚丽多彩而著称，以设色浪漫而见长，被誉为"五彩活化石"，2006年列入国家级非物质文化遗产名录。
            </p>

            <a
              href="#history"
              className="inline-flex items-center gap-2 mt-8 px-6 py-2.5 bg-[#6B1515] hover:bg-[#8B1A1A] text-white text-sm transition-colors duration-300"
            >
              探索织锦源起
              <span className="ml-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
