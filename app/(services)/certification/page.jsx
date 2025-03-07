"use client"

import { metadata } from "@/app/not-found";
import SeoMeta from "@/components/common/SeoMeta";
import { autre, icn, pen } from "@/data/certification";
import Image from "next/image";
import Link from "next/link";

export default  function Certification(){

    return(
        <>
              <SeoMeta title={metadata.title} />

              <div  className="  breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}>
              <div className="container text-center text-white">
              <div className="page-heading">
                <h1 className="wow fadeInUp text-white" data-wow-delay=".3s">
                  Nos Formation & Certifications
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li className="text-white">
                    <Link scroll={false} href={`/`}>
                      {" "}
                      Accueil{" "}
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-chevrons-right" />
                  </li>
                  <li>Formations</li>
                </ul>
              </div>
            </div>
            </div>
        <div>

        <div className="d-flex justify-content-between align-items-center">
  <div className="bg-dark">
    <h5 className="text-dark bg-danger m-6 d-flex justify-content-center">CERTIFICATIONS PROPOSÉES</h5>
    <ul className="text-light">
      <li className="mb-3"><span className="bg-danger rounded-circle p-1 me-2">+</span>ISO 27001 LA/LI</li>
      <li className="mb-3"><span className="bg-danger rounded-circle p-1 me-2">+</span>ISO 27005 Risk Manager</li>
      <li className="mb-3"><span className="bg-danger rounded-circle p-1 me-2">+</span>ISO 27032 - Lead Cybersecurity Manager</li>
      <li className="mb-3"><span className="bg-danger rounded-circle p-1 me-2">+</span>ISO 9001 LI/LA</li>
      <li className="mb-3"><span className="bg-danger rounded-circle p-1 me-2">+</span>CISSP</li>
      <li className="mb-3"><span className="bg-danger rounded-circle p-1 me-2">+</span>CISA</li>
      <li className="mb-3"><span className="bg-danger rounded-circle p-1 me-2">+</span>CISM</li>
      <li className="mb-3"><span className="bg-danger rounded-circle p-1">+</span>COMPTIA Security</li>
    </ul>
    
  </div>
  
  <div className="w-50">
    <Image
      alt="icon"
      src="/assets/img/hero/medium.png"
      width={1000}
      height={60}
      className="w-100 object-cover"
    />
  </div>
 
</div>

        </div>
        
       <Specialisation />
        </>
    )
}
export  function Specialisation(){
    function handleClick() {
        alert('Message envoyé avec succés!');
      }
    return(

        <>
        <div class="container-fluid pt-4">
        <div className="text-center">
  <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 inline-block my-4 animate-slideIn">
    <h5 className="card-title inline-block px-3 py-1">
      FORMATIONS SPÉCIALISÉES
    </h5>
    <p className="card-text mt-2">
      Nous développons des formations propriétaires pour répondre aux besoins <br/>
      spécifiques de vos équipes techniques en cybersécurité et sécurité de
      l’information.
    </p>
  </div>
</div>
        
        
       
        
        <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                  {icn.map((service, index) => (
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
              <p className="text ">{service.details}</p>
              <p className="text "> {service.detailsplus}</p>
          
              {/* <div className="btn-wrapper">
                <Link
                  scroll={false}
                  className="link-btn"
                  href={`/service-details/${service.id}`}
                >
                 
                  <i className="fa-sharp fa-light fa-arrow-right-long" />
                </Link>
              </div> */}
            </div>
          ))}
          </div>
      </div>
      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                  {pen.map((service, index) => (
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
              <p className="text ">{service.details}</p>
              <p className="text "> {service.detailsplus}</p>
          <p className="image">{service.bgImage}</p>
              {/* <div className="btn-wrapper">
                <Link
                  scroll={false}
                  className="link-btn"
                  href={`/service-details/${service.id}`}
                >
                 
                  <i className="fa-sharp fa-light fa-arrow-right-long" />
                </Link>
              </div> */}
            </div>
          ))}
          </div>
     

<div className="container fluid">
<div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                  {autre.map((service, index) => (
            <div
              className="service-card style4 wow fadeInUp"
              data-wow-delay={service.delay}
              key={index}
            >
              <div className="service-icon">
                <Image src={service.icon} width={70} height={20} alt="icon" />
              </div>
              <h3 className="service-title">
                <Link scroll={false} href={`/service-1`}>
                  {service.title}
                </Link>
              </h3>
              <p className="text">{service.description}</p>
              <p className="text text-danger">{service.details}</p>
              <p className="text text-danger"> {service.detailsplus}</p>
          
              {/* <div className="btn-wrapper">
                <Link
                  scroll={false}
                  className="link-btn"
                  href={`/service-details/${service.id}`}
                >
                 
                  <i className="fa-sharp fa-light fa-arrow-right-long" />
                </Link>
              </div> */}
            </div>
          ))}
          </div>
</div>

<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
        </>
    )
   
}

{/* <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div> */}