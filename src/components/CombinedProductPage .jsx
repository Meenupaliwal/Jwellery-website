import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Artificial jewellery product images
import product13 from "../images/products/jewelry/product-13.jpg";
import product14 from "../images/products/jewelry/product-14.jpg";
import product15 from "../images/products/jewelry/product-15.jpg";
import product16 from "../images/products/jewelry/product-16.jpg";
import product17 from "../images/products/jewelry/product-17.jpg";
import product18 from "../images/products/jewelry/product-18.jpg";
import product19 from "../images/products/jewelry/product-19.jpg";
import product20 from "../images/products/jewelry/product-20.jpg";

const CombinedProductPage = () => {
  // Countdown cards data
  const countdownProducts = [
    {
      id: 1,
      link: "gold-ring-detail.html",
      img1: "images/products/product-41.jpg",
      img2: "images/products/product-42.jpg",
      title: "Elegant 22K Gold Ring",
      timer: "25472",
      badge: "Hot",
    },
    {
      id: 2,
      link: "gold-necklace-detail.html",
      img1: "images/products/product-39.jpg",
      img2: "images/products/product-40.jpg",
      title: "Royal Gold Necklace Set",
      timer: "36000",
      badge: "New",
    },
    {
      id: 3,
      link: "gold-bangle-detail.html",
      img1: "images/products/product-37.jpg",
      img2: "images/products/product-38.jpg",
      title: "Traditional Gold Bangles",
      timer: "48000",
      badge: "Limited",
    },
  ];

  // Marquee cards data
  const marqueProducts = [
    {
      id: 1,
      link: "gold-ring-detail.html",
      img1: "images/products/product-37.jpg",
      img2: "images/products/product-38.jpg",
      name: "Elegant 22K Gold Ring",
      offerText1: "✨ PURE 22K GOLD SALE - UP TO 25% OFF ✨",
      offerText2: "🔥 LIMITED EDITION DESIGNS AVAILABLE 🔥",
    },
    {
      id: 2,
      link: "gold-necklace-detail.html",
      img1: "images/products/product-39.jpg",
      img2: "images/products/product-40.jpg",
      name: "Royal Gold Necklace Set",
      offerText1: "💎 EXCLUSIVE BRIDAL COLLECTION 💎",
      offerText2: "🌸 FREE CLEANING & POLISH SERVICE 🌸",
    },
    {
      id: 3,
      link: "gold-bangle-detail.html",
      img1: "images/products/product-41.jpg",
      img2: "images/products/product-42.jpg",
      name: "Traditional 22K Gold Bangles",
      offerText1: "✨ FESTIVE DEALS - SAVE BIG ✨",
      offerText2: "💫 LIMITED STOCK AVAILABLE 💫",
    },
  ];

  // Artificial jewellery products data
  const artificialProducts = [
    {
      name: "18K Gold Friendship Ring",
      oldPrice: "$109.99",
      newPrice: "$89.99",
      img: product13,
      hoverImg: product14,
    },
    {
      name: "14K Gold Plated Eternity Ring",
      oldPrice: "$99.99",
      newPrice: "$79.99",
      img: product15,
      hoverImg: product16,
    },
    {
      name: "Moissanite Wedding Ring Set",
      oldPrice: "$79.99",
      newPrice: "$59.99",
      img: product17,
      hoverImg: product18,
    },
    {
      name: "Silver Promise Rings",
      oldPrice: "$199.99",
      newPrice: "$159.99",
      img: product19,
      hoverImg: product20,
    },
  ];

  return (
    <div>
      {/* ----------------- Countdown Cards Section ----------------- */}
      <section className="countdown-section py-5">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">Countdown Deals</h2>
          <div className="row">
            {countdownProducts.map((product) => (
              <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                <div className="card-product_wrapper mt-5">
                  <a href={product.link} className="product-img">
                    <img
                      className="img-product lazyload"
                      src={product.img1}
                      data-src={product.img1}
                      alt={product.title}
                    />
                    <img
                      className="img-hover lazyload"
                      src={product.img2}
                      data-src={product.img2}
                      alt={product.title}
                    />
                  </a>

                  <ul className="product-action_list">
                    <li>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-compare"></span>
                        <span className="tooltip">Compare</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#quickView"
                        data-bs-toggle="modal"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-view"></span>
                        <span className="tooltip">Quick view</span>
                      </a>
                    </li>
                  </ul>

                  <div className="product-countdown">
                    <div
                      className="js-countdown cd-has-zero"
                      data-timer={product.timer}
                      data-labels="d : ,h : ,m : ,s"
                    >
                      <div aria-hidden="true" className="countdown__timer">
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--0 js-countdown__value--0">
                            00
                          </span>
                          <span className="countdown__label">d : </span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--1 js-countdown__value--1">
                            06
                          </span>
                          <span className="countdown__label">h : </span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--2 js-countdown__value--2">
                            41
                          </span>
                          <span className="countdown__label">m : </span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--3 js-countdown__value--3">
                            34
                          </span>
                          <span className="countdown__label">s</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="product-badge_list">
                    <li
                      className={`product-badge_item h6`}
                      style={{
                        backgroundColor:
                          product.badge === "Limited"
                            ? "#FF5733"
                            : product.badge === "New"
                            ? "#0dcaf0"
                            : "#FFD700",
                        color: "#fff",
                      }}
                    >
                      {product.badge}
                    </li>
                  </ul>

                  <h5 className="text-center mt-3 fw-bold">{product.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- Marquee Cards Section ----------------- */}
      <section className="marquee-section py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">Special Offers</h2>
          <div className="row">
            {marqueProducts.map((product) => (
              <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                <div
                  className="card-product product-style_list"
                  data-availability="In stock"
                  data-brand="trendy-queen"
                >
                  <div className="card-product_wrapper">
                    <a href={product.link} className="product-img">
                      <img
                        className="img-product lazyload"
                        src={product.img1}
                        data-src={product.img1}
                        alt={product.name}
                      />
                      <img
                        className="img-hover lazyload"
                        src={product.img2}
                        data-src={product.img2}
                        alt={product.name}
                      />
                    </a>

                    <ul className="product-action_list">
                      <li>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-compare"></span>
                          <span className="tooltip">Compare</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quickView"
                          data-bs-toggle="modal"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-view"></span>
                          <span className="tooltip">Quick view</span>
                        </a>
                      </li>
                    </ul>

                    <div className="product-marquee_sale">
                      <div className="marquee-wrapper">
                        <div className="initial-child-container">
                          <div className="marquee-child-item">
                            <p className="text-small">{product.offerText1}</p>
                          </div>
                          <div className="marquee-child-item">
                            <p className="text-small">{product.offerText2}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-3">
                      <h4 className="fw-bold">{product.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- Artificial Jewellery Swiper Section ----------------- */}
      <section className="flat-spacing p-0 py-5">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">Artificial Jewellery</h2>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 12 },
              576: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1200: { slidesPerView: 4, spaceBetween: 48 },
            }}
            className="tf-swiper wow fadeInUp"
          >
            {artificialProducts.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card-product">
                  <div className="card-product_wrapper d-flex">
                    <a href="/product-detail" className="product-img">
                      <img src={item.img} alt={item.name} className="img-product" />
                      <img src={item.hoverImg} alt={item.name} className="img-hover" />
                    </a>

                    <ul className="product-action_list">
                      <li>
                        <a
                          href="#shoppingCart"
                          data-bs-toggle="offcanvas"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-shopping-cart-simple"></span>
                          <span className="tooltip">Add to cart</span>
                        </a>
                      </li>
                      <li className="wishlist">
                        <a
                          href="javascript:void(0);"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-heart"></span>
                          <span className="tooltip">Add to Wishlist</span>
                        </a>
                      </li>
                      <li className="compare">
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-compare"></span>
                          <span className="tooltip">Compare</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#quickView"
                          data-bs-toggle="modal"
                          className="hover-tooltip tooltip-left box-icon"
                        >
                          <span className="icon icon-view"></span>
                          <span className="tooltip">Quick view</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="card-product_info">
                    <a href="/product-detail" className="name-product h4 link">
                      {item.name}
                    </a>
                    <div className="price-wrap mb-0">
                      <span className="price-old h6 fw-normal">{item.oldPrice}</span>
                      <span className="price-new h6">{item.newPrice}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default CombinedProductPage;
