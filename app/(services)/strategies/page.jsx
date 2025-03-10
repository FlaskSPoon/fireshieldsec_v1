"use client"
import Link from 'next/link';
import { motion } from "framer-motion";
import Cta from "@/components/footers/Cta";
import React from "react";
import Image from "next/image";
import { detection, proteger, reponse, strategie } from '@/data/strategie';



export default function Page() {


  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
    
    <main>
      
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="border rounded text-center">
        <h1 style={{
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
          color: "white"
        }}>
          Stratégie, Cybersécurité et Consulting
        </h1>
      </motion.div>

      <div className="my-5 text-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInLeft} className="text-danger text-center">
          STRATÉGIE DE SÉCURITÉ
        </motion.h2>
        <div className="service-card-wrapper style2 p-4 d-flex justify-items-center">
          {strategie.map((service, index) => (
            <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} key={index}>
              <div className="service-content">
                <Image className="d-flex justify-content-center" alt="icon" src={service.bgImage} width={40} height={30} />
                <h6 className="service-content_title">
                  <Link scroll={false} href={`/audit/${service.id}`}>{service.title}</Link>
                </h6>
                <p className="service-content_text">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

       

        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInLeft} className="text-center bg-info">
          DETECTION
        </motion.h2>
        <div className="service-card-wrapper style2 p-4">
          {detection.map((service, index) => (
            <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} key={index}>
              <div className="service-content">
                <Image className="d-flex justify-content-center" alt="icon" src={service.bgImage} width={40} height={30} />
                <h6 className="service-content_title">
                  <Link scroll={false} href={`/audit/${service.id}`}>{service.title}</Link>
                </h6>
                <p className="service-content_text">{service.description}</p>
              </div>
            </motion.div>
          ))}
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
