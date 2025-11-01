import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ReactImageMagnify from "react-image-magnify";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import "../css/animate.css";
import "../icon/icomoon/style.css";

const ProductDetailGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Example product images (replace with your own)
  const images = Array.from({ length: 11 }, (_, i) =>
    require(`../images/products/fashion/product-${i + 1}.jpg`)
  );

  return (
    <div className="col-md-6">
      <div className="tf-product-media-wrap sticky-top" style={{ top: "109px" }}>
        <div className="product-thumbs-slider d-flex">
          {/* === Thumbnails Swiper (Vertical) === */}
<Swiper
  spaceBetween={10}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  thumbs={{ swiper: thumbsSwiper }}
  modules={[FreeMode, Navigation, Thumbs]}
  className="tf-product-media-main"
  id="gallery-swiper-started"
>
  {images.map((img, i) => (
    <SwiperSlide key={i}>
      <div className="item" style={{ textAlign: "center" }}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: `Product-${i}`,
              isFluidWidth: true,
              src: img,
            },
            largeImage: {
              src: img,
              width: 1200,
              height: 1200,
            },
            lensStyle: { backgroundColor: "rgba(0,0,0,.2)" },
            enlargedImageContainerDimensions: {
              width: "200%",
              height: "100%",
            },
          }}
        />
      </div>
    </SwiperSlide>
  ))}

  {/* Navigation buttons */}
  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>
</Swiper>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailGallery;
