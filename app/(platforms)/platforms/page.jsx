import SeoMeta from "@/components/common/SeoMeta";
import Cta from "@/components/footers/Cta";
import About from "@/components/pages/platforms/platformsXDR/About";
import Features from "@/components/pages/platforms/platformsXDR/Features";
import Hero from "@/components/pages/platforms/platformsXDR/Hero";
import Service2 from "@/components/pages/platforms/platformsXDR/Service2";
import Services from "@/components/pages/platforms/platformsXDR/Services";
export const metadata = {
  title:
    "Plateforme XDR | Fireshield Security - Cybersécurité, protection et détection",
  description: "Cybersécurité et gestion des systèmes d'information (SI)"
};
export default function Home() {
  return (
    <>
      <SeoMeta title={metadata.title} />
      <main className="main position-relative" id="mains">
        <Hero />
        <Services />
        <About />
        <Features />
        <Service2 />
        <Cta />
      </main>
    </>
  );
}
