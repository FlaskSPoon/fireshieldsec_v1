"use client"
import Image from "next/image";
import Link from "next/link";
export default function Expertise(){

    return(
<>
  <div class="container justify-center items-center">
  <p class="text-center background-color:red p-3">NOTRE EXPERTISE</p>
  <div class="row text-center py-2  flex justify-between">
  <div className="col-sm-6  flex flex-col justify-center items-center p-4  bg-red-800 text-white">
  <Image alt="icon" src="/assets/img/icon/checkIcon.png" width="48" height="42" />
  <h3 className="text-lg font-bold">MAITRISE</h3>
  <p className="text-sm">Une maitrise des enjeux <br/>stratégiques
  et organisationnels.</p>
</div>
    <div className="col-sm-6  flex flex-col justify-center items-center p-4 bg-red-950 text-white">
    <Image alt="icon" src="/assets/img/icon/commentIcon.png" width="28" height="12" />
  <h3 className="text-lg font-bold">ACCOMPAGNEMENT</h3>
  <p className="text-sm">Un accompagnement sur mesure <br/>qui
permet de mettre en place<br/> des solutions
qui tiennent<br/> compte de votre contexte.</p>
</div>
  </div>

  <div class="row text-center py-2 w-full h-auto">
   <div className="col-sm-6  flex flex-col justify-center items-center p-4  bg-red-800 text-white px-2">
   <Image  className="flex flex-col justify-center items-center" alt="icon" src="/assets/img/icon/aboutIcon4_1.png" width="28" height="12" />
  <h3 className="text-lg font-bold">EXPERIENCE</h3>
  <p className="text-sm">Eprouvée pour préserver<br/>
la confidentialité et l’intégrité<br/> de 
vos données et votre<br/> infrastructure.</p>
</div>
    <div className="col-sm-6 flex flex-col justify-center items-center p-4 bg-red-800 text-white px-2">
     <Image alt="icon" src="/assets/img/icon/bubbleIcon.png" width="28" height="12" />
  <h3 className="text-lg font-bold">SAVOIR-FAIRE</h3>
  <p className="text-sm bg-blue-400">Permettant de faire comprendre<br/>
     facilement les problématiques<br/>
     techniques les plus complexes</p>
</div>

<div className="w-full h-full flex flex-col p-2">
  <div className="flex flex-col w-full p-4">
    <img 
      src="/assets/img/about/aboutThumb1_2.png" 
      alt="" 
      className="w-full h-auto object-cover max-w-full"
    />
  </div>
</div>

</div>
           
</div>
<div className="container d-flex flex-column flex-md-row gap-4 justify-content-center p-4">
      {/* Carte 1 */}
      <div className="card text-white bg-dark shadow-lg" style={{ width: "22rem" }}>
        <div className="card-header bg-danger d-flex align-items-center">
          <img src="/assets/img/about/aboutThumb1_2.png" alt="Conseils" width="30" className="me-2" />
          <h5 className="m-0">CONSEILS</h5>
        </div>
        <div className="card-body">
          <p>Nos services de conseil visent à créer une stratégie de sécurité sur mesure...</p>
          <ul className="list-unstyled">
            <li className="fw-bold text-danger">➤ ÉLABORATION D’UNE STRATÉGIE DE SÉCURITÉ</li>
            <p className="text-light">Définition des politiques adaptées.</p>
            <li className="fw-bold text-danger">➤ CONFORMITÉ RÉGLEMENTAIRE</li>
            <p className="text-light">Respect des normes en vigueur.</p>
          </ul>
        </div>
      </div>

      {/* Carte 2 */}
      <div className="card text-white bg-dark shadow-lg" style={{ width: "22rem" }}>
        <div className="card-header bg-danger d-flex align-items-center">
          <img src="/assets/img/about/aboutThumb1_2.png" alt="Gouvernance" width="30" className="me-2" />
          <h5 className="m-0">GOUVERNANCE</h5>
        </div>
        <div className="card-body">
          <p>La gouvernance des systèmes d’information garantit que les TI soutiennent...</p>
          <ul className="list-unstyled">
            <li className="fw-bold text-danger">➤ MODÈLE DE GOUVERNANCE</li>
            <p className="text-light">Cadre adapté à votre organisation.</p>
          </ul>
        </div>
      </div>
    </div>
</>    
    )
}