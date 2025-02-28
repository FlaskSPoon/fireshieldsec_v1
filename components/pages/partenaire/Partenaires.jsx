import { parternCards } from "@/data/partenaire";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Partenaires() {
  return (
    <section className="service-area space-top mt-1 fix">
      <div className="container">
        <div className="service-card-wrapper style2 mb-30">
          {parternCards.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className={`service-card style2 wow fadeInUp`}
              data-wow-delay={item.delay}
            >
              <div className="service-thumb">
                <Image
                  className={item.hasRipple ? "img-shine" : ""}
                  src={item.thumbSrc}
                  width={270}
                  height={160}
                  alt="thumb"
                />
              </div>
              <div className="service-content">
                <h3 className="service-content_title">
                  <Link scroll={false} href={item.link}>
                    {item.title}
                  </Link>
                </h3>
                <p className="service-content_text">{item.text}</p>
                <Link scroll={false} className="link" href={item.link}>
                  En savoir plus{" "}
                  <i className="fa-sharp fa-light fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="service-card-wrapper style2 mb-30">
          {parternCards.slice(4, 8).map((item, index) => (
            <div
              key={index}
              className={`service-card style2 wow fadeInUp`}
              data-wow-delay={item.delay}
            >
              <div className="service-thumb">
                <Image
                  className={item.hasRipple ? "img-shine" : ""}
                  src={item.thumbSrc}
                  width={270}
                  height={160}
                  alt="thumb"
                />
              </div>
              <div className="service-content">
                <h3 className="service-content_title">
                  <Link scroll={false} href={item.link}>
                    {item.title}
                  </Link>
                </h3>
                <p className="service-content_text">{item.text}</p>
                <Link scroll={false} className="link" href={item.link}>
                  En savoir plus{" "}
                  <i className="fa-sharp fa-light fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
