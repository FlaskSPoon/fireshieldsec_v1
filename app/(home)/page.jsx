import About from "@/components/pages/home/About";
import Blog from "@/components/pages/home/Blog";
import Cta from "@/components/footers/Cta";
import Facts from "@/components/pages/home/Facts";
import Hero from "@/components/pages/home/Hero";
import Offering from "@/components/pages/home/Offering";
import Pricing from "@/components/pages/home/Pricing";
import Process from "@/components/pages/home/Process";
import Projects from "@/components/pages/home/Projects";
import Services from "@/components/pages/home/Services";
import Services2 from "@/components/pages/home/Services2";
import Team from "@/components/pages/home/Team";
import Testimonials from "@/components/pages/home/Testimonials";
import VideoBox from "@/components/pages/home/VideoBox";
import SeoMeta from "@/components/common/SeoMeta";
export const metadata = {
  title:
    "Accueil | Fireshield Security - Cybersécurité, protection et détection",
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
        <Services2 />
        <Offering />
        <VideoBox />
        <Team />
        <Projects />
        <Process />
        <Facts />
        <Testimonials />
        <Blog />
        <Cta />
      </main>
    </>
  );
}
