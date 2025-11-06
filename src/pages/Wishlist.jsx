import React, { useState } from "react";
import "../css/styles.css"; // adjust the path to your CSS if needed
import PageTitleImage from "../components/PageTitleImage";

const allProducts = [
  {
    id: 1,
    name: "Summer Two Piece Set",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/chauker.jpeg",
    img2: "../images/Gold-jwellery/chauker-2.jpeg",
    badge: "Trending",
  },
  {
    id: 2,
    name: "Summer Two Piece Set",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/necklace.jpeg",
    img2: "../images/Gold-jwellery/necklace-2.jpeg",
    badge: "New",
  },
  {
    id: 3,
    name: "Summer Two Piece Set",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/necklace-2.jpeg",
    img2: "../images/Gold-jwellery/necklace-3.jpeg",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Summer Two Piece Set",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/necklace-3.jpeg",
    img2: "../images/Gold-jwellery/necklace-4.jpeg",
    badge: "New arrival",
  },
  {
    id: 5,
    name: "Nike Sportswear Tee Shirts",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/necklace-4.jpeg",
    img2: "../images/Gold-jwellery/necklace-3.jpeg",
    badge: "Flash sale",
  },
  {
    id: 6,
    name: "Summer Two Piece Set",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/necklace-2.jpeg",
    img2: "../images/Gold-jwellery/necklace-2.jpeg",
    badge: "Hot",
  },
  {
    id: 7,
    name: "Summer Two Piece Set",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/necklace.jpeg",
    img2: "../images/Gold-jwellery/jhumki-style-4.jpeg",
    badge: "Flash sale",
  },
  {
    id: 8,
    name: "Nike Sportswear Tee Shirts",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/chauker.jpeg",
    img2: "../images/Gold-jwellery/earring-4.jpeg",
    badge: "Trending",
  },
    {
    id: 9,
    name: "Nike Sportswear Tee Shirts",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/chauker.jpeg",
    img2: "../images/Gold-jwellery/earring-4.jpeg",
    badge: "Trending",
  },
    {
    id: 10,
    name: "Nike Sportswear Tee Shirts",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/chauker.jpeg",
    img2: "../images/Gold-jwellery/earring-4.jpeg",
    badge: "Trending",
  },
    {
    id: 11,
    name: "Nike Sportswear Tee Shirts",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/chauker.jpeg",
    img2: "../images/Gold-jwellery/earring-4.jpeg",
    badge: "Trending",
  },
    {
    id: 12,
    name: "Nike Sportswear Tee Shirts",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/chauker.jpeg",
    img2: "../images/Gold-jwellery/earring-4.jpeg",
    badge: "Trending",
  },
      {
    id: 13,
    name: "Nike Sportswear Tee Shirts",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/chauker.jpeg",
    img2: "../images/Gold-jwellery/earring-4.jpeg",
    badge: "Trending",
  },
      {
    id: 14,
    name: "Nike Sportswear Tee Shirts",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/chauker.jpeg",
    img2: "../images/Gold-jwellery/earring-4.jpeg",
    badge: "Trending",
  },
 {
    id: 15,
    name: "Nike Sportswear Tee Shirts",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/chauker.jpeg",
    img2: "../images/Gold-jwellery/earring-4.jpeg",
    badge: "Trending",
  },
   {
    id: 14,
    name: "Nike Sportswear Tee Shirts",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/chauker.jpeg",
    img2: "../images/Gold-jwellery/earring-4.jpeg",
    badge: "Trending",
  },
  
 {
    id: 14,
    name: "Nike Sportswear Tee Shirts",
    oldPrice: "$99.99",
    newPrice: "$69.99",
    img1: "../images/Gold-jwellery/chauker.jpeg",
    img2: "../images/Gold-jwellery/earring-4.jpeg",
    badge: "Trending",
  },
  

  

];

const Wishlist = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <>
      <PageTitleImage
        title="YOUR WISHLIST"
        subtitle="SAVE YOUR FAVORITE JEWELLERY PIECES FOR LATER"
        image="images/Gold-jwellery/slider-23.jpg"
      />

      <div className="flat-spacing">
        <div className="container">
          <div className="row wrapper-wishlist">
            {allProducts.slice(0, visibleProducts).map((product) => (
              <div className="col-md-3 mb-5" key={product.id}>
                <div className="card-product">
                  <div className="card-product_wrapper">
                    <a href="product/productdetail" className="product-img">
                      <img
                        className="lazyload img-product"
                        src={product.img1}
                        alt={product.name}
                      />
                      <img
                        className="lazyload img-hover"
                        src={product.img2}
                        alt={product.name}
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
                      <li className={`product-badge_item h6 ${product.badge.toLowerCase()}`}>
                        {product.badge}
                      </li>
                    </ul>
                  </div>

                  <div className="card-product_info">
                    <a href="product/productdetail" className="name-product h4 link">
                      {product.name}
                    </a>

                    <div className="price-wrap">
                      <span className="price-old h6 fw-normal">{product.oldPrice}</span>
                      <span className="price-new h6">{product.newPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Load More Button */}
            {visibleProducts < allProducts.length && (
              <div className="col-12 text-center mt-4">
                <button className="tf-btn animate-btn" onClick={loadMore}>
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
