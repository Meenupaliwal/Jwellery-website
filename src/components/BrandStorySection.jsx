import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/styles.css"; // include your global styles

const BrandStorySection = () => {
  const slides = [
    {
      image: "images/section/story-1.jpg",
      title: "No harmful chemicals",
      text: "Morbi finibus erat ullamcorper malesuada",
    },
    {
      image: "images/section/story-2.jpg",
      title: "High-quality product",
      text: "Morbi finibus erat ullamcorper malesuada",
    },
    {
      image: "images/section/story-3.jpg",
      title: "Environmentally friendly",
      text: "Morbi finibus erat ullamcorper malesuada",
    },
  ];

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="sect-title text-center">
          <h1 className="s-title mb-8">Brand Story</h1>
          <p className="s-subtitle h6">
            Up to 50% off Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="box-intro has-mb text-center">
          <h4 className="slogan fw-normal">
            WE PRIORITIZE SUSTAINABLE AND ENVIRONMENTALLY FRIENDLY DEVELOPMENT.
          </h4>
          <p className="intro-text">
            Morbi finibus erat ullamcorper malesuada placerat. Integer malesuada orci sed nulla
            scelerisque fermentum. Suspendisse lacinia elit{" "}
            <br className="d-none d-xxl-block" /> at bibendum tincidunt.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="tf-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="wg-icon-image hover-img">
                <div className="image img-style">
                  <img src={slide.image} alt={slide.title} loading="lazy" />
                </div>
                <div className="box-icon">
                  <div className="content">
                    <h3 className="caption fw-normal">{slide.title}</h3>
                    <p className="sub-text">{slide.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandStorySection;
