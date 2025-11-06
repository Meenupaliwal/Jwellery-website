import React from "react";

const Injila = () => {
  return (
    <div className="injila">
      <div className="container">
        <div className="tf-grid-layout lg-col-2">
          {/* Box 1 */}
          <div className="box-image_V02 type-space-3 hover-img">
            <a href="product" className="box-image_image img-style">
              <img
                src="/images/Gold-jwellery/box-image-8.jpg"
                alt="Diamond Jewelry"
                loading="lazy"
              />
            </a>
            <div className="box-image_content wow fadeInUp">
              <span className="sub-text h4 text-white mb-8">Sale OFF 2%</span>
              <a
                href="product"
                className="title link text-display-2 fw-medium text-white"
              >
                Diamond Jewelry
              </a>
              <a
                href="product"
                className="tf-btn btn-white animate-btn animate-dark"
              >
                Shop now
                <i className="icon icon-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Box 2 */}
          <div className="box-image_V02 type-space-3 hover-img">
            <a href="product" className="box-image_image img-style">
              <img
                src="/images/Gold-jwellery/box-image-9.jpg"
                alt="Birthstone Jewelry"
                loading="lazy"
              />
            </a>
            <div className="box-image_content wow fadeInUp">
              <span className="sub-text h4 text-white mb-8">
                Get our 5% OFF coupon
              </span>
              <a
                href="product"
                className="title link text-display-2 fw-medium text-white"
              >
                Birthstone Jewelry
              </a>
              <a
                href="product"
                className="tf-btn btn-white animate-btn animate-dark"
              >
                Shop now
                <i className="icon icon-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Injila;
