import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="about-area fix position-relative">
      <div className="shape3_1 d-none d-xl-block">
        <Image
          alt="shape"
          src="/assets/img/shape/aboutShape2_1.png"
          width="251"
          height="486"
        />
      </div>
      
      <div className="container">
        <div className="about-wrapper style3 pt-50 space-bottom">
          <div className="about-thumb-box wow fadeInLeft" data-wow-delay=".3s">
            <div className="about-thumb-box thumb-bg">
              <Image
                data-tilt=""
                data-tilt-max={10}
                alt="bg"
                src="/assets/img/bg/aboutBg3_1.png"
                width="465"
                height="350"
              />
            </div>
            <div className="about-thumb-box about-thumb1">
              <Image
                data-tilt=""
                data-tilt-max={18}
                alt="thumb"
                src="/assets/img/about/iStock-15.png"
                width="340"
                height="548"
              />
            </div>
            <div className="about-thumb-box movingX about-thumb2">
              <Image
                alt="thumb"
                src="/assets/img/about/aboutThumb3_2.png"
                width="256"
                height="147"
              />
            </div>
            <div className="about-thumb-box jump about-thumb3">
              {/* <Image
                alt="thumb"
                src="/assets/img/about/aboutThumb3_3.png"
                width="254"
                height="145"
              /> */}
            </div>
          </div>
          <div className="about-content wow fadeInRight" data-wow-delay=".6s">
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
                A PROPOS DE NOTRE SOLUTION XDR{" "}
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
                Détection avancée et réponse automatisée aux cybermenaces
              </h3>
              <p className="text">
                Dans un monde où les cyberattaques sont de plus en plus
                sophistiquées, notre solution XDR (Extended Detection and
                Response) offre une protection avancée en surveillant et
                corrélant les menaces à travers plusieurs environnements
                (endpoints, réseaux, serveurs, applications cloud et e-mails).
                Grâce à l’intelligence artificielle et l’apprentissage
                automatique, notre XDR identifie avec précision les attaques,
                réduit les faux positifs et accélère la réponse aux incidents.
              </p>
            </div>
            <h3 className="text-title">Contactez-nous pour en discuter !</h3>
            <div className="fancy-box-wrapper">
              <div className="fancy-box style1">
                <div className="fancy-box_icon">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/aboutIcon1_2.png"
                    width="44"
                    height="44"
                  />
                </div>
                <div className="fancy-box_content">
                  <h4>Détection proactive</h4>
                </div>
              </div>
              <div className="fancy-box style1">
                <div className="fancy-box_icon">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/aboutIcon1_3.png"
                    width="44"
                    height="44"
                  />
                </div>
                <div className="fancy-box_content">
                  <h4>Réponse automatisée</h4>
                </div>
              </div>
            </div>
            <div className="profile-wrapper">
              <Link
                scroll={false}
                href={`/contact`}
                className="gt-btn gt-btn-icon"
              >
                DEMANDER UNE DEMO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
