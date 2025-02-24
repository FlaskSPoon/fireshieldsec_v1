"use client"
import Image from "next/image";
import Link from "next/link";
export default function HeroServices(){

   return(
    <>
   <div class="row p-2">
  <div class="col-sm-6">
    <div class="">
      <div class="">
        <h3>Conseil, Audit
et Gouvernance
du SI</h3>
        <Image src="/assets/img/hero/cybersecurity.png" alt=""
        width="1000" height="600"  
        />
        
        <p>La sécurité des systèmes d'information
est cruciale pour la pérennité de votre
entreprise. Chez FIRESHIELD SECURITY,
nous proposons des solutions complètes
et adaptées aux besoins spécifiques des
petites et moyennes entreprises. Notre 
mission est de vous aider à protéger vos 
données sensibles, à prévenir les 
cyberattaques et à assurer la continuité 
de vos opérations</p>
<Link scroll={false} href={`/contact`} className="gt-btn gt-btn-icon">
              En savoir +
            </Link>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="">
      <div class=" bg-light">
        <h5 class=" border">
          <Image 
                              alt="icon"
                              src="/assets/img/icon/aboutIcon1_1.png"
                              width="44"
                              height="44"
                            />AUDIT DE SÉCURITÉ<br/>
        DE L'INFORMATION</h5>
        <em class="">Un audit de sécurité est une évaluation 
complète de vos systèmes d'information
pour identifier les vulnérabilités et les
risques. Il permet de fournir des
recommandations spécifiques pour
renforcer votre sécurité. Comprendre
la maturité actuelle de votre SI est
indispensable pour toute amélioration.</em>
       <span>Nos experts réalisent :</span>
       <h4 className="fs-6 fw-bold" >
         <Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="28" height="12" />
        AUDITS COMPLETS DE
VOTRE INFRASTRUCTURE
ET DE VOS SYSTÈMES</h4>

<h6>Audit de sécurité :</h6>
<span>Évaluation approfondie de la sécurité
de votre système informatique</span>
<h6>Audit de système : </h6>
<span>Évaluation de l’infrastructure 
informatique, des réseaux, des
applications et des bases de données.</span>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="">
      <div class="  bg-light">
      <h4 className="fs-6 fw-bold" >
         <Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="28" height="12" />
         ÉVALUATIONS DE 
LA CONFORMITÉ AUX
NORMES DE SÉCURITÉ
ET DE RÉGLEMENTATION</h4>

<h6>Audit de conformité : </h6>
<span>Accompagnement dans votre
processus de certification aux normes
internationales ISO/IEC 27001, RGPD</span>

<h4 className="fs-6 fw-bold" >
         <Image alt="icon" src="/assets/img/icon/chevron-right.svg" width="28" height="12" />
         ANALYSES DES
PERFORMANCES POUR
IDENTIFIER LES AXES
D'OPTIMISATION</h4>
<h6>Audit de processus :  </h6>
<span>Examen des politiques et procédures
de sécurité</span>
<h5 class=" border py-2">
          <Image className="bg"
                              alt="icon"
                              src="/assets/img/icon/aboutIcon1_2.png"
                              width="44"
                              height="44"
                            />CONSEILS</h5>
        <span>Nos services de conseil visent à créer
une stratégie de sécurité sur mesure
pour votre entreprise.</span>
<h6>Nos experts réalisen:</h6>


      </div>
    </div>
  </div>
</div>
    </>
    
   );
   
   
}