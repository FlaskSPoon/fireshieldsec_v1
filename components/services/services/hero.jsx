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
              <motion.div
                className="service-card style2 wow fadeInUp"
                data-wow-delay={service.delay}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05, // Effet de zoom
                  backgroundColor: "#f8f9fa", // Changement de la couleur de fond sur hover
                  transition: { duration: 0.3 },
                }}
                style={{
                  borderRadius: "10px", // Bordures arrondies pour les cartes
                  overflow: "hidden", // Empêche que le contenu dépasse
                  padding: "20px", // Ajout de padding pour que le contenu ne touche pas les bords
                }}
              >
                <div className="service-thumb"></div>
                <div className="service-content">
                  <h3
                    className="service-content_title"
                    style={{ color: "red" }} // Titre en rouge
                  >
                    <Link scroll={false} href={`/audit/${service.id}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="service-content_text">{service.description}</p>
                  <Link
                    scroll={false}
                    className="link"
                    href={`/service-details/${service.id}`}
                  >
                    Plus de détails
                    <i className="fa-sharp fa-light fa-arrow-right-long" />
                  </Link>
                </div>
              </motion.div>
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
            <div>
          
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
            La sécurité des systèmes d'information est cruciale pour la
                        pérennité de votre entreprise. Chez FIRESHIELD SECURITY, nous
                        proposons des solutions complètes et adaptées aux besoins
                        spécifiques des petites et moyennes entreprises. Notre mission est
                        de vous aider à protéger vos données sensibles, à prévenir les
                        cyberattaques et à assurer la continuité de vos opérations.
            </div>
          </div>
          <p className="p-4">
            <a class="btn btn-danger" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              details
            </a>
            
          </p>
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
