import React from "react";
import "../css/styles.css"; // adjust path if needed

const PageTitleImage = () => {
  return (
    <section className="page-title-image">
      <div className="page_image overflow-hidden">
        <img
          className="ani-zoom"
          src="images/slider/slider-3.jpg"
          alt="Banner"
          loading="lazy"
        />
      </div>

      <div className="page_content">
        <div className="container">
          <div className="content">
            <h1 className="heading fw-bold text-white">
              WE PRIORITIZE SUSTAINABLE &amp; <br className="d-none d-sm-block" />
              ENVIRONMENTALLY FRIENDLY <br className="d-none d-sm-block" />
              DEVELOPMENT
            </h1>
            <a href="/product" className="tf-btn animate-btn">
              Our Shop <i className="icon icon-caret-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitleImage;
