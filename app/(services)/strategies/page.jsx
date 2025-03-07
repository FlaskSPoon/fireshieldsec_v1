import SeoMeta from "@/components/common/SeoMeta";
import Cta from "@/components/footers/Cta";
import React from "react";
import Image from "next/image";
import { detection, proteger, reponse, strategie } from "@/data/strategie";
import Link from "next/link";

export const metadata = {
  title: "Stratégie, Cybersécurité et Consulting | Fireshield Security",
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
                  Stratégie, Cybersécurité et Consulting
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
          <div className="mt-50 mb-5">
            <h5 className="bg-danger text-white text-center fs-3 p-2 card">
              STRATÉGIE DE SÉCURITÉ
            </h5>
            <div className="service-card-wrapper style2 p-4 d-flex justify-items-center">
              {strategie.map((service, index) => (
                <div className="service-content">
                  <Image
                    className="d-flex justify-content-center"
                    alt="icon"
                    src={service.bgImage}
                    width={40}
                    height={30}
                  />
                  <h6 className="service-content_title">
                    <Link scroll={false} href={`/audit/${service.id}`}>
                      {service.title}
                    </Link>
                  </h6>
                  <p className="service-content_text">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-50 mb-5">
            <h5 className="bg-danger text-white text-center fs-3 p-2 card">
              DETECTION
            </h5>
            <div className="service-card-wrapper style2 p-4">
              {detection.map((service, index) => (
                <div className="service-content">
                  {/* <Image
                    className="d-flex justify-content-center"
                    alt="icon"
                    src={service.bgImage}
                    width={40}
                    height={30}
                  /> */}
                  <h6 className="service-content_title">
                    <Link scroll={false} href={`/audit/${service.id}`}>
                      {service.title}
                    </Link>
                  </h6>
                  <p className="service-content_text">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-50 mb-5">
            <h5 className="bg-danger text-white text-center fs-3 p-2 card">
              REPONSE
            </h5>
            <div className="service-card-wrapper style2 p-4">
              {reponse.map((service, index) => (
                <div className="service-content">
                  {/* <Image className="d-flex justify-content-center" alt="icon" src={service.bgImage} width={40} height={10} /> */}
                  <h6 className="service-content_title">
                    <Link scroll={false} href={`/audit/${service.id}`}>
                      {service.title}
                    </Link>
                  </h6>
                  <p className="service-content_text">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-50 mb-5">
            <h5 className="bg-danger text-white text-center fs-3 p-2 card">
              PROTÉGER
            </h5>
            <div className="service-card-wrapper style2 p-4">
              {proteger.map((service, index) => (
                <div className="service-content">
                  <h6 className="service-content_title">
                    <Link scroll={false} href={`/audit/${service.id}`}>
                      {service.title}
                    </Link>
                  </h6>
                  <p className="service-content_text">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="ms-3">
            <Link
              scroll={false}
              href={`/contact`}
              className="gt-btn gt-btn-icon"
            >
              EN SAVOIR PLUS
            </Link>
          </div>
        </div>

        <div className="pb-300" />
        <Cta />
      </main>
    </>
  );
}
