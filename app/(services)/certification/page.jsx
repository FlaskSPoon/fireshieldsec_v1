"use client"

import Image from "next/image";
import Link from "next/link";

export default  function Certification(){

    return(
        <>
        <div className="container  text-white">
        <h1 className="border"> <Image
      alt="icon"
      src="/assets/img/hero/top-view.png"
      width={140}
      height={20} className="p-2 rounded-circle bg-danger float-end"
      
    /> Nos Certifications
    <p className=" d-flex justify-content-center p-4" style={{fontSize:15}}> Nous proposons un accompagnement personnalisé pour les certifications <br/>en cybersécurité,
    avec des formateurs chevronnés et certifiés.</p>
    </h1>
        

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
        <div className="d-flex justify-content-between align-items-start">
  

  <div className="w-50 card bg-light">
    <h5 className="text-danger card text-center">FORMATIONS SPÉCIALISÉES</h5>
    <ul className="text-dark">
      <li>➤ FSEC-INT1 : Techniques essentielles de cybersécurité</li>
      <li>➤ FSEC-INT2 : Fondamentaux techniques de la cybersécurité</li>
      <li>➤ FSEC-IND : Cybersécurité des systèmes industriels</li>
      <li>➤ FSEC-IoT : Sécurité des objets connectés</li>
      <li>➤ FSEC-MOB : Audit sécurité d’applications mobiles Android et iOS</li>
      <li>➤ FSEC-PKI : Principes et mise en œuvre des PKI</li>
      <li>➤ FSEC-INC1 : Surveillance, détection et réponse aux incidents de sécurité</li>
      <li>➤ FSEC-INC2 : Surveillance, détection et réponse aux incidents avancée</li>
      <li>➤ FCySOC : Détection des incidents de sécurité</li>
      <li>➤ FSEC-AF2 : Analyse forensique avancée</li>
      <li>➤ C-AF1 : Analyse inforensique Windows</li>
      <li>➤ FSEC-iPENT : Tests d’intrusion des systèmes industriels</li>
      <li>➤ FSEC-WPEN : Test d’intrusion des serveurs et applications Web</li>
      <li>➤ FSEC-PENT1 : Tests d’intrusion</li>
      <li>➤ FSEC-PENT2 : Tests d’intrusion et développement d’exploits</li>
      
    </ul>
    <p className=" d-flex justify-content-center"><Link scroll={false} href={`/E-learning`} className="gt-btn gt-btn-icon justify-center flex flex-col items-center ">
              En savoir +
            </Link></p>
  </div>

  <div className="w-50 bg-light p-4 rounded shadow">
    <h5 className="text-center text-dark bg-danger p-2 rounded">INSCRIPTION</h5>
    <form>
      <div className="mb-3">
        <label className="form-label" required>Nom & Prénom</label>
        <input type="text" className="form-control" placeholder="Votre Nom" />
      </div>
      <div className="mb-3">
        <label className="form-label" required>Email</label>
        <input type="email" className="form-control" placeholder="Votre Email" />
      </div>
      <div className="mb-3">
        <label className="form-label" required>Téléphone</label>
        <input type="tel" className="form-control" placeholder="Votre Téléphone" />
      </div>
      <div className="mb-3">
        <label className="form-label" required>Formation</label>
        <select className="form-select">
          <option value="" required>Sélectionnez la formation</option>
          <option>FSEC-INT1</option>
          <option>FSEC-INT2</option>
          <option>FSEC-IND</option>
          <option>FSEC-IoT</option>
          <option>FSEC-MOB</option>
          <option>FSEC-PKI</option>
          <option> FSEC-PENT1</option>
          <option>FSEC-WEB</option>
        </select>
      </div>
      <button className="btn btn-danger w-100" onClick={handleClick}>S'inscrire</button>
    </form>
  </div>
</div>

        </>
    )
   
}