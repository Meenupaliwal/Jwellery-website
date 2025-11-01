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
              <div className="col-md-4">
                <div className="card text-center">
                  <img src="images/products/product-1.jpg" className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Elegant Necklace</h5>
                    <p className="card-text">₹5,999</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <img src="images/products/product-2.jpg" className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Gold Earrings</h5>
                    <p className="card-text">₹2,499</p>
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
              <div className="col-md-4">
                <div className="card text-center">
                  <img src="images/products/product-3.jpg" className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Diamond Ring</h5>
                    <p className="card-text">₹12,999</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <img src="images/products/product-4.jpg" className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Designer Bangles</h5>
                    <p className="card-text">₹3,999</p>
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
              <div className="col-md-4">
                <div className="card text-center">
                  <img src="images/products/product-5.jpg" className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Silver Anklet</h5>
                    <p className="card-text">
                      <span className="text-decoration-line-through text-muted">₹1,999</span>{" "}
                      ₹1,499
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <img src="images/products/product-6.jpg" className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Pearl Bracelet</h5>
                    <p className="card-text">
                      <span className="text-decoration-line-through text-muted">₹3,499</span>{" "}
                      ₹2,799
                    </p>
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
