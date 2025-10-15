import DiscountSection from "@/components/DiscountSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ClientWrapper from "@/components/Scrooll/ClientWrapper";
import SecondSection from "@/components/SecondSection";
import ServicesSection from "@/components/ServicesSection";
import Start from "@/components/Start";

export default function Home() {
  return (
    <ClientWrapper>
      <div>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <Start />
        <div className="bg-[url('/Background/back25.jpg')] object bg-center bg-cover shadow-[00px_-48px_180px_0px_rgba(0,0,90,0.3)]">
          <DiscountSection />
          <SecondSection />
        </div>
        <DownloadSection />
        <Footer />
      </div>
    </ClientWrapper>
  );
}
