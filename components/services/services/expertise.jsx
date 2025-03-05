"use client"

import Link from "next/link"

export default function Expertise(){

    return(
<>

<div className="container-fluid mt-4">
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
    
    {/* Carte 1 */}
    <div className="col">
      <div className="card text-white bg-dark shadow-lg h-100">
        <div className="card-header bg-danger d-flex align-items-center">
          <img src="/assets/img/icon/aboutIcon1_2.png" alt="Conseils" width="50" className="me-2" />
          <h5 className="m-0">CONSEILS</h5>
        </div>
        <div className="card-body">
          <p className="text-white small">Nos services de conseil visent à créer une stratégie de sécurité sur mesure pour votre entreprise.</p>
          <span>Nos experts réalisent :</span>
          <ul className="list-unstyled">
            <li className="fw-bold text-danger">➤ ÉLABORATION D'UNE
            STRATÉGIE DE SÉCURITÉ</li>
            <p className="text-light small">Définition des politiques et procédures
            adaptées à votre entreprise. </p>
          </ul>
          <ul className="list-unstyled">
            <li className="fw-bold text-danger">➤CONFORMITÉ
            RÉGLEMENTAIRE</li>
            <p className="text-light small">Assurance que vos pratiques <br/> respectent
            les normes et régulations <br/> en vigueur. </p>
          </ul>
        </div>
      </div>
    </div>

    {/* Carte 2 */}
    <div className="col">
      <div className="card text-white bg-dark shadow-lg h-100">
        <div className="card-header bg-danger d-flex align-items-center">
        </div>
        <div className="card-body">
          <ul className="list-unstyled">
            <li className="fw-bold text-danger">➤FORMATION
            DES EMPLOYÉS</li>
            <p className="text-light small">Développement de programmes de 
formation pour vos employés afin de 
renforcer la culture de la sécurité au sein
de votre organisation. </p>
          </ul>
          <ul className="list-unstyled">
            <li className="fw-bold text-danger">➤ANALYSE DES RISQUES</li>
            <p className="text-light small">Identification des risques et élaboration
            des stratégies de mitigation. </p>
          </ul>

          <ul className="list-unstyled">
            <li className="fw-bold text-danger">➤PLAN DE CONTINUITÉ
            D’ACTIVITÉ</li>
            <p className="text-light small">Développement de plans de continuité et
de reprise après sinistre pour minimiser
les interruptions. </p>
          </ul>
        </div>
      </div>
    </div>

    {/* Carte 3 */}
    <div className="col">
      <div className="card text-white bg-dark shadow-lg h-100">
        <div className="card-header bg-danger d-flex align-items-center">
          <img src="/assets/img/icon/aboutIcon1_1.png" alt="Sécurité" width="50" className="me-2" />
          <h5 className="m-0">GOUVERNANCE</h5>
        </div>
        <div className="card-body">
          <p className="text-white small">La gouvernance des systèmes
d'information est un cadre de gestion
qui garantit que les TI soutiennent les
objectifs stratégiques de l'organisation.
Elle inclut la prise de décisions, 
la gestion des risques, la performance,
et la conformité réglementaire.
Nous vous accompagnons dans la
conception d'un cadre de gouvernance
adapté à la taille et à la complexité de
votre organisation :</p>
          <ul className="list-unstyled">
            <li className="fw-bold text-danger">➤ MODÈLE
            DE GOUVERNANCE</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Carte 4 */}
    <div className="col">
      <div className="card text-white bg-dark shadow-lg h-100">
        <div className="card-header bg-danger d-flex align-items-center">
        
        </div>
        <div className="card-body">
          <p className="text-white small">Conception d'un cadre de gouvernance
adapté à la taille et à la complexité de
votre organisation, assurant une gestion
efficace et une prise de décision
informée. </p>
          <ul className="list-unstyled">
            <li className="fw-bold text-danger">➤ POLITIQUES
            ET PROCÉDURES</li>
            <p className="text-light small">Développement de politiques et de
procédures pour garantir la conformité,
la sécurité et l'efficacité opérationnelle</p>
          </ul>
          <ul className="list-unstyled">
            <li className="fw-bold text-danger">➤SUIVI ET ÉVALUATION</li>
            <p className="text-light small">Mise en place de tableaux de bord et
d’indicateurs clés de performance (KPI)
pour surveiller et évaluer la performance
de vos systèmes d'information</p>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

</>    
    )
}