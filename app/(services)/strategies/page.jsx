"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import { detection, proteger, reponse, strategie } from '@/data/strategie';
import Link from 'next/link';
import SeoMeta from '@/components/common/SeoMeta';
import { metadata } from '@/app/not-found';

export default function Strategie() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <>
    
    <SeoMeta title={metadata.title}/>
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

        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInRight} className="text-white bg-dark text-center" style={{
          backgroundImage: "url('/assets/img/about/stock.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          minHeight: "30vh",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          padding: "80px"
        }}>
          REPONSE
        </motion.h2>
        <div className="service-card-wrapper style2 p-4">
          {reponse.map((service, index) => (
            <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} key={index}>
              <div className="service-content">
                {/* <Image className="d-flex justify-content-center" alt="icon" src={service.bgImage} width={40} height={10} /> */}
                <h6 className="service-content_title">
                  <Link scroll={false} href={`/audit/${service.id}`}>{service.title}</Link>
                </h6>
                <p className="service-content_text">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInRight} className="text-center text-danger">
          PROTÉGER
        </motion.h2>
        <div className="service-card-wrapper style2 p-4">
          {proteger.map((service, index) => (
            <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} key={index}>
              <div className="service-content">
                <h6 className="service-content_title">
                  <Link scroll={false} href={`/audit/${service.id}`}>{service.title}</Link>
                </h6>
                <p className="service-content_text">{service.description}</p>
              </div>
            </motion.div>
          ))}
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
    </>
  );
}