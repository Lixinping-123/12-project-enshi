/**
 * 土家织锦风格装饰分隔线
 * 在不同模块之间插入织锦菱形纹样分隔
 */
export default function DecorativeDivider() {
  return (
    <div className="relative py-8 overflow-hidden">
      <div className="enshi-divider px-8">
        <div className="w-1.5 h-1.5 bg-enshi-red/30 rotate-45" />
        <div className="w-2 h-2 bg-enshi-red/50 rotate-45" />
        <div className="w-3 h-3 bg-enshi-gold/40 rotate-45" />
        <div className="w-2 h-2 bg-enshi-blue/30 rotate-45" />
        <div className="w-1.5 h-1.5 bg-enshi-red/30 rotate-45" />
      </div>
    </div>
  );
}
