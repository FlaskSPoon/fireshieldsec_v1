import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/footers/Cta";
import NotFound from "@/components/pages/NotFound";
import Link from "next/link";
import SeoMeta from "@/components/common/SeoMeta";
export const metadata = {
    title: "Accueil | Fireshield Security - Cybersécurité, protection et détection",
    description: "Cybersécurité et gestion des systèmes d'information (SI)",
  };
export default function Page() {
  return (
    <>
        <SeoMeta title={metadata.title} />
      <HeaderTop />
      <Header />
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
                  Page Not Found
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link scroll={false} href={`/`}>
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-chevrons-right" />
                  </li>
                  <li>Page Not Found</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <NotFound />
        <Cta />
      </main>
      <Footer />
    </>
  );
}