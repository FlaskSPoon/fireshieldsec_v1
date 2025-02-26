
"use client"
import React from 'react'
import Image from "next/image";
export default function Strategie() {
  return (
    <div className="container my-5">
    <div className="row gx-5">
      {/* Colonne Gauche */}
      <div className="col-md-6 ">
        <h2 className="fw-bold text-primary">
          Stratégie, <br/>
          Cybersécurité <br/>
          et Consulting
        </h2>
        <p className="fs-4 fst-italic">
          "À quel point êtes-vous <span className="fw-bold text-danger">prêt</span> ?"
        </p>
        <p className="">
          Les données et les infrastructures critiques <br/> sont constamment menacées par des<br/> cyberattaques  sophistiquées.
        </p>
        <p className="">
          Les conséquences des violations peuvent <br/>inclure des pertes financières importantes <br/>et des atteintes à la réputation.
        </p>
        <p className="">
          Il est donc essentiel de mettre en place <br/>des stratégies de cybersécurité robustes<br/> pour assurer la continuité des opérations.
        </p>
        <div class="container">
  <div class="row bg-dark">
    <div class="col align-self-start card">
   <h4 className="text-dark text-center card">PROTÉGER</h4> 
    <p className="small ">Nos services de sécurité offensive incluent
des tests d'intrusion et des opérations de
Red Teaming pour évaluer et renforcer
votre cybersécurité</p>
<h5>
    <Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="20" height="12" />
  TEST D'INTRUSION <br/>
</h5>
<em className="small text-danger">Évaluation éthique de la cybersécurité
visant à identifier et exploiter en toute
sécurité les vulnérabilités de vos
systèmes.</em>
<h6>Nous réalisons les tests suivants: </h6>
<ol className="bg-danger text-white">
<li>Test de réseaux (internes et externes)</li>
<li>Test des applications web</li>
<li>Test de d'intrusion cloud</li>
<li>Test sans fil</li>
<li>Ingénierie sociale</li>
<li> Test de sécurité mobile</li>
<li>Revue de code source applicatif</li>
</ol>
<h5 >
    <Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="20" height="12" />
    OPÉRATIONS DE RED TEAMING <br/>
</h5>
<em className="small   text-center">
    Simulation d'attaques réalistes <br/> pour tester la sécurité de votre <br/> organisation, 
    évaluer les capacités de détection  et de <br/>réponse, et améliorer la résilience.
</em>
{/* style={{
    backgroundImage: "url('/assets/img/hero/heroThumb3_1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "",
    color: "white"
}} */}
    </div>
    <div class="col align-self-center">
    
    <h4 className="text-danger text-center card">RÉPONDRE</h4>
    <em className="small">Nos services de réponse aux incidents
sont conçus pour une action rapide et
stratégique, minimisant les impacts sur
vos actifs, vos opérations et votre
réputation.</em>
<h5 className="text-white">
    <Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="20" height="12" />
    INTERVENTION
EN CAS D'INCIDENT <br/>
</h5>
<em className="small  text-light">Assistance immédiate pour gérer et
résoudre les incidents de sécurité.
</em>
<h5 className="text-white">
    <Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="20" height="12" />
    INVESTIGATION NUMÉRIQUE <br/>
</h5>
<em className="small  text-light">Analyse détaillée des incidents pour
comprendre les causes et prévenir les
récidives.
</em>
<h5 className="text-white">
    <Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="20" height="12" />
    EXERCICES DE RÉPONSE
AUX INCIDENTS <br/>
</h5>
<p className="small  text-light">Simulations régulières pour préparer
vos équipes à gérer les crises.
</p>
    </div>
 
  </div>
</div>
      </div>

      {/* Colonne Droite (Bloc Noir) */}
      <div className="col-md-6">
        <div className="card  text-white p-4">
          <div className="d-flex align-items-center">
            {/* <Image src="/assets/img/icon/serviceIcon1_1.png" alt="icon" width={40} height={40} /> */}
            <h5 className="ms-2 text-lg font-bold card bg-dark text-white flex flex-col justify-center items-center ">STRATÉGIE DE SÉCURITÉ <br/> DE L'INFORMATION</h5>
          </div>
          <p className="">
            Une stratégie et une gouvernance efficaces du système d’information (SI) sont essentielles pour garantir la compétitivité et la résilience de votre entreprise.
          </p>
          <p>
            <strong className=" fw-bold text-danger">Fireshield Security</strong> vous accompagne dans la mise en place de solutions adaptées à vos besoins spécifiques.
          </p>
          <ul className="list-unstyled">
            <li>
              <span className="fw-bold text-dark">➤ ANALYSE ET DIAGNOSTIC</span>
              <p>Évaluation de votre infrastructure actuelle et identification des faiblesses.</p>
            </li>
            <li>
              <span className="fw-bold text-dark">➤ DÉFINITION DES OBJECTIFS</span>
              <p>Collaboration avec vous pour définir des objectifs mesurables.</p>
            </li>
            <li>
              <span className="fw-bold text-dark">➤ PLAN DE TRANSFORMATION</span>
              <p>Élaboration d’un plan stratégique pour améliorer la sécurité de votre SI.</p>
            </li>
          </ul>
          <Image src="/assets/img/hero/standard.png" alt="Cyber Security" width={700} height={1} className="img-fluid" />

          <div class="col align-self-start ">
    <h4 className="text-dark text-center card bg-danger">DÉTECTER</h4>
    <p className="small">Notre service de détection des menaces
offre une protection proactive pour
garantir la sécurité de vos informations
sensibles et la continuité des opérations.</p>
<h5>
<Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="20" height="12" />SURVEILLANCE
EN TEMPS RÉEL
</h5>
<p>Suivi constant des activités réseau pour
identifier les comportements suspects.</p>

<h5>
<Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="20" height="12" />ANALYSE
COMPORTEMENTALE
</h5>
<p>Utilisation d'algorithmes avancés pour
détecter les anomalies et menaces
potentielles</p>

<h5>
<Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="20" height="12" />ALERTES INSTANTANÉES
</h5>
<p>Notifications immédiates en cas de
détection d'incidents de sécurité</p>
    </div>
        </div>
      </div>
    </div>

    {/* Image en bas */}
   
    
  </div>
  )
}
