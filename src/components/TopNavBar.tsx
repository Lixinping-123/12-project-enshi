import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const topLinks = [
  { label: '织锦源起', href: '#history' },
  { label: '制作工艺', href: '#craft' },
  { label: '纹样图谱', href: '#patterns' },
  { label: '恩施文旅', href: '#tourism' },
  { label: '传承担当', href: '#news' },
];

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#1a1010]/98 backdrop-blur-sm shadow-lg' : 'bg-[#1a1010]'
    }`}>
      {/* 最顶栏 */}
      <div className="hidden lg:flex items-center justify-between px-8 h-9 bg-[#0d0808] text-[#ccc] text-xs">
        <div className="flex items-center gap-6">
          <a href="/" className="hover:text-white transition-colors">西兰卡普非遗文化传承</a>
          <span className="text-[#6B1515]">|</span>
          <span>传承古老文明 · 编织美好生活</span>
        </div>
        <div className="flex items-center gap-5">
          <span>📞 0718-xxxxxxx</span>
          <span className="text-[#6B1515]">|</span>
          <span>✉ xilankapu@enshi.cn</span>
        </div>
      </div>

      {/* 主导航 */}
      <div className="flex items-center justify-between px-6 lg:px-10 h-14">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 bg-[#6B1515] flex items-center justify-center text-white font-display font-bold text-sm">
            西
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-display text-base font-semibold leading-tight tracking-wide">
              西兰卡普
            </div>
            <div className="text-[#999] text-[10px] tracking-[0.3em] leading-tight">
              土家织锦 · 经纬之美
            </div>
          </div>
        </a>

        {/* 桌面导航 */}
        <nav className="hidden lg:flex items-center gap-1">
          {topLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-[#ccc] hover:text-white hover:bg-white/5 rounded transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 移动端菜单按钮 */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <path d="M18 6L6 18M6 6l12 12" />
              : <path d="M3 12h18M3 6h18M3 18h18" />
            }
          </svg>
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1a1010] border-t border-white/5 overflow-hidden"
          >
            {topLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-sm text-[#ccc] hover:text-white hover:bg-white/5 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
