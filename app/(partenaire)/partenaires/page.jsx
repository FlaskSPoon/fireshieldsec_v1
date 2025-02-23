
"use client";
import SeoMeta from "@/components/common/SeoMeta";
import Partenaire from "@/components/partenaire/partenaire/page";
import Confiance from "@/components/partenaire/partenaire/confiance";
import Equipe from "@/components/partenaire/partenaire/equipe";


export default function Home() {

  const metadata = {
    title: "Bienvenue sur notre site",
  };
    return (
        <>
    
    
      <SeoMeta title={metadata.title} />
      <main className="main position-relative" id="mains">
  
<Partenaire/>
<Confiance />
<Equipe />
      </main>
    </>
  );
  
            
}


