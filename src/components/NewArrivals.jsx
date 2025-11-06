import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NewArrivals = () => {
  return (
    <div className="flat-spacing flat-animate-tab">
      <div className="container">
        {/* Section Title */}
        <div className="sect-title wow fadeInUp">
          <div className="h1 title text-center mb-24">New Arrivals</div>

          {/* Tab Navigation */}
          <ul className="tab-product_list nav justify-content-center" role="tablist">
            <li className="nav-tab-item" role="presentation">
              <button
                className="tf-btn-line tf-btn-tab active"
                id="trending-tab"
                data-bs-toggle="tab"
                data-bs-target="#trending"
                type="button"
                role="tab"
                aria-controls="trending"
                aria-selected="true"
              >
                TRENDING
              </button>
            </li>
            <li className="nav-tab-item" role="presentation">
              <button
                className="tf-btn-line tf-btn-tab"
                id="best-seller-tab"
                data-bs-toggle="tab"
                data-bs-target="#best-seller"
                type="button"
                role="tab"
                aria-controls="best-seller"
                aria-selected="false"
              >
                BEST SELLER
              </button>
            </li>
            <li className="nav-tab-item" role="presentation">
              <button
                className="tf-btn-line tf-btn-tab"
                id="on-sale-tab"
                data-bs-toggle="tab"
                data-bs-target="#on-sale"
                type="button"
                role="tab"
                aria-controls="on-sale"
                aria-selected="false"
              >
                ON SALE
              </button>
            </li>
          </ul>
        </div>

        {/* Tab Content */}
        <div className="tab-content mt-4">
          {/* Trending Tab */}
          <div
            className="tab-pane fade show active"
            id="trending"
            role="tabpanel"
            aria-labelledby="trending-tab"
          >
            <div className="row g-4">
              <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker-2.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/chauker-2.jpeg"
              data-src="../images/Gold-jwellery/chauker-2.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li class="product-badge_item h6 trend">Trending</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/necklace.jpeg"
              data-src="../images/Gold-jwellery/necklace-2.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/necklace-2.jpeg"
              data-src="../images/Gold-jwellery/necklace-2.jpeg"
              alt="Product"
            />
          </a>


          <ul className="product-action_list">
            <li>
              <a
                href="#shoppingCart"
                data-bs-toggle="offcanvas"
                className="hover-tooltip tooltip-left box-icon"
              >g
                <span className="icon icon-shopping-cart-simple"></span>
                <span className="tooltip">Add to cart</span>
              </a>
            </li>

            <li className="wishlist">
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li class="product-badge_item h6 new">New</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/necklace-2.jpeg"
              data-src="../images/Gold-jwellery/necklace-2.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/necklace-3.jpeg"
              data-src="../images/Gold-jwellery/necklace-3.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
           <li class="product-badge_item h6 sale">20% OFF</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/necklace-3.jpeg"
              data-src="../images/Gold-jwellery/necklace-3.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/necklace-4.jpeg"
              data-src="../images/Gold-jwellery/necklace-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li class="product-badge_item h6 new">New arrival</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
    <div
      className="swiper-slide swiper-slide-next">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="img-product lazyloaded"
              src="../images/Gold-jwellery/necklace-4.jpeg"
              data-src="../images/Gold-jwellery/necklace-4.jpegg"
              alt="Product"
            />
            <img
              className="img-hover lazyloaded"
              src="../images/Gold-jwellery/necklace-3.jpeg"
              data-src="../images/Gold-jwellery/necklace-3.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li className="product-badge_item flash-sale">
              <i className="icon icon-thunder"></i> Flash sale
            </li>
          </ul>

          <div className="product-countdown">
            <div
              className="js-countdown cd-has-zero"
              data-timer="25472"
              data-labels="d : ,h : ,m : ,s"
            >
              <div aria-hidden="true" className="countdown__timer">
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--0 js-countdown__value--0">
                    00
                  </span>
                  <span className="countdown__label">d :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--1 js-countdown__value--1">
                    06
                  </span>
                  <span className="countdown__label">h :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--2 js-countdown__value--2">
                    56
                  </span>
                  <span className="countdown__label">m :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--3 js-countdown__value--3">
                    19
                  </span>
                  <span className="countdown__label">s</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Nike Sportswear Tee Shirts
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>


        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/necklace-2.jpeg"
              data-src="../images/Gold-jwellery/necklace-2.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/necklace-2.jpeg"
              data-src="../images/Gold-jwellery/necklace-2.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li className="product-badge_item h6 hot">Hot</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/necklace.jpeg"
              data-src="../images/Gold-jwellery/necklace.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li class="product-badge_item flash-sale"><i class="icon icon-thunder"></i> Flash sale</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                                        <div className="col-md-3">
    <div
      className="swiper-slide swiper-slide-next">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="img-product lazyloaded"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="img-hover lazyloaded"
              src="../images/Gold-jwellery/earring-4.jpeg"
              data-src="../images/Gold-jwellery/earring-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
<li class="product-badge_item h6 trend">Trending</li>
          </ul>

          <div className="product-countdown">
            <div
              className="js-countdown cd-has-zero"
              data-timer="25472"
              data-labels="d : ,h : ,m : ,s"
            >
              <div aria-hidden="true" className="countdown__timer">
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--0 js-countdown__value--0">
                    00
                  </span>
                  <span className="countdown__label">d :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--1 js-countdown__value--1">
                    06
                  </span>
                  <span className="countdown__label">h :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--2 js-countdown__value--2">
                    56
                  </span>
                  <span className="countdown__label">m :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--3 js-countdown__value--3">
                    19
                  </span>
                  <span className="countdown__label">s</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Nike Sportswear Tee Shirts
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>


        </div>
      </div>
    </div>
              </div>

            </div>
          </div>

          {/* Best Seller Tab */}
          <div
            className="tab-pane fade"
            id="best-seller"
            role="tabpanel"
            aria-labelledby="best-seller-tab"
          >
              <div className="row g-4">
              <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li class="product-badge_item h6 trend">Trending</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li class="product-badge_item h6 new">New</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
           <li class="product-badge_item h6 sale">20% OFF</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li class="product-badge_item h6 new">New arrival</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
    <div
      className="swiper-slide swiper-slide-next">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="img-product lazyloaded"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="img-hover lazyloaded"
              src="../images/Gold-jwellery/earring-4.jpeg"
              data-src="../images/Gold-jwellery/earring-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li className="product-badge_item flash-sale">
              <i className="icon icon-thunder"></i> Flash sale
            </li>
          </ul>

          <div className="product-countdown">
            <div
              className="js-countdown cd-has-zero"
              data-timer="25472"
              data-labels="d : ,h : ,m : ,s"
            >
              <div aria-hidden="true" className="countdown__timer">
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--0 js-countdown__value--0">
                    00
                  </span>
                  <span className="countdown__label">d :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--1 js-countdown__value--1">
                    06
                  </span>
                  <span className="countdown__label">h :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--2 js-countdown__value--2">
                    56
                  </span>
                  <span className="countdown__label">m :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--3 js-countdown__value--3">
                    19
                  </span>
                  <span className="countdown__label">s</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Nike Sportswear Tee Shirts
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>


        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li className="product-badge_item h6 hot">Hot</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li class="product-badge_item flash-sale"><i class="icon icon-thunder"></i> Flash sale</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                                        <div className="col-md-3">
    <div
      className="swiper-slide swiper-slide-next">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="img-product lazyloaded"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="img-hover lazyloaded"
              src="../images/Gold-jwellery/earring-4.jpeg"
              data-src="../images/Gold-jwellery/earring-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
<li class="product-badge_item h6 trend">Trending</li>
          </ul>

          <div className="product-countdown">
            <div
              className="js-countdown cd-has-zero"
              data-timer="25472"
              data-labels="d : ,h : ,m : ,s"
            >
              <div aria-hidden="true" className="countdown__timer">
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--0 js-countdown__value--0">
                    00
                  </span>
                  <span className="countdown__label">d :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--1 js-countdown__value--1">
                    06
                  </span>
                  <span className="countdown__label">h :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--2 js-countdown__value--2">
                    56
                  </span>
                  <span className="countdown__label">m :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--3 js-countdown__value--3">
                    19
                  </span>
                  <span className="countdown__label">s</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Nike Sportswear Tee Shirts
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>


        </div>
      </div>
    </div>
              </div>

            </div>
          </div>

          {/* On Sale Tab */}
          <div
            className="tab-pane fade"
            id="on-sale"
            role="tabpanel"
            aria-labelledby="on-sale-tab"
          >
               <div className="row g-4">
              <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li class="product-badge_item h6 trend">Trending</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li class="product-badge_item h6 new">New</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
           <li class="product-badge_item h6 sale">20% OFF</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li class="product-badge_item h6 new">New arrival</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
    <div
      className="swiper-slide swiper-slide-next">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="img-product lazyloaded"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="img-hover lazyloaded"
              src="../images/Gold-jwellery/earring-4.jpeg"
              data-src="../images/Gold-jwellery/earring-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li className="product-badge_item flash-sale">
              <i className="icon icon-thunder"></i> Flash sale
            </li>
          </ul>

          <div className="product-countdown">
            <div
              className="js-countdown cd-has-zero"
              data-timer="25472"
              data-labels="d : ,h : ,m : ,s"
            >
              <div aria-hidden="true" className="countdown__timer">
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--0 js-countdown__value--0">
                    00
                  </span>
                  <span className="countdown__label">d :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--1 js-countdown__value--1">
                    06
                  </span>
                  <span className="countdown__label">h :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--2 js-countdown__value--2">
                    56
                  </span>
                  <span className="countdown__label">m :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--3 js-countdown__value--3">
                    19
                  </span>
                  <span className="countdown__label">s</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Nike Sportswear Tee Shirts
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>


        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li className="product-badge_item h6 hot">Hot</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                          <div className="col-md-3">
      <div className="swiper-slide">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="lazyload img-product"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="lazyload img-hover"
              src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="../images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
            <li class="product-badge_item flash-sale"><i class="icon icon-thunder"></i> Flash sale</li>
          </ul>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Summer Two Piece Set
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>

        </div>
      </div>
    </div>
              </div>
                                        <div className="col-md-3">
    <div
      className="swiper-slide swiper-slide-next">
      <div className="card-product">
        <div className="card-product_wrapper">
          <a href="product/productdetail" className="product-img">
            <img
              className="img-product lazyloaded"
              src="../images/Gold-jwellery/chauker.jpeg"
              data-src="../images/Gold-jwellery/chauker.jpeg"
              alt="Product"
            />
            <img
              className="img-hover lazyloaded"
              src="../images/Gold-jwellery/earring-4.jpeg"
              data-src="../images/Gold-jwellery/earring-4.jpeg"
              alt="Product"
            />
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
              <a href="#;" className="hover-tooltip tooltip-left box-icon">
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

          <ul className="product-badge_list">
<li class="product-badge_item h6 trend">Trending</li>
          </ul>

          <div className="product-countdown">
            <div
              className="js-countdown cd-has-zero"
              data-timer="25472"
              data-labels="d : ,h : ,m : ,s"
            >
              <div aria-hidden="true" className="countdown__timer">
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--0 js-countdown__value--0">
                    00
                  </span>
                  <span className="countdown__label">d :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--1 js-countdown__value--1">
                    06
                  </span>
                  <span className="countdown__label">h :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--2 js-countdown__value--2">
                    56
                  </span>
                  <span className="countdown__label">m :</span>
                </span>
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--3 js-countdown__value--3">
                    19
                  </span>
                  <span className="countdown__label">s</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-product_info">
          <a href="product/productdetail" className="name-product h4 link">
            Nike Sportswear Tee Shirts
          </a>

          <div className="price-wrap">
            <span className="price-old h6 fw-normal">$99.99</span>
            <span className="price-new h6">$69.99</span>
          </div>


        </div>
      </div>
    </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
