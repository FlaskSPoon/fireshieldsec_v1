import Image from 'next/image'
import React from 'react'
export default function Infogerance() {
  return (
    <div className="container">
      <h2 className=" text-center text-dark mt-2"style={{
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
      color: "white"
    }}>
        Infogérance et Support SI
      </h2>

      <div className="row d-flex justify-content-center">
        {/* Première carte - INFOGÉRANCE */}
        <div className="col-md-4">
          <div className=" text-center p-3">
            <h5 className="bg-danger text-white p-2 card">INFOGÉRANCE</h5>
            <p className="text-dark">
              Fireshield Security prend en charge la gestion complète ou partielle de votre SI.
            </p>
            <Image alt="icon" src="/assets/img/hero/undraw_sele.svg" width="180" height="82" />
            <h6 className="text-primary">Avantages :</h6>
            <ul className="list-unstyled">
              <li><strong>➤ RÉDUCTION DES COÛTS</strong></li>
              <em>Optimisation budgétaire et réduction des coûts fixes.</em>
              <li><strong>➤ ACCÈS À UNE EXPERTISE SPÉCIALISÉE</strong></li>
              <em>Équipe formée aux dernières technologies.</em>
              <li><strong>➤ MEILLEURE GESTION DES RISQUES</strong></li>
              <em>Surveillance continue et interventions rapides.</em>
            </ul>
          </div>
        </div>

        {/* Deuxième carte - SUPPORT SI */}
        <div className="col-md-4">
          <div className=" text-center p-3">
            <h5 className="bg-danger text-white p-2 card">SUPPORT SI</h5>
            <p className="text-dark">
              Nos services de support garantissent la disponibilité et la performance de vos infrastructures.
            </p>
            <Image alt="icon" src="/assets/img/hero/undraw_two.svg" width="180" height="82" />
            <h6 className="text-primary">Nos services comprennent :</h6>
            <ul className="list-unstyled">
              <li><strong>➤ SUPPORT TECHNIQUE</strong></li>
              <em>Assistance et résolution des problèmes techniques.</em>
              <li><strong>➤ INSTALLATION & CONFIGURATION</strong></li>
              <em>Optimisation des réseaux et systèmes.</em>
              <li><strong>➤ SUPERVISION 24/7</strong></li>
              <em>Surveillance continue et interventions en temps réel.</em>
            </ul>
          </div>
        </div>

        <div className="col-md-4">
          <div className=" text-center p-3">
            <ul className="list-unstyled">
              <li><strong>➤ MAINTENANCE</strong> </li>
            </ul>
            <p className="text-dark">
              Fireshield Security propose des solutions de maintenance adaptées aux PME.
            </p>
            <ul className="list-unstyled">
              <li><strong>➤ MAINTENANCE PRÉVENTIVE</strong></li>
              <em>Vérifications et mises à jour régulières.</em>
              <li><strong>➤ MISE À JOUR ANTIVIRUS</strong></li>
              <em>Protection continue contre les menaces.</em>
              <li><strong>➤ TÉLÉMAINTENANCE</strong></li>
              <em>Assistance à distance rapide et efficace.</em>
            </ul>
          </div>
        </div>
      </div>
      <Hero />
    </div>
  );
}


 
export function Hero(){

  return(

    <>
   <div className="container-fluid p-0">
   
</div>

    </>
  )
}