"use client"

import { motion } from "framer-motion";
import { conseils, gouvernance } from "@/data/conseilAudit";
import { audit, servicesG } from "@/data/servicesG";
import Image from "next/image";
import Link from "next/link";

export default function Audit() {
  return (
    <>
      <div className="container">
        <motion.h2
          className="text-center text-dark mt-2"
          style={{
            backgroundImage: "url('/assets/img/about/global.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "130px",
            color: "white",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Conseil, Audit<br />
          et Gouvernance du SI
        </motion.h2>
      </div>
      <div className="text-center border w-[200px] p-2 card">
        <h2>AUDIT DE SÉCURITÉ</h2>

        <section>
          <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
            {audit.map((service, index) => (
              <motion.div
                className="service-card style2"
                style={{ width: "600px" }}
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="service-thumb"></div>
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
                  <p className="service-content_text text-danger">{service.details}</p>
                  <span>{service.def}</span>
                  <p className="service-content_text text-danger">{service.detailsplus}</p>
                  <span>{service.defs}</span>
                  <div>
                    <Link scroll={false} className="link" href={`/service-details/${service.id}`}>
                      Plus de détails
                      <i className="fa-sharp fa-light fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="bg-base-100 w-96 shadow-sm">
                  <figure className="px-1 pt-1"></figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Conseils</h2>
                    <div className="flex flex-row gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory p-4 w-full justify-center">
                      {conseils.map((service, index) => (
                        <motion.div
                          className="service-card style2"
                          key={index}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                          <div className="service-thumb"></div>
                          <div className="service-content text-center">
                            <em className="service-content_title">
                              <Link href={`/audit/${service.id}`}>{service.title}</Link>
                            </em>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-base-10 w-10">
                  <figure className="px-1 pt-1"></figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Gouvernance</h2>
                    <div>
                      {gouvernance.map((service, index) => (
                        <motion.div
                          className="service-card style2"
                          key={index}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                          <div className="service-thumb"></div>
                          <div className="service-content">
                            <em className="service-content_title">
                              <Link scroll={false} href={`/audit/${service.id}`}>
                                {service.title}
                              </Link>
                            </em>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-actions">
                <motion.button
                  className="btn btn-danger d-flex justify-content-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  En Savoir+
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}