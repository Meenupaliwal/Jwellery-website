import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BrandSlider = () => {
  const brands = [
    "Tanishq",
    "Malabar Gold & Diamonds",
    "Kalyan Jewellers",
    "PC Jeweller",
    "CaratLane",
    "Bluestone",
    "ORRA",
    "Zoya by Tanishq",
    "Giva",
    "Tribe Amrapali",
  ];

  return (
    <div className="brand-slider py-4 bg-light">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={8}
        spaceBetween={40}
        loop={true}
        allowTouchMove={false}
        autoplay={{
          delay: 0, // no delay between slides
          disableOnInteraction: false,
        }}
        speed={3000} // controls the continuous sliding speed
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 8 },
        }}
        style={{ transitionTimingFunction: "linear" }} // smooth linear motion
      >
        {brands.concat(brands).map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="text-center fw-bold text-dark">{brand}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
