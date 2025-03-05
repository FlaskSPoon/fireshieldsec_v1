"use client"

import { motion } from "framer-motion";
import { conseils, gouvernance } from "@/data/conseilAudit";
import { audit, audits, servicesG } from "@/data/servicesG";
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
          <div className="container">
            <div className="row">
              <div className="">
                <div className="bg-base-100 w-96 shadow-sm">
                  <figure className="px-1 pt-1"></figure>
    
                  <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                  {audits.map((service, index) => (
            <div
              className="service-card style4 wow fadeInUp"
              data-wow-delay={service.delay}
              key={index}
            >
              <div className="service-icon">
                <Image src={service.icon} width={100} height={20} alt="icon" />
              </div>
              <h3 className="service-title">
                <Link scroll={false} href={`/service-1`}>
                  {service.title}
                </Link>
              </h3>
              <p className="text">{service.description}</p>
              <p className="text text-danger">{service.details}</p>
              <p className="text text-danger"> {service.detailsplus}</p>
          
              <div className="btn-wrapper">
                <Link
                  scroll={false}
                  className="link-btn"
                  href={`/service-details/${service.id}`}
                >
                  En savoir plus{" "}
                  <i className="fa-sharp fa-light fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          ))}
          </div>
                </div>
              </div>
             
             
            </div>
          </div>
          </div>
               <div className=""><h2>CONSEILS</h2> 
          <div className="container">
            <div className="row">
              <div className="">
                <div className="bg-base-100 w-96 shadow-sm">
                  <figure className="px-1 pt-1"></figure>
             
                  <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                  {conseils.map((service, index) => (
            <div
              className="service-card style4 wow fadeInUp"
              data-wow-delay={service.delay}
              key={index}
            >
              <div className="service-icon">
                <Image src={service.icon} width={100} height={20} alt="icon" />
              </div>
              <h3 className="service-title">
                <Link scroll={false} href={`/service-1`}>
                  {service.title}
                </Link>
              </h3>
              <p className="text">{service.description}</p>
              <div className="btn-wrapper">
                <Link
                  scroll={false}
                  className="link-btn"
                  href={`/service-details/${service.id}`}
                >
                  En savoir plus{" "}
                  <i className="fa-sharp fa-light fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          ))}
          </div>
                </div>
              </div>
             
             
            </div>
          </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="">
                <div className="bg-base-100 w-96 shadow-sm">
                  <figure className="px-1 pt-1"></figure>
                  <h2 className=" p-4 text-dark">GOUVERNANCE</h2>
                  <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                  {gouvernance.map((service, index) => (
            <div
              className="service-card style4 wow fadeInUp"
              data-wow-delay={service.delay}
              key={index}
            >
              <div className="service-icon">
                <Image src={service.icon} width={100} height={20} alt="icon" />
              </div>
              <h3 className="service-title">
                <Link scroll={false} href={`/service-1`}>
                  {service.title}
                </Link>
              </h3>
              <p className="text">{service.description}</p>
              <div className="btn-wrapper">
                <Link
                  scroll={false}
                  className="link-btn"
                  href={`/service-details/${service.id}`}
                >
                  En savoir plus{" "}
                  <i className="fa-sharp fa-light fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          ))}
          </div>
                </div>
              </div>
             
             
            </div>
          </div>
        </section>
      </div>
    </>
  );
}