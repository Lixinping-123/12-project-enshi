import { useState } from 'react';
import { motion } from 'framer-motion';
import { newsItems } from '@/data/content';

const tabs = ['传承动态', '创新设计', '荣誉殿堂'];

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const filtered = newsItems.filter(item =>
    activeTab === 0 ? true :
    activeTab === 1 ? item.category === '创新设计' :
    item.category === '荣誉殿堂'
  );

  return (
    <section id="news" className="bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="sxhm-label">News & Heritage</span>
          <h2 className="sxhm-heading text-3xl md:text-4xl lg:text-5xl mt-2">正在发生</h2>
          <div className="sxhm-section-divider max-w-[200px] mx-auto mt-3">
            <i className="sxhm-dot" />
          </div>
        </motion.div>

        {/* 陕历博"正在发生"Tab导航 */}
        <div className="flex items-center gap-8 mb-10 border-b border-black/10">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`relative pb-3 text-sm transition-colors ${
                activeTab === i ? 'text-[#6B1515] font-medium' : 'text-[#999] hover:text-[#555]'
              }`}
            >
              {tab}
              {activeTab === i && (
                <motion.div layoutId="tab-line" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6B1515]" />
              )}
            </button>
          ))}
        </div>

        {/* 新闻列表 - 陕历博风格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-black/5 p-0.5">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white p-6 group cursor-pointer hover:bg-[#F9F6F0] transition-colors"
            >
              <span className="text-xs text-[#999]">{item.date}</span>
              <h4 className="font-display text-base font-semibold text-[#2C2C2C] mt-2 mb-3 leading-snug group-hover:text-[#6B1515] transition-colors">
                {item.title}
              </h4>
              <p className="text-[#999] text-xs leading-relaxed line-clamp-3">{item.summary}</p>
              <div className="flex items-center justify-between mt-5">
                <span className="text-[10px] text-[#6B1515] bg-[#6B1515]/5 px-2 py-0.5">{item.category}</span>
                <span className="sxhm-more text-xs">阅读</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
