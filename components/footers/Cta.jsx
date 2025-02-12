import React from "react";
import Link from "next/link";
import Image from "next/image";
import config from "@/config/config.json";

export default function Cta() {

  const { title, button, scroll } = config.call_to_action;

  return (
    <section
      className="cta-area mt-n150 mb-n116 wow fadeInUp"
      data-wow-delay=".6s"
    >
      <div className="container">
        <div className="cta-wrap style1">
          <div className="shape1_1 rotate360 d-none d-xl-block">
            <img
              alt="shape"
              width={80}
              height="80"
              src="/assets/img/shape/ctaShape1_1.png"
            />
          </div>
          <div className="shape1_2 d-none d-xl-block">
            <Image
              alt="shape"
              src="/assets/img/shape/ctaShape1_2.png"
              width="119"
              height="200"
            />
          </div>
          <div className="shape1_3 d-none d-xl-block">
            <Image
              alt="shape"
              src="/assets/img/shape/ctaShape1_3.png"
              width="85"
              height="144"
            />
          </div>
          <div className="cta-thumb d-none d-xl-block">
            <Image
              alt="thumb"
              src="/assets/img/cta/ctaThumb.png"
              width="393"
              height="357"
            />
          </div>
          <h3
            className="cta-title text-white wow fadeInUp"
            data-wow-delay=".3s"
          >
            {title}
          </h3>
          <div className="btn-wrapper">
            <Link
              scroll={scroll}
              className="gt-btn style5 gt-btn-icon"
              href={button.link}
            >
              {button.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
