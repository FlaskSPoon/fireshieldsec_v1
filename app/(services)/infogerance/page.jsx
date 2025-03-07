import SeoMeta from "@/components/common/SeoMeta";
import Cta from "@/components/footers/Cta";
import { infogerance, support_si } from "@/data/infogerance";
import Link from "next/link";
import React from "react";

const metadata = {
  title: "Infogérance et Support SI | Fireshield Security",
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
                  Infogérance et Support SI
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
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div>
            <h5 className="subtitle text-center mt-50 mb-50">
              Fireshield Security prend en charge la gestion complète ou
              partielle de votre système d'information, vous permettant ainsi de
              vous concentrer sur votre cœur de métier.
            </h5>
          </div>
          <div className=" d-flex justify-content-center">
            <div className="">
              <div className=" text-center p-3">
                <h5 className="bg-danger text-white p-2 card">INFOGÉRANCE</h5>
                <p className="text-dark">
                  Fireshield Security prend en charge la gestion complète ou
                  partielle de votre SI.
                </p>
                {/* <Image alt="icon" src="/assets/img/hero/undraw_sele.svg" width="180" height="82" /> */}
                <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                  {infogerance.map((service, index) => (
                    <div
                      className="service-card style2"
                      style={{ width: "600px" }}
                      key={index}
                    >
                      <div className="service-thumb"></div>
                      <div className="service-content">
                        <h6 className="service-content_title">
                          <Link scroll={false} href={`/audit/${service.id}`}>
                            {service.title}
                          </Link>
                        </h6>
                        <p className="service-content_text">
                          {service.description}
                        </p>

                        <div>
                          <Link
                            scroll={false}
                            className="link"
                            href={`/service-details/${service.id}`}
                          >
                            Plus de détails
                            <i className="fa-sharp fa-light fa-arrow-right-long" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" text-center p-3">
                <h5 className="bg-danger text-white p-2 card">SUPPORT SI</h5>
                <p className="text-dark">
                  Nous proposons une gamme complète de services de support des
                  systèmes
                  <br />
                  d'information pour garantir la disponibilité et la performance
                  de vos infrastructures.
                </p>
                <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                  {support_si.map((service, index) => (
                    <div
                      className="service-card style2"
                      style={{ width: "600px" }}
                      key={index}
                    >
                      <div className="service-thumb"></div>
                      <div className="service-content">
                        <h6 className="service-content_title">
                          <Link scroll={false} href={`/audit/${service.id}`}>
                            {service.title}
                          </Link>
                        </h6>
                        <p className="service-content_text">
                          {service.description}
                        </p>

                        <div>
                          <Link
                            scroll={false}
                            className="link"
                            href={`/service-details/${service.id}`}
                          >
                            Plus de détails
                            <i className="fa-sharp fa-light fa-arrow-right-long" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-300" />
        <Cta />
      </main>
    </>
  );
}
