import React from "react";
import PageTitleImage from "../components/PageTitleImage";

const Cart = () => {
  return (
    <>
    <PageTitleImage
  title="YOUR SHOPPING CART"
  subtitle="REVIEW YOUR ITEMS AND PROCEED TO CHECKOUT"
  image="/images/Gold-jwellery/slider-23.jpg"
  buttonText="Continue Shopping"
  buttonLink="/product"
/>

    <section className="cart-section py-5">
      <div className="container">
        <div className="canvas-wrapper">
          <div className="popup-header d-flex justify-content-between align-items-center mb-4">
            <span className="title fw-semibold h4 mb-3">Shopping Cart</span>
          </div>

          <div className="wrap">
            <div className="tf-mini-cart-wrap list-file-delete wrap-empty_text">
              <div className="tf-mini-cart-main">
                <div className="tf-mini-cart-scroll">
                  <div className="tf-mini-cart-items">

                    {/* Example Product 1 */}
                    <div className="tf-mini-cart-item file-delete">
                      <div className="tf-mini-cart-image">
                        <img
                          src="/images/Gold-jwellery/necklace.jpeg"
                          alt="Gold Necklace"
                        />
                      </div>
                      <div className="tf-mini-cart-info">
                        <div className="text-small text-main-2 sub">Jewellery Set</div>
                        <h6 className="title">
                          <a href="product/productdetail" className="link text-line-clamp-1">
                            Queen Fashion Necklace
                          </a>
                        </h6>

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="h6 fw-semibold">
                            <span className="number">1x</span>
                            <span className="price text-primary tf-mini-card-price">
                              ₹20,000
                            </span>
                          </div>
                          <i className="icon link icon-close remove"></i>
                        </div>
                      </div>
                    </div>

                    {/* Example Product 2 */}
                    <div className="tf-mini-cart-item file-delete">
                      <div className="tf-mini-cart-image">
                        <img
                          src="/images/Gold-jwellery/earring.jpeg"
                          alt="Diamond Earrings"
                        />
                      </div>
                      <div className="tf-mini-cart-info">
                        <div className="text-small text-main-2 sub">Earrings</div>
                        <h6 className="title">
                          <a href="product/productdetail" className="link text-line-clamp-1">
                            Elegant Diamond Studs
                          </a>
                        </h6>

                        <div className="d-flex justify-content-between align-items-center">
                          <div className="h6 fw-semibold">
                            <span className="number">1x</span>
                            <span className="price text-primary tf-mini-card-price">
                              ₹8,999
                            </span>
                          </div>
                          <i className="icon link icon-close remove"></i>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Cart Summary */}
              <div className="tf-mini-cart-bottom box-empty_clear mt-4">
                <div className="tf-mini-cart-tool d-flex justify-content-between">
                  <div className="tf-mini-cart-tool-btn btn-add-note">
                    <div className="h6">Note</div>
                    <i className="icon icon-note-pencil"></i>
                  </div>
                  <div className="tf-mini-cart-tool-btn btn-estimate-shipping">
                    <div className="h6">Shipping</div>
                    <i className="icon icon-truck"></i>
                  </div>
                  <div className="tf-mini-cart-tool-btn btn-add-gift">
                    <div className="h6">Gift</div>
                    <i className="icon icon-gift"></i>
                  </div>
                </div>

                <div className="tf-mini-cart-threshold mt-4">
                  <div className="text d-flex justify-content-between align-items-center">
                    <h6 className="subtotal">Subtotal (2 items)</h6>
                    <h4 className="text-primary total-price tf-totals-total-value">
                      ₹28,999
                    </h4>
                  </div>

                  <div className="tf-progress-bar tf-progress-ship my-2">
                    <div
                      className="value bg-dark"
                      style={{ width: "45%" }}
                      data-progress="45"
                    ></div>
                  </div>

                  <div className="desc text-main">
                    Add{" "}
                    <span className="text-primary fw-bold">₹10,000</span> more
                    to get free shipping!
                  </div>
                </div>

                <div className="tf-mini-cart-bottom-wrap mt-4">
                  <div className="tf-mini-cart-view-checkout">
                    <a
                      href="/cart"
                      className="tf-btn btn-white animate-btn animate-dark line me-3"
                    >
                      View Cart
                    </a>
                    <a
                      href="/checkout"
                      className="tf-btn animate-btn d-inline-flex bg-dark-2 justify-content-center"
                    >
                      <span>Check Out</span>
                    </a>
                  </div>

                  <div className="free-shipping mt-3">
                    <i className="icon icon-truck me-2"></i>
                    Free shipping on all orders over ₹30,000
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

export default Cart;
