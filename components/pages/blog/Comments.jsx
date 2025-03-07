import React from "react";
import Image from "next/image";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Comments() {
  return (
    <div className="comments-area wow fadeInUp" data-wow-delay="1.2s">
      <div className="comments-heading">
        <h3>02 Commentaires</h3>
      </div>
      <div className="blog-single-comment d-flex gap-4 pt-30 pb-30">
        <div className="image">
          {/* <Image
            alt="image"
            src="/assets/img/blog/blogProfileThumb3_1.png"
            width="96"
            height="96"
          /> */}
          <FaRegCircleUser size={22} color="#e02234" />{" "}
        </div>
        <div className="content">
          <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
            <div className="con">
              <h5>
                <a href={`#`}>Issa Diarra</a>
              </h5>
              <span>12 Dec 2024 à 10h15</span>
            </div>
            <div className="btn">
              <a href={`#`} className="reply">
                Répondre
              </a>
            </div>
          </div>
          <p className="mt-10 mb-0">
            Dans notre entreprise à Dakar, nous avons subi une tentative
            d'attaque par ransomware l'année dernière. Heureusement, nos
            sauvegardes étaient à jour, mais cela montre à quel point la
            cybersécurité est un enjeu critique en Afrique. Beaucoup
            d’entreprises locales ne prennent pas encore assez de mesures
            préventives.
          </p>
        </div>
      </div>
      <div className="blog-single-comment d-flex gap-4 pt-30 pb-30">
        <div className="image">
          {/* <Image
            alt="image"
            src="/assets/img/blog/blogProfileThumb3_2.png"
            width="96"
            height="96"
          /> */}
          <FaRegCircleUser size={22} color="#e02234" />{" "}
        </div>
        <div className="content">
          <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
            <div className="con">
              <h5>
                <a href={`#`}>Fatoumata Koné</a>
              </h5>
              <span>5 Sept 2024 à 13h45</span>
            </div>
            <div className="btn">
              <a href={`#`} className="reply">
                Répondre
              </a>
            </div>
          </div>
          <p className="mt-10 mb-0">
            Merci pour cet article ! Il est crucial que les PME africaines
            prennent conscience des risques liés aux ransomwares. Trop souvent,
            on pense que ces attaques ne concernent que les grandes entreprises,
            alors que les hackers ciblent aussi les structures plus petites,
            souvent mal protégées.
          </p>
        </div>
      </div>
    </div>
  );
}
