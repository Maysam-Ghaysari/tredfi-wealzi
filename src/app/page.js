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
        <div className="bg-[url('/Background/back11.jpg')] bg-fixed object bg-center bg-cover ">
          <DiscountSection />
          <SecondSection />
          <DownloadSection />
          <Footer />
        </div>
      </div>
    </ClientWrapper>
  );
}
