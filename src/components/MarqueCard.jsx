import React from "react";

const MarqueCard = () => {
  const products = [
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

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
            <div
              className="card-product product-style_list"
              data-availability="In stock"
              data-brand="trendy-queen"
            >
              <div className="card-product_wrapper">
                {/* --- Product Image Section --- */}
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

                {/* --- Action Buttons (Compare & Quick View) --- */}
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

                {/* --- Marquee Section --- */}
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

                {/* --- Product Title --- */}
                <div className="text-center mt-3">
                  <h4 className="fw-bold">{product.name}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueCard;
