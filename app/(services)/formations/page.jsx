"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Formation() {
  return typeof window !== 'undefined' &&(
    <div className="container p-2">
      <div className="row d-flex align-items-center">
        {/* Première carte */}
        <div className="col-md-6">
          <div className="card p-3">
            <h3 className="card bg-dark text-white text-center">Formations et Sensibilisation</h3>
            <p className="" style={{}}>
              Notre programme de formation complet est conçu pour permettre à
              votre équipe d'acquérir les connaissances et les compétences
              nécessaires pour identifier, prévenir, et répondre efficacement
              aux cybermenaces. Grâce à des sessions interactives et
              engageantes, nous visons à favoriser une culture de la sécurité au
              sein de votre organisation, transformant vos employés de
              vulnérabilités potentielles en votre ligne de défense la plus
              forte.
            </p>
          </div>
        </div>

        {/* Deuxième carte avec le carrousel */}
        <div className="col-md-6">
          <div className=" p-3">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    src="/assets/img/hero/confident.png"
                    className="d-block w-100"
                    alt=""
                    width={400}
                    height={150}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="/assets/img/hero/group.png"
                    className="d-block w-100"
                    alt=""
                    width={400}
                    height={150}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="/assets/img/hero/diverse.png"
                    className="d-block w-100"
                    alt=""
                    width={400}
                    height={150}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="/assets/img/hero/diverse-stud.png"
                    className="d-block w-100"
                    alt=""
                    width={400}
                    height={150}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="/assets/img/hero/confident1.png"
                    className="d-block w-100"
                    alt=""
                    width={400}
                    height={150}
                  />
                </div>
              </div>

              {/* Boutons de navigation */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Sensibilisation/>
    </div>
  );
}

export function Sensibilisation(){

  return(
    <>
    <div className="p-4">
 
    </div>
    <>
  <div className="container-fluid"><h5 class=" py-2 text-center bg-danger">
          <Image className=""
                              alt="icon"
                              src="/assets/img/icon/padlock_3055803.png"
                              width="44"
                              height="44"
                            />SENSIBILISATION</h5>
    <div className="row d-flex align-items-center">
      {/* Première carte */}
      <div className="col-md-6">
        <div className=" p-3">
          <div>
<span>Notre plateforme de sensibilisation  et 
de test offre des outils pour: </span>

<h4 className="fs-6 fw-bold p-4" >
         <Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="28" height="12" />
         FORMER
         VOS UTILISATEURS</h4>
    <span>Sessions éducatives pour comprendre 
les menaces et <br /> les bonnes pratiques 
de sécurité.</span>

</div>
        </div>
        <Link scroll={false} href={`/contact`} className="gt-btn gt-btn-icon mt-4">
              En savoir +
            </Link>
      </div>

      {/* Deuxième carte avec une image */}
      <div className="col-md-6">
        <div className=" p-3">

<h4 className="fs-6 fw-bold p-4" >
         <Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="28" height="12" />
         HAMEÇONNER
         VOS UTILISATEURS</h4>
    <em>Simulations de phishing pour tester
    et renforcer leur vigilance.</em>

    <h4 className="fs-6 fw-bold p-4" >
         <Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="28" height="12" />
         ANALYSER
         LES RÉSULTATS</h4>
    <em>Évaluations pour identifier les points
faibles et améliorer les stratégies de 
défense.</em>
        </div>
      </div>
    </div>
  </div>
</>

    </>
  )
}
export function Imaheader(){

return(
  <>
  <div className="flex flex-justify-center items-center">
<Image    src=""
alt=""/>
  </div>
  </>
)
}