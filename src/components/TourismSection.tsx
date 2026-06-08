import { motion } from 'framer-motion';
import { scenicSpots } from '@/data/content';

export default function TourismSection() {
  return (
    <section id="tourism" className="bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="sxhm-label">Enshi Tourism</span>
          <h2 className="sxhm-heading text-3xl md:text-4xl lg:text-5xl mt-2">恩施文旅</h2>
          <div className="sxhm-section-divider max-w-[200px] mx-auto mt-3">
            <i className="sxhm-dot" />
          </div>
          <p className="sxhm-text mt-4 max-w-2xl mx-auto">
            探访恩施山水，体验土家文化，发现西兰卡普的故乡
          </p>
        </motion.div>

        {/* 陕历博"专题展览"风格：大卡片+小卡片 */}
        {/* 第一行：大卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0.5 bg-black/5 p-0.5 mb-0.5"
        >
          {scenicSpots.slice(0, 2).map((spot) => (
            <div key={spot.id} className="bg-white p-0 group cursor-pointer relative overflow-hidden">
              <div className="relative">
                <div className="sxhm-img-box">
                  <img src={spot.imageUrl} alt={spot.name} className="aspect-[16/10] lg:aspect-[16/9]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="font-display text-xl font-bold text-white">{spot.name}</h3>
                  <p className="text-white/70 text-xs mt-1 line-clamp-1">{spot.description}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[#777] text-xs leading-relaxed line-clamp-2">{spot.detail}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[10px] text-[#999]">{spot.workshopAddress}</span>
                  <span className="sxhm-more text-xs">探索</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 第二行：三张小卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5 bg-black/5 p-0.5">
          {scenicSpots.slice(2).map((spot) => (
            <motion.div
              key={spot.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-0 group cursor-pointer overflow-hidden"
            >
              <div className="sxhm-img-box">
                <img src={spot.imageUrl} alt={spot.name} className="aspect-[16/10]" />
              </div>
              <div className="p-5">
                <h4 className="font-display text-base font-semibold text-[#2C2C2C] group-hover:text-[#6B1515] transition-colors">{spot.name}</h4>
                <p className="text-[#999] text-xs leading-relaxed mt-2 line-clamp-2">{spot.description}</p>
                <span className="sxhm-more text-xs mt-3">探索</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
