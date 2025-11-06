import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CombinedProductPage = () => {
  // Countdown cards data
  const countdownProducts = [
    {
      id: 1,
      link: "gold-ring-detail",
      img1: "/images/Gold-jwellery/necklace-3.jpeg",
      img2: "/images/Gold-jwellery/necklace-3.jpeg",
      title: "Elegant 22K Gold Ring",
      timer: "25472",
    },
    {
      id: 2,
      link: "gold-necklace-detail",
      img1: "/images/Gold-jwellery/necklace.jpeg",
      img2: "/images/Gold-jwellery/necklace.jpeg",
      title: "Royal Gold Necklace Set",
      timer: "36000",
    },
    {
      id: 3,
      link: "gold-bangle-detail",
      img1: "/images/Gold-jwellery/necklace-2.jpeg",
      img2: "/images/Gold-jwellery/necklace-2.jpeg",
      title: "Traditional Gold Bangles",
      timer: "48000",
    },
  ];

  // Marquee cards data
  const marqueProducts = [
    {
      id: 1,
      link: "gold-ring-detail",
      img1: "/images/Gold-jwellery/jhumki-style-3.jpeg",
      img2: "/images/Gold-jwellery/jhumki-style-3.jpeg",
      name: "Elegant 22K Gold Ring",
      offerText1: "✨ PURE 22K GOLD SALE - UP TO 25% OFF ✨",
      offerText2: "🔥 LIMITED EDITION DESIGNS AVAILABLE 🔥",
    },
    {
      id: 2,
      link: "gold-necklace-detail",
      img1: "/images/Gold-jwellery/jhumki-style-10.jpeg",
      img2: "/images/Gold-jwellery/jhumki-style-10.jpeg",
      name: "Royal Gold Necklace Set",
      offerText1: "💎 EXCLUSIVE BRIDAL COLLECTION 💎",
      offerText2: "🌸 FREE CLEANING & POLISH SERVICE 🌸",
    },
    {
      id: 3,
      link: "gold-bangle-detail",
      img1: "/images/Gold-jwellery/ring.jpeg",
      img2: "/images/Gold-jwellery/ring.jpeg",
      name: "Traditional 22K Gold Bangles",
      offerText1: "✨ FESTIVE DEALS - SAVE BIG ✨",
      offerText2: "💫 LIMITED STOCK AVAILABLE 💫",
    },
  ];

  // Imitation products (updated public path)
  const artificialProducts = [
    {
      name: "18K Gold Friendship Ring",
      oldPrice: "$109.99",
      newPrice: "$89.99",
      img: "/images/Gold-jwellery/earring.jpeg",
      hoverImg: "/images/Gold-jwellery/chauker-2.jpeg",
    },
    {
      name: "14K Gold Plated Eternity Ring",
      oldPrice: "$99.99",
      newPrice: "$79.99",
      img: "/images/Gold-jwellery/necklace.jpeg",
      hoverImg: "/images/Gold-jwellery/necklace-2.jpeg",
    },
    {
      name: "Moissanite Wedding Ring Set",
      oldPrice: "$79.99",
      newPrice: "$59.99",
      img: "/images/Gold-jwellery/nosepin-2.jpeg",
      hoverImg: "/images/Gold-jwellery/necklace-3.jpeg",
    },
    {
      name: "Silver Promise Rings",
      oldPrice: "$199.99",
      newPrice: "$159.99",
      img: "/images/Gold-jwellery/ring.jpeg",
      hoverImg: "/images/Gold-jwellery/locket.jpeg",
    },
  ];

  return (
    <div>
      {/* -------- Countdown Cards -------- */}
      <section className="countdown-section py-5">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">Countdown Deals</h2>
          <div className="row">
            {countdownProducts.map((product) => (
              <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                <div className="card-product_wrapper mt-5">
                  <a href={product.link} className="product-img">
                    <img className="img-product lazyload" src={product.img1} alt={product.title} />
                    <img className="img-hover lazyload" src={product.img2} alt={product.title} />
                  </a>

                  <ul className="product-action_list">
                    <li><a href="#shoppingCart" data-bs-toggle="offcanvas" className="hover-tooltip tooltip-left box-icon"><span className="icon icon-shopping-cart-simple"></span><span className="tooltip">Add to cart</span></a></li>
                    <li className="wishlist"><a href="#;" className="hover-tooltip tooltip-left box-icon"><span className="icon icon-heart"></span><span className="tooltip">Add to Wishlist</span></a></li>
                    <li className="compare"><a href="#compare" data-bs-toggle="offcanvas" className="hover-tooltip tooltip-left box-icon"><span className="icon icon-compare"></span><span className="tooltip">Compare</span></a></li>
                    <li><a href="#quickView" data-bs-toggle="modal" className="hover-tooltip tooltip-left box-icon"><span className="icon icon-view"></span><span className="tooltip">Quick view</span></a></li>
                  </ul>

                  <h5 className="text-center mt-3 fw-bold">{product.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- Marquee Cards -------- */}
      <section className="marquee-section py-5">
        <div className="container">
          <h2 className="fw-bold mb-5 text-center">Special Offers</h2>
          <div className="row">
            {marqueProducts.map((product) => (
              <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                <div className="card-product product-style_list">
                  <div className="card-product_wrapper">
                    <a href={product.link} className="product-img">
                      <img className="img-product lazyload" src={product.img1} alt={product.name} />
                      <img className="img-hover lazyload" src={product.img2} alt={product.name} />
                    </a>

                    <div className="product-marquee_sale">
                      <div className="marquee-wrapper">
                        <div className="initial-child-container">
                          <div className="marquee-child-item"><p className="text-small">{product.offerText1}</p></div>
                          <div className="marquee-child-item"><p className="text-small">{product.offerText2}</p></div>
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

      {/* -------- Imitation Jewellery Swiper -------- */}
      <section className="flat-spacing p-0 py-5">
        <div className="container">
          <h2 className="fw-bold mb-5 text-center">Imitation Jewellery</h2>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 12 },
              576: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 48 },
            }}
            className="tf-swiper wow fadeInUp"
          >
            {artificialProducts.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card-product">
                  <div className="card-product_wrapper d-flex">
                    <a href="product/productdetail" className="product-img">
                      <img src={item.img} alt={item.name} className="img-product" />
                      <img src={item.hoverImg} alt={item.name} className="img-hover" />
                    </a>
                  </div>

                  <div className="card-product_info">
                    <a href="product/productdetail" className="name-product h4 link">
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
