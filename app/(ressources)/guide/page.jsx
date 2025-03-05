import SeoMeta from "@/components/common/SeoMeta";
import Cta from "@/components/footers/Cta";
import Services from "@/components/pages/service/Services";
import TextSlider from "@/components/pages/home/TextSlider";
import VideoBox from "@/components/pages/home/VideoBox";
import Link from "next/link";

export const metadata = {
  title: "Guides pratiques | Fireshield Security",
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
                  Nos guides pratiques
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
                  <li>Guides pratiques</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <TextSlider />
        <div className="pb-300" />
        <VideoBox />
        <div className="pb-300" />

        <Cta />
      </main>
    </>
  );
}
