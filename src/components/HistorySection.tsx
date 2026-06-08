import { motion } from 'framer-motion';
import { IMAGES } from '@/data/content';

export default function HistorySection() {
  return (
    <section id="history" className="relative bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        {/* 标题区 - 陕历博风格：居中 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="sxhm-label">History & Origin</span>
          <h2 className="sxhm-heading text-3xl md:text-4xl lg:text-5xl mt-2">织锦源起</h2>
          <div className="sxhm-section-divider max-w-[200px] mx-auto mt-3">
            <i className="sxhm-dot" />
          </div>
          <p className="sxhm-text mt-4 max-w-2xl mx-auto">
            土家族西兰卡普织锦技艺，流传于湖北恩施及湖南湘西等武陵山区，被誉为"土家之花"、"五彩活化石"
          </p>
        </motion.div>

        {/* 内容 - 左文右图 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <p className="sxhm-text">
                西兰卡普，土家语意为"土花铺盖"，是土家族流传两千余年的传统手工织锦技艺。
                与壮锦、黎锦、傣锦并称
                <span className="text-[#6B1515] font-medium">中国民间四大名锦</span>。
                以其色彩艳丽、图案精美、工艺独特而闻名。
              </p>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-sm">
              <div className="sxhm-vline shrink-0" />
              <div>
                <h4 className="font-display text-base font-semibold text-[#2C2C2C] mb-1">西兰传说</h4>
                <p className="text-[#777] text-sm leading-relaxed">
                  相传古时有一位名叫"西兰"的土家姑娘，心灵手巧善于织锦。她将山间花草、日月星辰一一织入锦中。"卡普"在土家语中意为"花"，人们便将这种织锦命名为"西兰卡普"。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-sm">
              <div className="sxhm-vline shrink-0" />
              <div>
                <h4 className="font-display text-base font-semibold text-[#2C2C2C] mb-1">无字史诗</h4>
                <p className="text-[#777] text-sm leading-relaxed">
                  土家族历来只有语言、没有文字，西兰卡普的数百种纹样如同
                  <span className="text-[#6B1515]">一部"无字史诗"</span>，
                  记录着民族的生活环境与习俗。2006年，西兰卡普被列入
                  <span className="text-[#6B1515] font-medium">首批国家级非遗名录</span>。
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {['千年传承','四大名锦','土家之花','非遗瑰宝'].map(t => (
                <span key={t} className="text-xs text-[#6B1515] border border-[#6B1515]/20 px-3 py-1">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="sxhm-card"
          >
            <img src={IMAGES.history} alt="" className="w-full h-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
