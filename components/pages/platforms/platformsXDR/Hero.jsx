"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";

export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("../../../../public/assets/js/tilt.min.js").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);

  return (
    <>
      <section className="hero-3" id="hero">
        <div className="hero-inner style3 img-shine">
          <div className="shape3_1 d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_1.png"
              width="1920"
              height="890"
            />
          </div>
          <div className="shape3_2 d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_2.png"
              width="100"
              height="100"
            />
          </div>
          <div className="shape3_3 d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_3.png"
              width="100"
              height="100"
            />
          </div>
          <div className="shape3_4 d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_4.png"
              width="100"
              height="100"
            />
          </div>
          <div className="shape3_5 d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_5.png"
              width="100"
              height="88"
            />
          </div>
          <div className="shape3_6 d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_6.png"
              width="100"
              height="100"
            />
          </div>
          <div className="shape3_7">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_7.png"
              width="940"
              height="885"
            />
          </div>
          <div className="shape3_8">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_8.png"
              width="761"
              height="1283"
            />
          </div>
          <div className="shape3_9 spin d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_9.png"
              width="26"
              height="37"
            />
          </div>
          <div className="shape3_10 moveAround d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_10.png"
              width="13"
              height="16"
            />
          </div>
          <div className="shape3_10 moveAround2 d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_10.png"
              width="13"
              height="16"
            />
          </div>
          <div className="shape3_10 moveAround3 d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_10.png"
              width="13"
              height="16"
            />
          </div>
          <div className="shape3_10 moveAround4 d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_10.png"
              width="13"
              height="16"
            />
          </div>
          <div className="shape3_10 d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_10.png"
              width="13"
              height="16"
            />
          </div>
          <div className="shape3_11 spin d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_11.png"
              width="26"
              height="37"
            />
          </div>
          <div className="shape3_12 pulse d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_12.png"
              width="13"
              height="16"
            />
          </div>
          <div
            className="shape3_13 d-xxl-block d-none wow fadeInRight"
            data-wow-delay=".5s"
            data-tilt=""
            data-tilt-max={10}
          >
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_13.png"
              width="606"
              height="606"
            />
          </div>
          <div
            className="shape3_14 d-xxl-block d-none wow fadeInRight"
            data-wow-delay=".7s"
            data-tilt=""
            data-tilt-max={10}
          >
            <Image
              alt="shape"
              src="/assets/img/shape/heroShape3_14.png"
              width="606"
              height="606"
            />
          </div>
          <div
            className="thumb1 d-xxl-block d-none wow fadeInRight"
            data-wow-delay="0.9s"
            data-tilt=""
            data-tilt-max={20}
          >
            <Image
              alt="shape"
              src="/assets/img/hero/heroThumb3_1.png"
              width="410"
              height="471"
            />
          </div>
          <div
            className="thumb2 d-xxl-block d-none wow fadeInRight"
            data-wow-delay="1s"
            data-tilt=""
            data-tilt-max={17}
          >
            <Image
              alt="shape"
              src="/assets/img/hero/heroThumb3_2.png"
              width="410"
              height="470"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-10">
                <div className="hero-style3">
                  <h6
                    className="hero-sub-title wow fadeInLeft"
                    data-wow-delay=".2s"
                  >
                    <span className="me-1">
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIconWhite.png"
                        width="28"
                        height="12"
                      />
                    </span>
                    PLATEFORME XDR
                    <span className="ms-1">
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIconWhite.png"
                        width="28"
                        height="12"
                      />
                    </span>
                  </h6>
                  <h1
                    className="hero-title wow fadeInLeft"
                    data-wow-delay=".4s"
                  >
                    <span className="title1">Détection et </span>
                    <span className="title2">Réponse aux</span>
                    <span className="title3"> Menaces</span>
                  </h1>
                  <div
                    className="checklist wow fadeInLeft"
                    data-wow-delay=".7s"
                  >
                    <ul className="ps-0">
                      <li>
                        <Image
                          alt="icon"
                          src="/assets/img/icon/signIconWhite.png"
                          width="17"
                          height="20"
                        />
                      </li>
                      <li className="text-white">
                        Protection étendue au-delà de l'endpoint
                      </li>
                    </ul>
                    <ul className="ps-0">
                      <li>
                        <Image
                          alt="icon"
                          src="/assets/img/icon/signIconWhite.png"
                          width="17"
                          height="20"
                        />
                      </li>
                      <li className="text-white">
                        Détection et réponse aux menaces haute précision
                      </li>
                    </ul>
                  </div>
                  <div
                    className="media-wrapper wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    <div className="btn-wrap">
                      <Link
                        scroll={false}
                        href={`/contact`}
                        className="gt-btn gt-btn-icon"
                      >
                        DEMANDER UNE DEMO
                      </Link>
                    </div>
                    <div className="video-btn-wrap">
                      <a
                        onClick={() => setOpen(true)}
                        className="play-btn popup-video"
                      >
                        <Image
                          alt="icon"
                          src="/assets/img/icon/playerIcon.png"
                          width="48"
                          height="48"
                        />
                      </a>
                      <span className="ms-3">Présentation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
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
