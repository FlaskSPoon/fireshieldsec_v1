import SeoMeta from "@/components/common/SeoMeta";
import Cta from "@/components/footers/Cta";
import About from "@/components/pages/home/About";
import Offering from "@/components/pages/home/Offering";
import VideoBox from "@/components/pages/home/VideoBox";
import TextSlider from "@/components/pages/home/TextSlider";
import Facts from "@/components/pages/home/Facts";
import Team from "@/components/pages/home/Team";
import AboutCta from "@/components/pages/AboutCta";
import Testimonials from "@/components/pages/home/Testimonials";
import Link from "next/link";

export const metadata = {
  title: "A propos de nous | Fireshield Security",
  description:
    "Cybersécurité, Gestion des systèmes d'information (SI), Conseil, Protection et Détection"
};
export default function Page() {
  return (
    <>
      <SeoMeta title={metadata.title} />
      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  A propos de nous
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link scroll={false} href={`/`}>
                      {" "}
                      Accueil{" "}
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-chevrons-right" />
                  </li>
                  <li>A propos de nous</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <About />
        <Offering />
        <VideoBox />
        <TextSlider />
        <AboutCta />
        <div className="pb-300"></div>
        <Facts />
        {/* <Team /> */}
        <Testimonials />
        <div className="pb-300"></div>

        <Cta />
      </main>
    </>
  );
}
