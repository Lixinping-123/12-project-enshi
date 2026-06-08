import { motion } from 'framer-motion';
import { patternCategories } from '@/data/content';

export default function PatternSection() {
  return (
    <section id="patterns" className="bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="sxhm-label">Traditional Patterns</span>
          <h2 className="sxhm-heading text-3xl md:text-4xl lg:text-5xl mt-2">纹样图谱</h2>
          <div className="sxhm-section-divider max-w-[200px] mx-auto mt-3">
            <i className="sxhm-dot" />
          </div>
          <p className="sxhm-text mt-4 max-w-2xl mx-auto">
            西兰卡普拥有120余种传统纹样，涵盖几何勾纹、自然景物、吉祥寓意、民俗故事等类型
          </p>
        </motion.div>

        {/* 陕历博"常设展览"风格列表 - 带图片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-black/5 p-0.5">
          {patternCategories.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white group cursor-pointer relative overflow-hidden"
            >
              {/* 图片区 */}
              <div className="sxhm-img-box relative">
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-full aspect-[4/3] object-cover"
                />
                {/* 分类标签 */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] text-[#6B1515] px-2 py-0.5 rounded-sm">
                  {p.category}
                </span>
                {/* 编号角标 */}
                <span className="absolute bottom-3 right-3 bg-[#6B1515] text-white text-xs w-7 h-7 flex items-center justify-center font-display font-bold">
                  {p.id}
                </span>
              </div>

              {/* 文字区 */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#6B1515] transition-colors">
                  {p.name}
                </h3>

                <p className="text-[#888] text-xs leading-relaxed mb-4 line-clamp-2">{p.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {p.colors.split('，').slice(0, 3).map((c, j) => {
                      const m: Record<string, string> = { 红: '#B22222', 黑: '#1A1A1A', 黄: '#E8A317', 蓝: '#4A6FA5', 白: '#ddd', 绿: '#5B8C5A', 金: '#D4A017', 靛: '#1D4E89' };
                      const key = Object.keys(m).find(k => c.includes(k));
                      return <span key={j} className="w-3 h-3 rounded-full border border-black/10" style={{ background: key ? m[key] : '#ccc' }} />;
                    })}
                  </div>
                  <span className="sxhm-more text-xs">详情</span>
                </div>
              </div>

              {/* 顶部红色线条滑入 */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#6B1515] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* 纹样含义说明 */}
        <div className="mt-10 bg-white rounded-sm p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {patternCategories.slice(0, 3).map(p => (
            <div key={p.id} className="space-y-2">
              <div className="flex items-center gap-2">
                <i className="sxhm-dot" />
                <h4 className="font-display text-sm font-semibold text-[#2C2C2C]">{p.name}</h4>
              </div>
              <p className="text-[#777] text-xs leading-relaxed">{p.symbolism}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
