import { motion } from 'framer-motion';
import { Palmtree, Sparkles, Heart, Music, Building2, Bird } from 'lucide-react';

const culturalSymbols = [
  {
    icon: Palmtree,
    title: '白虎图腾',
    subtitle: 'White Tiger Totem',
    description:
      '土家族崇拜白虎，视其为祖先化身与民族守护神。白虎图腾象征勇猛、力量与正义，在土家文化中无处不在——从建筑雕刻到服饰纹样，从祭祀仪式到民间传说。',
    color: 'bg-enshi-bg-alt',
    iconColor: 'text-enshi-red',
    details: [
      '土家语称"利巴"，意为"老虎"',
      '摆手舞中保留了白虎崇拜的祭祀动作',
      '小孩戴虎帽、穿虎鞋以避邪壮威',
    ],
  },
  {
    icon: Music,
    title: '摆手舞',
    subtitle: 'Baishou Dance',
    description:
      '土家族最盛大的传统集体舞蹈，已有500余年历史。舞者围圈而跳，以鼓声为号，单摆、双摆、撒种、擦背等70余种仪式化动作再现了战争、农耕、渔猎等生活场景。',
    color: 'bg-enshi-bg',
    iconColor: 'text-enshi-blue',
    details: [
      '2008年列入国家级非遗名录',
      '来凤百福司镇舍米湖村为发源地',
      '"神州第一摆手堂"位于来凤',
    ],
  },
  {
    icon: Building2,
    title: '吊脚楼',
    subtitle: 'Stilted House',
    description:
      '土家族依山就势而建的传统建筑，半悬半落的干栏式结构，飞檐翘角、穿枓勾心。高悬地面既通风干燥又可防虫蛇猛兽，是巴楚文化的"活化石"，2011年列入国家级非遗。',
    color: 'bg-enshi-bg-alt',
    iconColor: 'text-enshi-gold',
    details: [
      '起源可追溯至东汉以前',
      '分半截吊、半边吊、临水吊等多种形式',
      '湖北省咸丰县、湖南省永顺县为传承地',
    ],
  },
  {
    icon: Heart,
    title: '哭嫁',
    subtitle: 'Crying Wedding',
    description:
      '土家族独特的婚俗传统——新娘在出嫁前要唱"哭嫁歌"，以哭代歌表达对父母亲人的感恩与不舍。哭得越动情感人，越被视为贤惠孝顺，也是土家女性情感表达的独特方式。',
    color: 'bg-enshi-bg',
    iconColor: 'text-enshi-red',
    details: [
      '出嫁前数日开始，以歌代哭',
      '细数父母养育之恩、姊妹手足之情',
      '是国家级非物质文化遗产',
    ],
  },
  {
    icon: Bird,
    title: '女儿会',
    subtitle: "Girls' Fair",
    description:
      '被誉为"东方情人节"的土家女儿会，每年农历七月十二在恩施土家女儿城举行。青年男女以歌传情、以物定情，是土家族最浪漫的民俗盛会，也是青年择偶的重要场合。',
    color: 'bg-enshi-bg-alt',
    iconColor: 'text-enshi-blue',
    details: [
      '恩施土家女儿城为主要举办地',
      '以对歌、赶场、摆手舞为主要形式',
      '月半节前后持续数日',
    ],
  },
  {
    icon: Sparkles,
    title: '织锦技艺',
    subtitle: 'Brocade Craft',
    description:
      '西兰卡普以"通经断纬、反面挑织"为核心工艺，与壮锦、黎锦、傣锦并称中国四大名锦。从纺线到成品需经过20余道工序，每一幅织锦都是独一无二的艺术品。',
    color: 'bg-enshi-bg',
    iconColor: 'text-enshi-gold',
    details: [
      '2006年列入首批国家级非遗',
      '1989年作为国礼赠予美国前总统老布什',
      '谭艳华姐妹作品三次登上中国国际时装周',
    ],
  },
];

export default function TujiaCultureSection() {
  return (
    <section className="relative py-24 md:py-32 ethnic-warm-bg overflow-hidden">
      {/* 装饰背景 */}
      <div className="brocade-overlay" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-enshi-red/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-enshi-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-enshi-red font-body">
            Cultural Symbols
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-enshi-text mt-3">
            土家文化符号
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="enshi-divider-diamond" />
            <div className="w-12 h-px bg-enshi-red/30" />
            <div className="enshi-divider-diamond" />
          </div>
          <p className="text-enshi-text/60 mt-4 max-w-xl mx-auto font-body text-sm md:text-base leading-relaxed">
            从图腾信仰到建筑民居，从婚俗节庆到歌舞技艺——六大文化符号勾勒土家族的精神世界
          </p>
        </motion.div>

        {/* 符号网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {culturalSymbols.map((symbol, index) => {
            const Icon = symbol.icon;
            return (
              <motion.div
                key={symbol.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${symbol.color} rounded-2xl p-6 md:p-8 ethnic-card relative overflow-hidden group`}
              >
                {/* 角标装饰 */}
                <div className="corner-ornament -top-1 -left-1" />

                {/* 图标 */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                  style={{
                    background: `linear-gradient(135deg, rgba(178,34,34,0.08), rgba(232,163,23,0.08))`,
                  }}
                >
                  <Icon size={22} className={symbol.iconColor} />
                </div>

                {/* 标题 */}
                <div className="mb-3">
                  <h3 className="font-display text-lg font-semibold text-enshi-text group-hover:text-enshi-red transition-colors duration-300">
                    {symbol.title}
                  </h3>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-enshi-muted/60 font-body">
                    {symbol.subtitle}
                  </span>
                </div>

                {/* 描述 */}
                <p className="text-enshi-text/55 font-body text-sm leading-relaxed mb-5">
                  {symbol.description}
                </p>

                {/* 细节标签 */}
                <div className="flex flex-wrap gap-2">
                  {symbol.details.map((detail, i) => (
                    <span key={i} className="ethnic-tag">
                      {detail}
                    </span>
                  ))}
                </div>

                {/* 底部装饰线 */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-enshi-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 底部吊脚楼轮廓装饰 */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 1440 80" className="w-full h-full" preserveAspectRatio="none">
          {Array.from({ length: 12 }).map((_, i) => {
            const x = i * 120 + 20;
            return (
              <g key={i}>
                <rect x={x} y={40} width={8} height={40} fill="#2C2C2C" />
                <rect x={x + 30} y={30} width={8} height={50} fill="#2C2C2C" />
                <rect x={x - 5} y={35} width={85} height={3} fill="#2C2C2C" />
                <path d={`M${x - 10},38 L${x + 4},15 L${x + 18},38`} fill="#2C2C2C" />
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
