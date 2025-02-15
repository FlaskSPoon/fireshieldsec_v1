import { features } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Service2() {
  return (
    <section
      className="about-area space fix"
      style={{ paddingBottom: "500px" }}
    >
      <div className="container">
        <div className="about-wrapper style4">
          <div className="about-thumb-box  wow fadeInUp" data-wow-delay=".3s">
            <div className="about-thumb-box about-thumb1">
              <Image
                data-tilt=""
                data-tilt-max={10}
                alt="thumb"
                src="/assets/img/about/aboutThumb4_1.png"
                width="465"
                height="230"
              />
            </div>
            <div className="about-thumb-box about-thumb2">
              <Image
                data-tilt=""
                data-tilt-max={20}
                alt="thumb"
                src="/assets/img/about/aboutThumb4_2.png"
                width="542"
                height="474"
              />
            </div>
            <div className="about-thumb-box about-thumb3">
              <Image
                data-tilt=""
                data-tilt-max={10}
                alt="thumb"
                src="/assets/img/about/aboutThumb4_3.png"
                width="219"
                height="188"
              />
            </div>
          </div>
          <div className="about-content  wow fadeInUp" data-wow-delay=".6s">
            <div className="title-area">
              <h5 className="subtitle text-start">
                {" "}
                <span>
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIcon.png"
                    width="28"
                    height="12"
                  />
                </span>{" "}
                UNE SÉCURITÉ SANS COMPROMIS{" "}
                <span>
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIcon.png"
                    width="28"
                    height="12"
                  />
                </span>{" "}
              </h5>
              <h3 className="title text-start">
                bénéficiez d'une protection renforcée et d'une gestion proactive
                des risques
              </h3>
              <p className="text">
                Notre plateforme XDR offre une sécurité de niveau supérieur,
                garantissant une protection maximale contre les menaces avancées
                et une gestion proactive des risques. Elle vous permet de rester
                à l'avant-garde de la cybersécurité, en surveillant et en
                répondant rapidement aux incidents afin de protéger vos données
                et infrastructures critiques.
              </p>
              <p className="text" style={{ fontWeight: "bold" }}>
                3 Raisons de Choisir une Sécurité Sans Compromis :
              </p>
            </div>
            <div className="checklist">
              {features.map((feature, index) => (
                <ul className="ps-0" key={index}>
                  <li>
                    <Image
                      src={feature.icon}
                      width={20}
                      height={20}
                      alt="icon"
                    />
                  </li>
                  <li>{feature.description}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
