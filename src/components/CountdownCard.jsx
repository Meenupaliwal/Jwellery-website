import React from "react";

const CountdownCard = () => {
  // Product data for 3 cards
  const products = [
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

  return (
    <section className="countdown-section py-5">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
              <div className="card-product_wrapper mt-5">
                {/* --- Product Image Section --- */}
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

                {/* --- Action Buttons --- */}
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

                {/* --- Countdown Timer --- */}
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

                {/* --- Badge with special color for Limited --- */}
                <ul className="product-badge_list">
                  <li
                    className={`product-badge_item h6`}
                    style={{
                      backgroundColor:
                        product.badge === "Limited" ? "#FF5733" : "#FFD700", // Limited = red-orange, others = gold
                      color: "#fff",
                    }}
                  >
                    {product.badge}
                  </li>
                </ul>

                {/* --- Product Title --- */}
                <h5 className="text-center mt-3 fw-bold">{product.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownCard;
