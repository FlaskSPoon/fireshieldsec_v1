"use client";
import Formulaire from "@/components/pages/contact/contact/formulaire";
import SeoMeta from "@/components/common/SeoMeta";
export default function Home() {


        const metadata = {
          title: "Bienvenue sur notre site",
        };
          return (
              <>
          
          
            <SeoMeta title={metadata.title} />
            <main className="main position-relative" id="mains">
        
           
            <Formulaire />
            </main>
          </>
        );
        
}

