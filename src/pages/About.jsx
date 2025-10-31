import React from "react";
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/styles.css';
import '../css/animate.css';
import '../icon/icomoon/style.css';
import PageTitleImage from "../components/PageTitleImage";
import BrandStorySection from '../components/BrandStorySection';
import InstagramSection from '../components/InstagramSection';
import Testimonial from '../components/Testimonial';

const About = () => {
  return (
    <>
      <PageTitleImage />

       
    <section className="s-intro flat-spacing">
      <div className="container text-center">
        <p className="brand-name">INJILA. Store</p>
        <div className="box-intro">
          <h4 className="slogan fw-normal">FASHION STYLE IN EVERY BREATH</h4>
          <p className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna augue,
            interdum et placerat in, pharetra nec massa. Nulla facilisis nisi tellus,
            ut porttitor lacus rutrum et. Nam fermentum est sit amet nisl ornare
            pellentesque. Cras cursus aliquet ex iaculis dignissim. Vestibulum suscipit
            vel lacus in rhoncus.
          </p>
        </div>
      </div>
    </section>
    <section className="s-about">
      <div className="container">
        <div className="tf-grid-layout tf-col-2 md-col-3 xl-col-4">
          <div className="item_2 image d-none d-md-block">
            <img
              className="lazyload"
              src="images/section/gallery-modal-2.jpg"
              data-src="images/section/gallery-modal-2.jpg"
              alt="Modal 2"
            />
          </div>

          <div className="wd-2-cols">
            <div className="content-blog text-md-start">
              <div className="d-md-inline-flex">
    
              </div>

              <div className="box-intro">
                <h4 className="slogan fw-normal">
                  FIRST STORE IN A RURAL AREA OF DENMARK
                </h4>
                <p className="intro-text">
                  Morbi finibus erat ullamcorper malesuada placerat. Integer
                  malesuada orci sed nulla scelerisque fermentum. Suspendisse
                  lacinia elit at bibendum tincidunt.
                </p>
              </div>
            </div>
          </div>

          <div className="item_1 image">
            <img
              className="lazyload"
              src="images/section/gallery-modal-1.jpg"
              data-src="images/section/gallery-modal-1.jpg"
              alt="Modal 1"
            />
          </div>

          <div className="d-md-none d-xl-block">
            <img
              className="lazyload d-md-none"
              src="images/section/gallery-modal-2.jpg"
              data-src="images/section/gallery-modal-2.jpg"
              alt="Modal 2"
            />
          </div>

          <div className="item_3 image">
            <img
              className="lazyload"
              src="images/section/gallery-modal-3.jpg"
              data-src="images/section/gallery-modal-3.jpg"
              alt="Modal 3"
            />
          </div>

          <div className="item_4 image">
            <img
              className="lazyload"
              src="images/section/gallery-modal-4.jpg"
              data-src="images/section/gallery-modal-4.jpg"
              alt="Modal 4"
            />
          </div>
        </div>
      </div>
    </section>
    <BrandStorySection />
<Testimonial />
    <InstagramSection />
    </>
  );
};

export default About;
