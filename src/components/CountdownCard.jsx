import React from "react";

const CountdownCard = () => {
  return (
    <>
        <section className="countdown-section py-5">
      <div className="container">
        <h1 className="sect-title text-center">You May Also Like</h1>
        <div className="row">
          {/* 1️⃣ Card 1 */}
          <div className="col-md-3">
            <div className="swiper-slide swiper-slide-next">
              <div className="card-product">
                <div className="card-product_wrapper">
                  <a href="/product/productdetail" className="product-img">
                    <img
                      className="img-product lazyloaded"
                      src="/images/Gold-jwellery/necklace-3.jpeg"
                      data-src="/images/Gold-jwellery/necklace-3.jpeg"
                      alt="Product"
                    />
                    <img
                      className="img-hover lazyloaded"
                      src="/images/Gold-jwellery/necklace-4.jpeg"
                      data-src="/images/Gold-jwellery/necklace-4.jpeg"
                      alt="Product"
                    />
                  </a>

                  <ul className="product-action_list">
                    <li>
                      <a
                        href="cart"
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
                          <span className="countdown__value">00</span>
                          <span className="countdown__label">d :</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value">06</span>
                          <span className="countdown__label">h :</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value">56</span>
                          <span className="countdown__label">m :</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value">19</span>
                          <span className="countdown__label">s</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-product_info">
                  <a href="/product/productdetail" className="name-product h4 link">
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

          {/* 2️⃣ Card 2 */}
          <div className="col-md-3">
            <div className="swiper-slide">
              <div className="card-product">
                <div className="card-product_wrapper">
                  <a href="/product/productdetail" className="product-img">
                    <img
                      className="lazyload img-product"
                      src="/images/Gold-jwellery/necklace-3.jpeg"
                      alt="Product"
                    />
                    <img
                      className="lazyload img-hover"
                      src="/images/Gold-jwellery/necklace-3.jpeg"
                      alt="Product"
                    />
                  </a>

                  <ul className="product-action_list">
                    <li>
                      <a
                        href="cart"
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
                  <a href="/product/productdetail" className="name-product h4 link">
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

          {/* 3️⃣ Card 3 */}
          <div className="col-md-3">
            <div className="swiper-slide">
              <div className="card-product">
                <div className="card-product_wrapper">
                  <a href="/product/productdetail" className="product-img">
                    <img
                      className="lazyload img-product"
                      src="/images/Gold-jwellery/necklace-3.jpeg"
                      alt="Product"
                    />
                    <img
                      className="lazyload img-hover"
                      src="/images/Gold-jwellery/necklace-2.jpeg"
                      alt="Product"
                    />
                  </a>

                  <ul className="product-action_list">
                    <li>
                      <a
                        href="cart"
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
                </div>

                <div className="card-product_info">
                  <a href="/product/productdetail" className="name-product h4 link">
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

          {/* 4️⃣ Card 4 */}
          <div className="col-md-3">
            <div className="swiper-slide swiper-slide-next">
              <div className="card-product">
                <div className="card-product_wrapper">
                  <a href="/product/productdetail" className="product-img">
                    <img
                      className="img-product lazyloaded"
                      src="/images/Gold-jwellery/necklace-3.jpeg"
                      alt="Product"
                    />
                    <img
                      className="img-hover lazyloaded"
                      src="/images/Gold-jwellery/necklace-3.jpeg"
                      alt="Product"
                    />
                  </a>

                  <ul className="product-action_list">
                    <li>
                      <a
                        href="cart"
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
                    <li className="product-badge_item h6 trend">Trending</li>
                  </ul>

                  <div className="product-countdown">
                    <div
                      className="js-countdown cd-has-zero"
                      data-timer="25472"
                      data-labels="d : ,h : ,m : ,s"
                    >
                      <div aria-hidden="true" className="countdown__timer">
                        <span className="countdown__item">
                          <span className="countdown__value">00</span>
                          <span className="countdown__label">d :</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value">06</span>
                          <span className="countdown__label">h :</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value">56</span>
                          <span className="countdown__label">m :</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value">19</span>
                          <span className="countdown__label">s</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-product_info">
                  <a href="/product/productdetail" className="name-product h4 link">
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
    </section>
    <section className="countdown-section py-5">
      <div className="container">
        <h1 className="sect-title text-center">Related Product</h1>
        <div className="row">
          {/* 1️⃣ Card 1 */}
          <div className="col-md-3">
            <div className="swiper-slide swiper-slide-next">
              <div className="card-product">
                <div className="card-product_wrapper">
                  <a href="/product/productdetail" className="product-img">
                    <img
                      className="img-product lazyloaded"
                      src="/images/Gold-jwellery/necklace-3.jpeg"
                      data-src="/images/Gold-jwellery/necklace-3.jpeg"
                      alt="Product"
                    />
                    <img
                      className="img-hover lazyloaded"
                      src="/images/Gold-jwellery/necklace-4.jpeg"
                      data-src="/images/Gold-jwellery/necklace-4.jpeg"
                      alt="Product"
                    />
                  </a>

                  <ul className="product-action_list">
                    <li>
                      <a
                        href="cart"
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
                          <span className="countdown__value">00</span>
                          <span className="countdown__label">d :</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value">06</span>
                          <span className="countdown__label">h :</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value">56</span>
                          <span className="countdown__label">m :</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value">19</span>
                          <span className="countdown__label">s</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-product_info">
                  <a href="/product/productdetail" className="name-product h4 link">
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

          {/* 2️⃣ Card 2 */}
          <div className="col-md-3">
            <div className="swiper-slide">
              <div className="card-product">
                <div className="card-product_wrapper">
                  <a href="/product/productdetail" className="product-img">
                    <img
                      className="lazyload img-product"
                      src="/images/Gold-jwellery/necklace-3.jpeg"
                      alt="Product"
                    />
                    <img
                      className="lazyload img-hover"
                      src="/images/Gold-jwellery/necklace-3.jpeg"
                      alt="Product"
                    />
                  </a>

                  <ul className="product-action_list">
                    <li>
                      <a
                        href="cart"
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
                  <a href="/product/productdetail" className="name-product h4 link">
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

          {/* 3️⃣ Card 3 */}
          <div className="col-md-3">
            <div className="swiper-slide">
              <div className="card-product">
                <div className="card-product_wrapper">
                  <a href="/product/productdetail" className="product-img">
                    <img
                      className="lazyload img-product"
                      src="/images/Gold-jwellery/necklace-3.jpeg"
                      alt="Product"
                    />
                    <img
                      className="lazyload img-hover"
                      src="/images/Gold-jwellery/necklace-2.jpeg"
                      alt="Product"
                    />
                  </a>

                  <ul className="product-action_list">
                    <li>
                      <a
                        href="cart"
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
                </div>

                <div className="card-product_info">
                  <a href="/product/productdetail" className="name-product h4 link">
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

          {/* 4️⃣ Card 4 */}
          <div className="col-md-3">
            <div className="swiper-slide swiper-slide-next">
              <div className="card-product">
                <div className="card-product_wrapper">
                  <a href="/product/productdetail" className="product-img">
                    <img
                      className="img-product lazyloaded"
                      src="/images/Gold-jwellery/necklace-3.jpeg"
                      alt="Product"
                    />
                    <img
                      className="img-hover lazyloaded"
                      src="/images/Gold-jwellery/necklace-3.jpeg"
                      alt="Product"
                    />
                  </a>

                  <ul className="product-action_list">
                    <li>
                      <a
                        href="cart"
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
                    <li className="product-badge_item h6 trend">Trending</li>
                  </ul>

                  <div className="product-countdown">
                    <div
                      className="js-countdown cd-has-zero"
                      data-timer="25472"
                      data-labels="d : ,h : ,m : ,s"
                    >
                      <div aria-hidden="true" className="countdown__timer">
                        <span className="countdown__item">
                          <span className="countdown__value">00</span>
                          <span className="countdown__label">d :</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value">06</span>
                          <span className="countdown__label">h :</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value">56</span>
                          <span className="countdown__label">m :</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value">19</span>
                          <span className="countdown__label">s</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-product_info">
                  <a href="/product/productdetail" className="name-product h4 link">
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
    </section>


</>
  );
};

export default CountdownCard;
