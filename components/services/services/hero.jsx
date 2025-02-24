"use client"

import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
export default function HeroServices(){
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
     
    }
  }, []);
 
    return(
      <>
      <section className="hero-3 w-screen h-screen relative flex items-center justify-center text-white p-4" id="hero">
  {/* Image en arrière-plan */}
  <div 
    className="absolute inset-0 bg-cover bg-center h-screen  w-screen" 
    style={{ backgroundImage: "url('/assets/img/hero/catalogue.png')",
      backgroundSize: "100% auto",
      backgroundPosition: "top center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
     }}
  />

  {/* Texte centré sur l’image */}
 <div className="relative z-10 text-center max-w-1xl px-6">
    <h1 className="text-1xl font-bold p-3 mt-3">DOMAINES
    D'EXPERTISE</h1>
    {/* <p className="mt-4 text-lg">Découvrez nos solutions avancées en cybersécurité</p> */}
    <span className="block mt-2 font-semibold">FIRESHIELD SECURITY</span>
  </div>
</section>

<ModalVideo
  channel="youtube" 
  youtube={{ mute: 0, autoplay: 0 }} 
  isOpen={isOpen} 
  videoId="f2Gzr8sAGB8"
  onClose={() => setOpen(false)}
/>
    </>
    
   
    );
}