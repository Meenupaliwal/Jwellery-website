import React, { useEffect, useState } from "react";
import "../css/styles.css"; // adjust path if needed

const SaleBanner = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 6,
    minutes: 59,
    seconds: 51,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (value) => value.toString().padStart(2, "0");

  return (
    <section className="themesFlat py-5">
      <div className="banner-cd_v01 d-flex flex-column flex-md-row align-items-center justify-content-between bg-light rounded-4 overflow-hidden shadow-sm">
        {/* Left Content */}
        <div
          className="banner_content text-center text-md-start p-4 wow fadeInUp animated"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <h1 className="title fw-bold mb-3" style={{ color: "#d8af55" }}>
            On Sale!
          </h1>
          <p className="sub-title mb-4 text-muted">
            Up to 50% off on selected Injila jewellery pieces — timeless beauty
            at irresistible prices.
          </p>

          {/* Countdown */}
          <div className="count-down_v01 mb-4 d-flex justify-content-center justify-content-md-start gap-3">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((unit, index) => (
              <div
                key={index}
                className="countdown__item text-center"
                style={{
                  background: "#fff",
                  border: "2px solid #d8af55",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  minWidth: "70px",
                }}
              >
                <span
                  className="countdown__value d-block fw-bold"
                  style={{ color: "#d8af55", fontSize: "1.3rem" }}
                >
                  {format(unit.value)}
                </span>
                <span
                  className="countdown__label text-muted"
                  style={{ fontSize: "0.85rem" }}
                >
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <a
            href="/product"
            className="tf-btn type-small-2 btn-gold text-decoration-none px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2"
          >
            Get Voucher 25%
            <i className="icon icon-arrow-right"></i>
          </a>
        </div>

        {/* Right Banner Image */}
        <div className="banner_img">
          <img
            src="images/Gold-jwellery/banner-cd-V01.jpg"
            alt="Sale Banner"
            className="img-fluid"
          />
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        .btn-gold {
          background-color: #d8af55;
          color: #fff;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-gold:hover {
          background-color: #b88b33;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default SaleBanner;
