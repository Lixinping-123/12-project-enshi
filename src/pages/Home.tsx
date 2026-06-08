import TopNavBar from '@/components/TopNavBar';
import HeroSection from '@/components/HeroSection';
import HistorySection from '@/components/HistorySection';
import CraftSection from '@/components/CraftSection';
import PatternSection from '@/components/PatternSection';
import TourismSection from '@/components/TourismSection';
import NewsSection from '@/components/NewsSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <main className="bg-[#F7F5F0]">
      <TopNavBar />
      <HeroSection />
      <HistorySection />
      <CraftSection />
      <PatternSection />
      <TourismSection />
      <NewsSection />
      <FooterSection />
    </main>
  );
}
