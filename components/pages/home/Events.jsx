"use client";
import { events } from "@/data/events";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Projects() {
  const swiperOptions = {
    loop: true,

    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 1, centeredSlides: true },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 }
    },
    modules: [Navigation],
    navigation: {
      prevEl: ".snbp1",
      nextEl: ".snbn1"
    }
  };

  return (
    <section className="project-area">
      <div
        className="project-wrap style1 space fix"
        style={{
          backgroundImage: "url(/assets/img/bg/portfolioBg1_1.png)",
          backgroundSize: "cover"
        }}
      >
        <div className="container">
          <div className="title-wrap mb-50">
            <div className="title-area">
              <h6
                className="text-start text-white wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="me-1">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIconWhite.png"
                    width="28"
                    height="12"
                  />
                </span>
                WEBINAIRES ET EVENEMENTS
                <span className="ms-1">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIconWhite.png"
                    width="30"
                    height="20"
                  />
                </span>
              </h6>
              <h2
                className="title text-start text-white wow fadeInUp"
                data-wow-delay=".6s"
              >
                Découvrez nos derniers évènements
              </h2>
            </div>
            <div
              className="arrow-btn text-end wow fadeInUp"
              data-wow-delay=".9s"
            >
              <button className="slider-arrow style2 snbp1">
                <FaArrowLeftLong size={18} className="text-white" />
              </button>
              <button className="slider-arrow style2 slider-next snbn1">
                <FaArrowRightLong size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="slider-area project-slider1 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <Swiper
              // spaceBetween={30}
              className="swiper gt-slider"
              // style={{ overflow: "clip" }}
              id="projectSlider1"
              {...swiperOptions}
            >
              {events.map((slide) => (
                <SwiperSlide className="swiper-slide" key={slide.id}>
                  <div className="project-card style1 img-shine">
                    <div className="project-img">
                      <Image
                        src={slide.imgSrc}
                        width={465}
                        height={370}
                        alt="project image"
                      />
                    </div>
                    <div className="fancy-box style2">
                      <p>{slide.category}</p>
                      <h4>
                        <Link
                          scroll={false}
                          href={`/project-details/${slide.id}`}
                        >
                          {slide.title}
                        </Link>
                      </h4>
                      <Link
                        scroll={false}
                        href={`/project-details/${slide.id}`}
                        className="arrow-icon"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
