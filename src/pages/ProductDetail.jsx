import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import ReactImageMagnify from "react-image-magnify";

import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import "../css/animate.css";
import "../icon/icomoon/style.css";
import Slider from "../components/Slider";
import NewArrivals from "../components/NewArrivals";

const ProductDetailSection = () => {
  // Product images
  const images = Array.from({ length: 11 }, (_, i) =>
    require(`../images/products/fashion/product-${i + 1}.jpg`)
  );
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
    <Slider />
    <section className="flat-single-product flat-spacing-3">
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row g-4">
            {/* LEFT COLUMN – Vertical Slider + Zoom */}
            <div className="col-md-6 d-flex align-items-start">
              {/* Vertical Thumbnail Swiper with Arrows */}
              <div className="col-3 pe-2 position-relative">
                <Swiper
                  direction="vertical"
                  slidesPerView={6}
                  spaceBetween={10}
                  navigation={{
                    nextEl: ".swiper-button-next-vert",
                    prevEl: ".swiper-button-prev-vert",
                  }}
                  mousewheel={true}
                  modules={[Navigation, Mousewheel]}
                  className="product-thumb-swiper"
                  style={{ height: "650px" }}
                >
                  {images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`product-${i}`}
                        onClick={() => setSelectedImage(img)}
                        className={`thumb-img ${
                          selectedImage === img ? "active" : ""
                        }`}
                        style={{
                          width: "100%",
                          height: "90px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          border:
                            selectedImage === img
                              ? "2px solid #ef9122"
                              : "1px solid #ddd",
                          cursor: "pointer",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Vertical Nav Arrows */}
                <div
                  className="swiper-button-prev-vert"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                    cursor: "pointer",
                  }}
                >
                  ▲
                </div>
                <div
                  className="swiper-button-next-vert"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                    cursor: "pointer",
                  }}
                >
                  ▼
                </div>
              </div>

              {/* Main Zoom Image */}
              <div className="col-9">
                <div
                  className="main-img-wrapper"
                  style={{ width: "100%", overflow: "hidden" }}
                >
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Product Image",
                        isFluidWidth: true,
                        src: selectedImage,
                      },
                      largeImage: {
                        src: selectedImage,
                        width: 1200,
                        height: 1200,
                      },
                      lensStyle: { backgroundColor: "rgba(0,0,0,.2)" },
                      enlargedImageContainerDimensions: {
                        width: "200%",
                        height: "100%",
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN – Sticky Product Info */}
            <div className="col-md-6">
              <div
                className="tf-product-info-wrap position-relative sticky-top"
                style={{ top: "100px" }}
              >
                <div className="tf-product-info-list other-image-zoom">
                  <h2 className="product-info-name">
                    Casual Round Neck T-Shirt
                  </h2>

               {/* ⭐ Rating & Cart Meta */}
          <div className="product-info-meta">
            <div className="rating">
              <div className="d-flex gap-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5.4091L8.913 5.07466L6.99721 0.261719L5.08143 5.07466L0 5.4091L3.89741 8.7184L2.61849 13.7384L6.99721 10.9707L11.376 13.7384L10.097 8.7184L14 5.4091Z"
                      fill="#EF9122"
                    />
                  </svg>
                ))}
              </div>
              <div className="reviews text-main">(3,671 reviews)</div>
            </div>

            <div className="people-add text-primary">
              <i className="icon icon-shopping-cart-simple"></i>
              <span className="h6">
                9 people just added this product to their cart
              </span>
            </div>
          </div>

          {/* 💰 Price & Countdown */}
          <div className="tf-product-heading">
            <div className="product-info-price price-wrap">
              <span className="price-new price-on-sale h2 fw-4">$14.99</span>
              <span className="price-old compare-at-price h6">$19.33</span>
              <p className="badges-on-sale h6 fw-semibold">
                <span className="number-sale">-29%</span>
              </p>
            </div>

            <div className="tf-product-info-countdown">
              <div className="countdown-title">
                <h5>Hurry up</h5>
                <p className="text-main">Offer ends in:</p>
              </div>
              <div
                className="tf-countdown style-1 js-countdown"
                data-timer="1007500"
                data-labels="Days,Hours,Mins,Secs"
              >
                <div
                  aria-hidden="true"
                  className="countdown__timer"
                >
                  <span className="countdown__item">
                    <span className="countdown__value">11</span>
                    <span className="countdown__label">Days</span>
                  </span>
                  <span className="countdown__item">
                    <span className="countdown__value">14</span>
                    <span className="countdown__label">Hours</span>
                  </span>
                  <span className="countdown__item">
                    <span className="countdown__value">49</span>
                    <span className="countdown__label">Mins</span>
                  </span>
                  <span className="countdown__item">
                    <span className="countdown__value">42</span>
                    <span className="countdown__label">Secs</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 👀 Live View */}
          <div className="tf-product-info-liveview">
            <div className="liveview-count">
              <i className="icon icon-view"></i>
              <span className="count fw-6 h6">23</span>
            </div>
            <p className="fw-6 h6">People are viewing this right now</p>
          </div>

 

          {/* 🛒 Quantity & Buttons */}
          <div className="tf-product-total-quantity">
            <div className="group-btn">
              <div className="wg-quantity">
                <button className="btn-quantity btn-decrease">
                  <i className="icon icon-minus"></i>
                </button>
                <input
                  className="quantity-product"
                  type="text"
                  name="number"
                  defaultValue="1"
                />
                <button className="btn-quantity btn-increase">
                  <i className="icon icon-plus"></i>
                </button>
              </div>
              <a
                href="/shoppingCart"
                data-bs-toggle="offcanvas"
                className="tf-btn animate-btn btn-add-to-cart"
              >
                ADD TO CART
                <i className="icon icon-shopping-cart-simple"></i>
              </a>
              <button
                type="button"
                className="hover-tooltip box-icon btn-add-wishlist"
              >
                <span className="icon icon-heart"></span>
                <span className="tooltip">Add to Wishlist</span>
              </button>
              <a
                href="compare"
                data-bs-toggle="offcanvas"
                className="hover-tooltip tooltip-top box-icon"
              >
                <span className="icon icon-compare"></span>
                <span className="tooltip">Compare</span>
              </a>
            </div>
            <a href="checkout.html" className="tf-btn btn-primary w-100 mt-3">
              BUY IT NOW
            </a>
          </div>

          {/* 🚚 Delivery & Return */}
          <div className="tf-product-delivery-return mt-4">
            <div className="product-delivery">
              <div className="icon icon-clock-cd"></div>
              <p className="h6">
                Estimate delivery times:{" "}
                <span className="fw-7 text-black">7–20 days</span> (International),
                <span className="fw-7 text-black"> 2–4 days</span> (US).
              </p>
            </div>
            <div className="product-delivery return">
              <div className="icon icon-compare"></div>
              <p className="h6">
                Return within <span className="fw-7 text-black">30 days</span> of
                purchase. Duties &amp; taxes are non-refundable.
              </p>
            </div>
          </div>

          {/* 💳 Payment Trust Section */}
          <div className="tf-product-trust-seal mt-4">
            <p className="h6 text-seal">Guarantee Safe Checkout:</p>
            <ul className="list-card">
              {[
                "visa",
                "master-card",
                "amex",
                "discover",
                "paypal",
              ].map((card) => (
                <li className="card-item" key={card}>
                  <img
                    src={`../images/payment/${card}.png`}
                    alt={card}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* 🏷️ SKU & Categories */}
          <ul className="tf-product-cate-sku">
            <li className="item-cate-sku h6">
              <span className="label fw-6 text-black">SKU:</span>
              <a href="#" className="value link text-main-2">
                injila_#KT_Yellow_7
              </a>
            </li>
            <li className="item-cate-sku h6">
              <span className="label fw-6 text-black">Categories:</span>
              <span className="value text-main-2">
                Daily Wear Rings, Ring diamond, Anniversary rings, Solitaire
                Rings, Half Eternity Rings
              </span>
            </li>
          </ul>
        </div>
              </div>
            </div>
            {/* END RIGHT COLUMN */}
          </div>
        </div>
      </div>
    </section>

    <NewArrivals />
    </>
  );
};

export default ProductDetailSection;
