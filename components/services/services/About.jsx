import Image from "next/image";
import Link from "next/link";
export default function About() {
    return (
      <div className="about-area fix position-relative flex justify-end p-4">
        {/* Contenu aligné à droite */}
        <div className="about-content wow fadeInRight text-right max-w-2xl" data-wow-delay=".6s">
          <div className="title-area float-end ...">
            <h5 className="subtitle flex justify-end items-center gap-2">
              <Image alt="icon" src="/assets/img/icon/titleIcon.png" width="28" height="12" />
              VOTRE CYBERSECURITÉ, NOTRE PRIORITÉ
              <Image alt="icon" src="/assets/img/icon/titleIcon.png" width="28" height="12" />
            </h5>
            <h3 className="title">Détection avancée et réponse automatisée aux cybermenaces</h3>
            <p className="text">
              Nous offrons des solutions avancées pour protéger vos systèmes, vos données et votre activité contre les cybermenaces.
            </p>
          </div>
          <h3 className="text-title">Contactez-nous pour en discuter !</h3>
  
          {/* Bouton centré à gauche */}
          <div className="profile-wrapper flex justify-start">
            <Link scroll={false} href={`/contact`} className="gt-btn gt-btn-icon">
              En savoir +
            </Link>
          </div>
        </div>
      </div>
    );
  }
  