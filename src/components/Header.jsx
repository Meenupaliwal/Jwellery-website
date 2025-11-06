import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/styles.css"; // ✅ make sure your CSS file is imported

const Header = ({ setShowEnquiryForm }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const jewelleryCategories = [
    "Gold Kundan Jewellery",
    "Meena Jewellery",
    "Polki Jewellery",
    "Jadau Jewellery",
    "22 Karat Gold Jewellery",
    "18 Karat Gold Jewellery",
    "14 Karat Gold Jewellery",
    "24 Karat Gold Ornaments (Pure Gold – mostly coins, bars)",
  ];

  const artificialJewellery = [
    "Kundan Jewellery",
    "Antique jewellery",
    "Ad jewellery",
    "Rajputi jewellery",
    "1 gram gold jewellery",
    "Bridal set, sale and rent both",
    "Handmade Traditional Jewellery",
    "Antique Gold Jewellery",
    "Matte Finish Gold Jewellery",
    "Temple Jewellery",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Black Bar */}
      <div className="tf-topbar bg-black">
        <div className="container-full">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="topbar-left">
                <h6 className="text-up text-white fw-normal text-line-clamp-1">
                  Up to 50% off Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h6>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 d-none d-lg-block">
              <ul className="topbar-right topbar-option-list">
                <li className="h6"><Link to="/faq" className="text-white link">Help & FAQs</Link></li>
                <li className="br-line"></li>
                <li className="h6"><Link to="/factory" className="text-white link">Factory</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header className={`tf-header header-fix header-abs-1 ${isSticky ? "sticky" : ""}`}>
        <div className="container-full">
          <div className="row align-items-center">

            <div className="col-md-4 col-3 d-xl-none">
              <button
                className="btn-mobile-menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span></span>
              </button>
            </div>

            <div className="col-xl-3 col-md-4 col-6 d-flex justify-content-center justify-content-xl-start">
              <Link to="/" className="logo-site">
                <img src="/images/logo/logo.svg" alt="Logo" />
              </Link>
            </div>

            <div className="col-xl-6 d-none d-xl-block">
              <nav className="box-navigation">
                <ul className="box-nav-menu">
                  <li className="menu-item"><Link to="/" className="item-link">HOME</Link></li>

                  <li
                    className="menu-item"
                    onMouseEnter={() => setProductMenuOpen(true)}
                    onMouseLeave={() => setProductMenuOpen(false)}
                  >
                    <Link to="/product" className="item-link">
                      PRODUCT <i className="icon icon-caret-down"></i>
                    </Link>

                    {productMenuOpen && (
                      <div className="sub-menu mega-menu">
                        <div className="container">
                          <div className="row">
                            <div className="col-4">
                              <h4 className="menu-heading">Jewellery</h4>
                              <ul className="sub-menu_list">
                                {jewelleryCategories.map((item, i) => (
                                  <li key={i}>
                                    <Link to="/product/productdetail" className="sub-menu_link">
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="col-4">
                              <h4 className="menu-heading">Imitation Jewellery</h4>
                              <ul className="sub-menu_list">
                                {artificialJewellery.map((item, i) => (
                                  <li key={i}>
                                    <Link to="/product/productdetail" className="sub-menu_link">
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="col-4">
                              <ul className="list-hor">
                                <li className="wg-cls hover-img">
                                  <Link to="/product" className="image img-style">
                                    <img src="/images/Gold-jwellery/cls-header-1.jpg" alt="Collection" />
                                  </Link>
                                  <div className="cls-content">
                                    <h4 className="tag_cls">Kurtis</h4>
                                    <span className="br-line type-vertical"></span>
                                    <Link to="/product" className="tf-btn-line">Shop Now</Link>
                                  </div>
                                </li>
                              </ul>
                            </div>

                          </div>
                        </div>
                      </div>
                    )}
                  </li>

                  <li className="menu-item"><Link to="/about" className="item-link">ABOUT US</Link></li>
                  <li className="menu-item"><Link to="/contact" className="item-link">CONTACT</Link></li>
                </ul>
              </nav>
            </div>

            <div className="col-xl-3 col-md-4 col-3">
              <ul className="nav-icon-list">
                <li className="d-none d-lg-flex"><Link to="/login" className="nav-icon-item link"><i className="icon icon-user"></i></Link></li>
                <li className="d-none d-md-flex"><a href="#search" className="nav-icon-item link"><i className="icon icon-magnifying-glass"></i></a></li>
                <li className="d-none d-sm-flex"><Link to="/wishlist" className="nav-icon-item link"><i className="icon icon-heart"></i></Link></li>

                <li className="shop-cart">
                  <button
                    onClick={() => setShowEnquiryForm(true)}
                    className="nav-icon-item link"
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    <i className="icon icon-shopping-cart-simple"></i>
                  </button>
                  <span className="count">24</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
