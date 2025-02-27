import { blogCards2 } from "@/data/blogs";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong, FaCircleUser, FaTag } from "react-icons/fa6";

export default function Blog() {
  return (
    <section className="blog-area fix">
      <div
        className="blog-wrap style1 space-top pb-425"
        style={{ backgroundImage: "url(/assets/img/bg/blogBg1_1.png)" }}
      >
        <div className="shape1_1 movingX d-xl-block d-none">
          <Image
            alt="shape"
            width="358"
            height="393"
            src="/assets/img/shape/blogShape1_1.png"
          />
        </div>
        <div className="container">
          <div className="title-area mx-auto">
            <h5
              className="subtitle text-center wow fadeInUp"
              data-wow-delay=".3s"
            >
              <span>
                <Image
                  alt="icon"
                  width="28"
                  height="12"
                  src="/assets/img/icon/titleIcon.png"
                />
              </span>{" "}
              Notre blog{" "}
              <span className="ms-1">
                <Image
                  alt="icon"
                  width="28"
                  height="12"
                  src="/assets/img/icon/titleIcon.png"
                />
              </span>
            </h5>
            <h2
              className="title text-center mb-50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              Consulter nos dernières publications
            </h2>
          </div>
          <div className="blog-card-wrap style1 mb-30">
            {blogCards2.slice(0, 3).map((card, index) => (
              <div
                key={index}
                className="blog-card style1 img-shine wow fadeInUp"
                data-wow-delay={card.delay}
              >
                <div className="blog-card-thumb style1">
                  <Image
                    src={card.imgSrc}
                    width={322}
                    height={216}
                    alt="thumb"
                  />
                </div>
                <div className="blog-card-body">
                  <div className="tag-cloud">
                    <div className="meta">
                      <span className="icon">
                        <FaCircleUser size={22} color="#e02234" />
                      </span>
                      <span className="text">{card.userName}</span>
                    </div>
                    <div className="meta">
                      <span className="icon">
                        <FaTag size={22} color="#e02234" />
                      </span>
                      <span className="text">{card.category}</span>
                    </div>
                  </div>
                  <h3 className="blog-title style1">
                    <Link scroll={false} href={`/blog`}>
                      {card.title}
                    </Link>
                  </h3>
                  <div className="btn-wrapper">
                    <Link scroll={false} href={`/blog-details/${card.id}`}>
                      Lire plus {""}
                      <FaArrowRightLong size={15} />
                    </Link>
                  </div>
                  <div className="calendar">
                    <div className="date">{card.date}</div>
                    <div className="month">{card.month}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
