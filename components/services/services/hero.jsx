"use client"
import Image from "next/image";
import Link from "next/link";
export default function HeroServices(){

   return typeof window !== 'undefined' &&(
    <>
    <div class="container">
    <div className="p-4">
  <div 
    style={{
      backgroundImage: "url('/assets/img/about/aboutThumb1_2.png')",
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
    }}
  >
    <h2 className="text-center p-3">
      Conseil, Audit <br/>
      et Gouvernance du SI
    </h2>
    <p className="text-white text-center">
      La sécurité des systèmes d'information est cruciale pour <br/>la pérennité de votre entreprise.  
      Chez FIRESHIELD SECURITY,<br/> nous proposons des solutions complètes et adaptées <br/>aux besoins spécifiques  
      des petites et moyennes entreprises.<br/> Notre mission est de vous aider à protéger vos données sensibles,  
      <br/> à prévenir les cyberattaques et à assurer la continuité de vos opérations.
    </p>
  </div>
</div>

  <div class="row text-center py-2  flex justify-between">
  
  <div className="col-sm-6  flex flex-col justify-center items-center p-4  bg-red-950 ">
 
  <h5 className="text-lg font-bold"> ➤ AUDIT DE SÉCURITÉ <br />
  DE L'INFORMATION</h5>
  <p className="text-sm">Un audit de sécurité est une évaluation 
complète de vos systèmes d'information
pour identifier les vulnérabilités et les
risques. Il permet de fournir des
recommandations spécifiques pour
renforcer votre sécurité. Comprendre
la maturité actuelle de votre SI est
indispensable pour toute amélioration.</p>
<h5 className="fw-bold "> 
  ➤ AUDITS COMPLETS DE  <br/>
VOTRE INFRASTRUCTURE <br/>
ET DE VOS SYSTÈMES</h5>
<h6>Audit de sécurité : </h6>
            <p>Évaluation approfondie de la sécurité
            de votre système informatique </p>
<h6>Audit de système : </h6>
<p>Évaluation de l’infrastructure 
informatique, des réseaux, des
applications et des bases de données.</p>
</div>
    <div className="col-sm-6  gx-5 flex flex-col justify-center items-center p-4 text-white">
  
  <h5 className="text-lg font-bold"> ➤ ÉVALUATIONS DE 
LA CONFORMITÉ<br/> AUX 
NORMES  DE SÉCURITÉ<br/>
ET DE RÉGLEMENTATION</h5>
  <h6 className="">Audit de conformité :</h6>
  <p>Accompagnement dans votre
processus de certification aux normes
internationales ISO/IEC 27001, RGPD</p>

<Image alt="icon" src="/assets/img/hero/Container-2.png" width="1200" height="42" />
</div>

  </div>

  <div class="row text-center py-2 w-full h-auto">
   <div className="col-sm-6  flex flex-col justify-center items-center p-4  bg-red-800 text-white px-2">
   <Image  className="flex flex-col justify-center items-center" alt="icon" src="/assets/img/hero/group1.png" width="1000" height="500" />
  
</div>
    <div className="col-sm-6 flex flex-col justify-center items-center p-4 bg-red-800 text-white px-2">
    
  <h5 className="text-lg font-bold"> ➤ ANALYSES DES
PERFORMANCES POUR <br />
IDENTIFIER LES AXES
D'OPTIMISATION</h5>
  <h6>Audit de processus :</h6>
  <p>Examen des politiques et procédures
  de sécurité</p>

  <div className="profile-wrapper flex justify-start m-5">
            <Link scroll={false} href={`/contact`} className="gt-btn gt-btn-icon">
              En savoir +
            </Link>
          </div>
</div>



</div>
           
</div> 

 </>
    
   );
   
   
}
//code cylindrique
// "badge bg-danger text-white d-flex flex-column align-items-center p-5 rounded-pill col-sm-3 card"
    //   style={{ width: "400px", height: "650px", overflow: "hidden", textAlign: "center" }}