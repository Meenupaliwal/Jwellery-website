import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

const ShopByCategories = () => {
  const categories = [
    { img: "/images/Gold-jwellery/jhumki-style-2.jpeg", name: "Jhumki", count: 27 },
    { img: "/images/Gold-jwellery/earring.jpeg", name: "Earrings", count: 49 },
    { img: "/images/Gold-jwellery/necklace-2.jpeg", name: "Necklace", count: 37 },
    { img: "/images/Gold-jwellery/chauker.jpeg", name: "Chaukar", count: 80 },
    { img: "/images/Gold-jwellery/nojpin.jpeg", name: "Nosepin", count: 89 },
  ];

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="sect-title text-center wow fadeInUp">
          <h1 className="title mb-8">Jewellery</h1>
          <p className="s-subtitle h6">
            Up to 50% off Explore our sparkling collection of timeless pieces
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={40}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 12 },
            576: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 32 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
          className="tf-swiper wow fadeInUp"
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <a href="product/productdetail" className="widget-collection type-space-2 hover-img">
                <div className="collection_image img-style">
                  <img src={cat.img} alt={cat.name} className="lazyload" />
                </div>
                <p className="collection_name h5 link fw-semibold">
                  {cat.name} <span className="count text-main-2">({cat.count})</span>
                </p>
              </a>
            </SwiperSlide>
          ))}

          <div className="sw-dot-default tf-sw-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default ShopByCategories;
