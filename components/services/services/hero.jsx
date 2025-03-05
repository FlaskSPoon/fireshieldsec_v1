"use client";

import { servicesG } from "@/data/servicesG";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import { motion } from "framer-motion"; // Importation de framer-motion pour l'animation

export default function HeroServices() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("../../../public/assets/js/tilt.min.js").then(() => {});
    }
  }, []);

  return (
    typeof window !== "undefined" && (
      <>
        <div className="container">
          <div
            className="p-4"
            style={{
              backgroundImage: "url('/assets/img/hero/blue-colos.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              minHeight: "50vh",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              padding: "60px",
              color: "white",
            }}
          >
            <div>
              <h2 className="text-center p-3">Services Chez FIRESHIELD SECURITY</h2>
            </div>
          </div>

          <div className="service-card-wrapper style2 p-4">
          {servicesG.map((service, index) => (
              <div
                className="service-card style1 wow fadeInUp"
                data-wow-delay={service.delay}
                key={index}
              >
                <div className="card_icon">
                  <Image src={service.icon} width={40} height={40} alt="icon" />
                </div>
                <div className="card_content">
                  <h3>
                    <Link
                      scroll={false}
                      href={`/service-details/${service.id}`}
                      className="title"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text">{service.description}</p>
                </div>
                <div className="link-btn">
                  <Link scroll={false} href={`/service-details/${service.id}`}>
                    <i className="fa-sharp fa-regular fa-arrow-right-long" />
                  </Link>
                </div>
               
              </div>
            ))}
          </div>
          <div
            className="p-4 d-flex justify-content-center"
            style={{ maxWidth: "800px", padding: "10px" }}
          >
            <p className="text-dark text-center d-flex justify-content-center justify-items-center ">
            
            </p>
          </div>

          <div className="row text-center py-2 w-full h-auto">
            <div className="col-sm-6 flex flex-col justify-center items-center p-4 bg-red-800 text-white px-2">
              <Image
                className="flex flex-col justify-center items-center"
                alt="icon"
                src="/assets/img/hero/group1.png"
                width="1000"
                height="500"
              />
            </div>
            <div className="col-sm-6 flex flex-col justify-center items-center p-4 bg-red-800 text-dark px-2">
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body border bg-white">
  La sécurité des systèmes d'information
est cruciale pour la pérennité de votre
entreprise. Chez FIRESHIELD SECURITY,
nous proposons des solutions complètes
et adaptées aux besoins spécifiques des
petites et moyennes entreprises. Notre 
mission est de vous aider à protéger vos 
données sensibles, à prévenir les 
cyberattaques et à assurer la continuité 
de vos opérations.
  </div>
</div>
            </div>
            <div><Link scroll={false} href={`/contact`} className="gt-btn gt-btn-icon">
                  En savoir +
                </Link></div>
          </div>

          

          <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="f2Gzr8sAGB8"
            onClose={() => setOpen(false)}
          />
        </div>
      </>
    )
  );
}
