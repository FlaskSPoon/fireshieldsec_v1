
import HeroServices from "@/components/services/services/hero";
import SeoMeta from "@/components/common/SeoMeta";
import About from "@/components/services/services/About";
import VideoArrier from "@/components/services/services/videoArriere";
import NosServices from "@/components/services/services/nos-services";
export const metadata = {
  title:
    "Nos Services  | Fireshield Security - Cybersécurité, protection et détection",
  description: "Cybersécurité et gestion des systèmes d'information (SI)"
};
export default function Home(){
    return (
      <>
      <SeoMeta title={metadata.title} />
      <main className="main position-relative" id="mains">
        <HeroServices />
        <About />
        <VideoArrier/>
        <NosServices/>
        
      </main>
    </>
    )
}