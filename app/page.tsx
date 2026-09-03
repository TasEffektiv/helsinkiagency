import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SisuSection from "@/components/SisuSection";
import WorkIntro from "@/components/WorkIntro";
import VideoSection from "@/components/VideoSection";
import WorkGallery from "@/components/WorkGallery";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SisuSection />
        <div className="bg-hel-dark">
          <WorkIntro />
          <VideoSection />
          <WorkGallery />
          <div className="h-16 md:h-24" />
        </div>
        <Services />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
