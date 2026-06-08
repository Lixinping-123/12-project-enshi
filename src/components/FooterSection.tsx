import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin } from 'lucide-react';

export default function FooterSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer id="footer" className="bg-[#1a1010] text-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Logo区 */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6B1515] flex items-center justify-center text-white font-display font-bold text-lg">
                  西
                </div>
                <div>
                  <div className="font-display text-lg font-semibold tracking-wide">西兰卡普</div>
                  <div className="text-[#777] text-[10px] tracking-[0.3em]">土家织锦 · 经纬之美</div>
                </div>
              </div>
              <p className="text-[#666] text-xs leading-relaxed mt-4">
                国家级非物质文化遗产<br />
                土家族千年织锦技艺<br />
                传承古老文明，编织美好生活
              </p>
            </div>

            {/* 快速链接 */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-medium mb-4">快速导航</h4>
              <div className="grid grid-cols-2 gap-2">
                {['织锦源起','制作工艺','纹样图谱','恩施文旅','传承担当'].map(l => (
                  <a key={l} href={`#${l}`} className="text-[#777] text-xs hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>

            {/* 联系方式 */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-medium mb-4">联系我们</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#777] text-xs">
                  <Phone size={12} className="text-[#6B1515]" />
                  <span>0718-xxxxxxx</span>
                </div>
                <div className="flex items-center gap-2 text-[#777] text-xs">
                  <Mail size={12} className="text-[#6B1515]" />
                  <span>xilankapu@enshi.cn</span>
                </div>
                <div className="flex items-center gap-2 text-[#777] text-xs">
                  <MapPin size={12} className="text-[#6B1515]" />
                  <span>湖北省恩施土家族苗族自治州</span>
                </div>
              </div>
            </div>

            {/* 预约 */}
            <div className="md:col-span-3">
              <button
                onClick={() => setShowModal(true)}
                className="w-full py-3 bg-[#6B1515] hover:bg-[#8B1A1A] text-white text-sm transition-colors mb-4"
              >
                非遗体验预约
              </button>
              <p className="text-[#666] text-xs leading-relaxed">
                欢迎预约西兰卡普织锦体验活动
              </p>
            </div>
          </div>

          {/* 底部 */}
          <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[#555] text-xs">© 2026 恩施西兰卡普非遗传承中心 · 版权所有</p>
            <div className="flex gap-6">
              {['隐私政策','使用条款','网站地图'].map(t => (
                <a key={t} href="#" className="text-[#555] text-xs hover:text-white transition-colors">{t}</a>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.03] mt-8 pt-8">
            <h4 className="text-[#666] text-[10px] tracking-[0.3em] uppercase mb-4">内容来源声明</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-[#555] text-xs font-medium mb-2">图片素材来源</h5>
                <ul className="space-y-1.5">
                  <li className="text-[#555] text-[10px] leading-relaxed">
                    <span className="text-[#777]">西兰卡普官网纹样素材库</span>
                    <span className="text-[#444] ml-1">— xilankapu.com</span>
                  </li>
                  <li className="text-[#555] text-[10px] leading-relaxed">
                    <span className="text-[#777]">摄图网商用素材</span>
                    <span className="text-[#444] ml-1">— 699pic.com</span>
                  </li>
                  <li className="text-[#555] text-[10px] leading-relaxed">
                    <span className="text-[#777]">知乎专栏授权图片</span>
                    <span className="text-[#444] ml-1">— zhuanlan.zhihu.com</span>
                  </li>
                  <li className="text-[#555] text-[10px] leading-relaxed">
                    <span className="text-[#777]">凤凰网旅游频道</span>
                    <span className="text-[#444] ml-1">— ifeng.com</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-[#555] text-xs font-medium mb-2">文字内容参考来源</h5>
                <ul className="space-y-1.5">
                  <li className="text-[#555] text-[10px] leading-relaxed">
                    <span className="text-[#777]">《西兰卡普传统纹样研究》</span>
                    <span className="text-[#444] ml-1">— 田明 著</span>
                  </li>
                  <li className="text-[#555] text-[10px] leading-relaxed">
                    <span className="text-[#777]">中国非物质文化遗产网</span>
                    <span className="text-[#444] ml-1">— ihchina.cn</span>
                  </li>
                  <li className="text-[#555] text-[10px] leading-relaxed">
                    <span className="text-[#777]">恩施州人民政府文旅公开资料</span>
                    <span className="text-[#444] ml-1">— enshi.gov.cn</span>
                  </li>
                  <li className="text-[#555] text-[10px] leading-relaxed">
                    <span className="text-[#777]">《土家织锦》非物质文化遗产保护文献</span>
                    <span className="text-[#444] ml-1">— 中国民族文化出版社</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-[#444] text-[10px] leading-relaxed mt-5 max-w-2xl">
              本站为非商业性非遗文化传播网站，所有图片素材来源于公开网络平台，仅用于文化展示与学术传播目的。如涉及版权或授权问题，请联系 xilankapu@enshi.cn，我们将第一时间处理。文字内容综合参考公开学术文献、政府文旅资料及非遗保护档案整理编写。
            </p>
          </div>
        </div>

        {/* 顶部金线 */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#6B1515]/60 to-transparent" />
      </footer>

      {/* 预约弹窗 */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <div className="absolute inset-0 bg-black/60" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-sm p-8 max-w-md w-full text-center"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-[#999] hover:text-[#333]">
                <X size={18} />
              </button>
              <div className="w-14 h-14 bg-[#6B1515] rounded-full flex items-center justify-center mx-auto mb-5">
                <Phone size={22} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#2C2C2C] mb-2">非遗体验预约</h3>
              <p className="text-[#999] text-xs mb-6">请通过以下方式联系我们</p>
              <div className="bg-[#F7F5F0] rounded-sm p-5 space-y-3 text-left mb-6">
                <div className="flex items-center gap-3 text-sm"><Phone size={14} className="text-[#6B1515]" /><span>0718-xxxxxxx</span></div>
                <div className="flex items-center gap-3 text-sm"><Mail size={14} className="text-[#6B1515]" /><span>xilankapu@enshi.cn</span></div>
                <div className="flex items-center gap-3 text-sm"><MapPin size={14} className="text-[#6B1515]" /><span>湖北省恩施州</span></div>
              </div>
              <button onClick={() => setShowModal(false)} className="px-8 py-2.5 bg-[#6B1515] text-white text-sm hover:bg-[#8B1A1A] transition-colors">
                我知道了
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
