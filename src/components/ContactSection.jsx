import React from "react";

const ContactSection = () => {
  return (
    <section className="s-contact-information flat-spacing">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* Left Image */}
          <div className="col-lg-7">
            <div className="image mb-lg-0">
              <img
                loading="lazy"
                width="820"
                height="755"
                src="images/section/contact-information.jpg"
                alt="Contact Information"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-5">
            <div className="infor-content">
              <p className="title h1 fw-medium text-black">Contact Information</p>

              <ul className="infor-store">
                {/* Address */}
                <li>
                  <h5 className="caption fw-semibold">Address</h5>
                  <p className="h6 mb-12">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                  <a
                    href="https://www.google.com/maps?q=2972+Westheimer+Rd.+Santa+Ana,Illinois+85486"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tf-btn-line"
                  >
                    <span className="h6 text-capitalize fw-semibold">
                      Get Direction
                    </span>
                    <i className="icon icon-arrow-top-right fs-20"></i>
                  </a>
                </li>

                {/* Contact Info */}
                <li>
                  <h5 className="caption fw-semibold">Contact Us</h5>
                  <ul className="store-contact list-ver">
                    <li>
                      <i className="icon icon-phone"></i>
                      <span className="br-line type-vertical"></span>
                      <a href="tel:9414058509" className="h6 link">
                        9414058509
                      </a>
                    </li>
                    <li>
                      <i className="icon icon-envelope-simple"></i>
                      <span className="br-line type-vertical"></span>
                      <a href="mailto:narayanijewells@gmail.com" className="h6 link">
                        narayanijewells@gmail.com
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Social Media */}
                <li>
                  <h5 className="caption fw-semibold">Social Media</h5>
                  <ul className="tf-social-icon">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-facebook"
                      >
                        <span className="icon">
                          <i className="icon-fb"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-instagram"
                      >
                        <span className="icon">
                          <i className="icon-instagram-logo"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-x"
                      >
                        <span className="icon">
                          <i className="icon-x"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-tiktok"
                      >
                        <span className="icon">
                          <i className="icon-tiktok"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
