"use client"

import { motion } from "framer-motion";
import { conseils, gouvernance } from "@/data/conseilAudit";
import { audit, audits, servicesG } from "@/data/servicesG";
import Image from "next/image";
import Link from "next/link";
import SeoMeta from '@/components/common/SeoMeta';
import { metadata } from "@/app/not-found";

export default function Audit() {
  return (
    <>
     < SeoMeta title={metadata.title}/>
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
                Conseil, Audit<br />
                et Gouvernance du SI
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
                  <li>services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
       
      </main>
      <div className="container">
        <motion.h2
           className="breadcumb"
           data-bg-src=""
           style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
         
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