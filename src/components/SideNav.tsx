import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  labelEn: string;
}

const navItems: NavItem[] = [
  { id: 'history', label: '织锦源起', labelEn: 'Origin' },
  { id: 'craft', label: '制作工艺', labelEn: 'Process' },
  { id: 'patterns', label: '纹样图谱', labelEn: 'Patterns' },
  { id: 'tourism', label: '恩施文旅', labelEn: 'Tourism' },
  { id: 'news', label: '传承担当', labelEn: 'Heritage' },
];

export default function SideNav() {
  const [activeId, setActiveId] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveId(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className={`fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 transition-all duration-500 ${
        scrolled
          ? 'bg-enshi-bg/75 backdrop-blur-md shadow-lg border border-enshi-red/5 py-6 px-3 rounded-2xl'
          : 'bg-transparent py-6 px-3'
      }`}
    >
      {/* 顶部织锦纹样装饰 */}
      <div className="flex items-center justify-center gap-1 pb-3 opacity-30">
        <div className="w-1 h-1 bg-enshi-red rotate-45" />
        <div className="w-1.5 h-1.5 bg-enshi-gold rotate-45" />
        <div className="w-2 h-2 bg-enshi-red/70 rotate-45" />
        <div className="w-1.5 h-1.5 bg-enshi-gold rotate-45" />
        <div className="w-1 h-1 bg-enshi-red rotate-45" />
      </div>

      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
          className="group relative flex items-center gap-3 cursor-pointer"
        >
          {/* 左侧小红点指示 */}
          <div
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              activeId === item.id
                ? 'bg-enshi-red scale-125'
                : 'bg-transparent group-hover:bg-enshi-red/30'
            }`}
          />

          <div className="flex flex-col items-end">
            <span
              className={`text-sm font-body tracking-wider transition-all duration-300 ${
                activeId === item.id
                  ? 'text-enshi-red font-medium'
                  : scrolled
                    ? 'text-enshi-text/80'
                    : 'text-enshi-text/70'
              } group-hover:text-enshi-red`}
            >
              {item.label}
            </span>
            <span className="text-[10px] text-enshi-muted/50 font-body tracking-[0.2em] uppercase">
              {item.labelEn}
            </span>
          </div>

          {/* 右侧指示线 */}
          <div
            className={`h-0.5 rounded-full transition-all duration-300 ${
              activeId === item.id
                ? 'w-5 bg-enshi-red'
                : 'w-0 bg-enshi-red group-hover:w-3'
            }`}
          />
        </motion.button>
      ))}

      {/* 底部装饰 */}
      <div className="flex items-center justify-center gap-1 pt-3 opacity-30">
        <div className="w-1 h-1 bg-enshi-red rotate-45" />
        <div className="w-1.5 h-1.5 bg-enshi-gold rotate-45" />
        <div className="w-2 h-2 bg-enshi-red/70 rotate-45" />
        <div className="w-1.5 h-1.5 bg-enshi-gold rotate-45" />
        <div className="w-1 h-1 bg-enshi-red rotate-45" />
      </div>
    </motion.nav>
  );
}
