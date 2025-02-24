"use client"
import Image from "next/image";
import Link from "next/link";
export default function Expertise(){

    return(

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

  <div class="row text-center py-2 ">
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
<div className="w-full ">
  <div className=" flex flex-col w-full p-4">
    <img 
      src="/assets/img/about/aboutThumb1_2.png" 
      alt="" 
      className="w-full h-full object-cover" 
    />
  </div>
</div>
</div>
           
</div>
      
    )
}