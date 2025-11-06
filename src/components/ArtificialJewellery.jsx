import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ArtificialJewellery = () => {
  const products = [
    {
      name: "18K Gold Friendship Ring",
      oldPrice: "$109.99",
      newPrice: "$89.99",
      img: "/images/Gold-jwellery/product-13.jpg",
      hoverImg: "/images/Gold-jwellery/product-14.jpg",
    },
    {
      name: "14K Gold Plated Eternity Ring",
      oldPrice: "$99.99",
      newPrice: "$79.99",
      img: "/images/Gold-jwellery/product-15.jpg",
      hoverImg: "/images/Gold-jwellery/product-16.jpg",
    },
    {
      name: "Moissanite Wedding Ring Set",
      oldPrice: "$79.99",
      newPrice: "$59.99",
      img: "/images/Gold-jwellery/product-17.jpg",
      hoverImg: "/images/Gold-jwellery/product-18.jpg",
    },
    {
      name: "Silver Promise Rings",
      oldPrice: "$199.99",
      newPrice: "$159.99",
      img: "/images/Gold-jwellery/product-19.jpg",
      hoverImg: "/images/Gold-jwellery/product-20.jpg",
    },
  ];

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="sect-title text-center wow fadeInUp">
          <h1 className="s-title mb-8">Imitation Jewellery Collection</h1>
          <p className="s-subtitle h6">
            Discover stunning designs at unbeatable prices — up to 50% off on our latest Imitation jewellery trends!
          </p>
        </div>

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
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card-product">
                <div className="card-product_wrapper d-flex">
                  <a href="product/productdetail" className="product-img">
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
  );
};

export default ArtificialJewellery;
