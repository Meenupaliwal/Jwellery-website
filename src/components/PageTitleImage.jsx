import React from "react";
import "../css/styles.css"; // make sure your CSS path is correct

const PageTitleImage = ({ title, subtitle, image, buttonText, buttonLink }) => {
  return (
    <section className="page-title-image">
      <div className="page_image overflow-hidden">
        <img
          className="ani-zoom"
          src={`/${image}`}  // ✅ Image path from public folder
          alt={title}
          loading="lazy"
        />
      </div>

      <div className="page_content">
        <div className="container">
          <div className="content">
            <h1 className="heading fw-bold text-white">
              {title} <br className="d-none d-sm-block" />
              {subtitle && (
                <>
                  {subtitle} <br className="d-none d-sm-block" />
                </>
              )}
            </h1>

            {buttonText && buttonLink && (
              <a href={buttonLink} className="tf-btn animate-btn">
                {buttonText} <i className="icon icon-caret-right"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitleImage;
