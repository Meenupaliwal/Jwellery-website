import React from "react";
import "../css/styles.css"; // adjust the path if needed

const TrendingSection = () => {
  const trendingItems = [
    {
      title: "Layered Necklaces",
      desc: "Elevate your look with Injila's stunning layered necklaces that define elegance and grace.",
      image:
        "/images/Gold-jwellery/jwellery.gif", // ✨ elegant necklace gif
      link: "product",
      bgColor: "#d8af55",
    },
    {
      title: "Signature Collections",
      desc: "Explore Injila’s most loved jewellery pieces crafted to perfection for every occasion.",
      image:
        "/images/Gold-jwellery/jwellery.gif", // 💎 luxury collection gif
      link: "product",
      bgColor: "#d8af55",
    },
    {
      title: "Injila Men",
      desc: "Discover refined jewellery designed for men — bold, timeless, and uniquely Injila.",
      image:
        "/images/Gold-jwellery/jwellery.gif", // 👔 men’s jewellery gif
      link: "product",
      bgColor: "#d8af55",
    },
        {
      title: "Injila Men",
      desc: "Discover refined jewellery designed for men — bold, timeless, and uniquely Injila.",
      image:
        "/images/Gold-jwellery/jwellery.gif", // 👔 men’s jewellery gif
      link: "product",
      bgColor: "#d8af55",
    },
        {
      title: "Injila Men",
      desc: "Discover refined jewellery designed for men — bold, timeless, and uniquely Injila.",
      image:
        "/images/Gold-jwellery/jwellery.gif", // 👔 men’s jewellery gif
      link: "product",
      bgColor: "#d8af55",
    },

  ];

  return (
    <section className="trending-section py-5">
      <div className="trending-wrapper animate-trigger animate container d-flex flex-wrap justify-content-center gap-4">
        {trendingItems.map((item, index) => (
          <div className="trending-item" key={index}>
            <a
              href={item.link}
              className="card-wrap text-decoration-none"
              style={{ "--bg-color": item.bgColor }}
            >
              <div className="img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-image img-fluid"
                  loading="lazy"
                  style={{ "--img-bg-color": "#FFFFFF" }}
                />
              </div>
              <div className="content-wrapper text-center mt-3">
                <h3 className="card-title fw-bold text-dark">
                  <span>{item.title}</span>
                </h3>
                <p className="card-desc text-muted">{item.desc}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Inline CSS for smooth animation feel */}
      <style jsx>{`
        .trending-section {
          background-color: #fff;
        }
        .trending-item {
          width: 280px;
          transition: all 0.4s ease;
        }
        .card-wrap {
          display: block;
          border-radius: 20px;
          background-color: var(--bg-color);
          padding: 20px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .card-wrap:hover {
          transform: translateY(-10px) scale(1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .card-image {
          width: 100%;
          height: auto;
          border-radius: 15px;
        }
        .card-title {
          margin-top: 12px;
          font-size: 1.2rem;
        }
        .card-desc {
          font-size: 0.9rem;
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
};

export default TrendingSection;
