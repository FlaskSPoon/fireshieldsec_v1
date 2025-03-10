"use client"
import { infogerance, support_si } from '@/data/infogerance';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { motion } from "framer-motion";
export default function Infogerance() {
  return (
    <div className="container-fluid">
      <div className="container-fluid">
      <h2 className=" text-center text-dark mt-2"style={{
      backgroundImage: "url('/assets/img/about/Picture18.png')",
      backgroundSize: "cover",
  
      backgroundRepeat: "no-repeat",
      width: "100vw", 
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "100px",
      color: "white"
    }}>
        Infogérance et Support SI
      </h2>
      </div>
     
<div><h5 className="subtitle text-start">
                            <span>
                              <Image
                                alt="icon"
                                src="/assets/img/icon/titleIcon.png"
                                width="28"
                                height="12"
                              />
                            </span>{" "}
                            Fireshield Security prend en charge la
gestion complète ou partielle de votre
système d'information, vous permettant
ainsi de vous concentrer sur votre cœur
de métier.{" "}
                            <span>
                              <Image
                                alt="icon"
                                src="/assets/img/icon/titleIcon.png"
                                width="28"
                                height="12"
                              />
                            </span>
                          </h5></div>
      <div className=" d-flex justify-content-center">
         
        <div className="">
          <div className=" text-center p-3">
            <h5 className="bg-danger text-white p-2 card">INFOGÉRANCE</h5>
            <p className="text-dark">
              Fireshield Security prend en charge la gestion complète ou partielle de votre SI.
            </p>
            {/* <Image alt="icon" src="/assets/img/hero/undraw_sele.svg" width="180" height="82" /> */}
            <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
            {infogerance.map((service, index) => (
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
                  <h6 className="service-content_title">
                    <Link scroll={false} href={`/audit/${service.id}`}>
                      {service.title}
                    </Link>
                  </h6>
                  <p className="text-container">{service.description}</p>
                
                
                  
                  <div className="p-2">
                    <Link scroll={false} className="link" href={`/service-details/${service.id}`}>
                      Plus de détails
                      <i className="fa-sharp fa-light fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </motion.div>
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
                        <p className="text-container">
                          {service.description}
                        </p>

                        <div className="p-2">
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




    
  );
}
