"use client";
import { testimonialsData } from "@/data/testimonials";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Testimonials() {
  return (
    <section className="testimonial-area space fix">
      <div className="container">
        <div className="testimonial-wrap style1">
          <div className="section-bg">
            <Image
              alt="bg"
              src="/assets/img/bg/testimonialBg1_1.png"
              width="1280"
              height="580"
            />
          </div>

          <div className="title-area mx-auto">
            <h5
              className="subtitle text-center wow fadeInUp"
              data-wow-delay=".3s"
            >
              <span>
                <Image
                  alt="icon"
                  src="/assets/img/icon/titleIcon.png"
                  width="28"
                  height="12"
                />
              </span>{" "}
              TEMOIGNAGES{" "}
              <span>
                <Image
                  alt="icon"
                  src="/assets/img/icon/titleIcon.png"
                  width="28"
                  height="12"
                />
              </span>
            </h5>
            <h2
              className="title text-center mb-50 wow fadeInUp"
              data-wow-delay=".6s"
            >
              Qu'est ce que nos clients disent à propos de nous ?
            </h2>
          </div>

          <div className="slider-area testimonial-slider1">
            <Swiper
              loop={true}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                576: {
                  slidesPerView: 1,
                  centeredSlides: true
                },
                768: {
                  slidesPerView: 1
                },
                992: {
                  slidesPerView: 2
                },
                1200: {
                  slidesPerView: 2
                }
              }}
              modules={[Navigation]}
              navigation={{
                prevEl: ".snbp2",
                nextEl: ".snbn2"
              }}
              className="gt-slider"
              id="testimonialSlider1"
            >
              {testimonialsData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-card style1">
                    <div className="profile-box">
                      <div className="testi-thumb">
                        <Image
                          src={testimonial.imgSrc}
                          width={100}
                          height={100}
                          alt="thumb"
                        />
                      </div>
                      <div className="testi-content">
                        <h3 className="title">{testimonial.name}</h3>
                        <div className="designation">
                          {testimonial.designation}
                        </div>
                        <ul className="star-wrap">
                          {Array(5)
                            .fill()
                            .map((_, index) => (
                              <li key={index}>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/starIcon.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    <p className="text">{testimonial.text}</p>
                    <div className="quote">
                      <Image
                        alt="icon"
                        src="/assets/img/icon/quoteIcon.png"
                        width="50"
                        height="37"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className="slider-arrow snbp2 style2 d-lg-block d-none">
            <FaArrowLeftLong size={18} className="text-white" />
          </button>
          <button className="slider-arrow  snbn2 style2 slider-next d-lg-block d-none">
            <FaArrowRightLong size={18} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
