import React from "react";

const products = [
  {
    id: 1,
    title: "18K Gold Friendship Ring",
    img: "https://dummyimage.com/400x400/ddd/000.png&text=Ring",
    oldPrice: 109.99,
    price: 89.99,
  },
  {
    id: 2,
    title: "14K Gold Plated Eternity Ring",
    img: "https://dummyimage.com/400x400/ddd/000.png&text=Eternity+Ring",
    oldPrice: 99.99,
    price: 79.99,
  },
  {
    id: 3,
    title: "Moissanite Wedding Ring Set",
    img: "https://dummyimage.com/400x400/ddd/000.png&text=Wedding+Set",
    oldPrice: 79.99,
    price: 59.99,
  },
  {
    id: 4,
    title: "Silver Promise Rings",
    img: "https://dummyimage.com/400x400/ddd/000.png&text=Promise+Ring",
    oldPrice: 189.99,
    price: 159.99,
  },
];

const ProductGrid = () => {
  return (
    <div className="row g-4">
      {products.map((product) => (
        <div className="col-sm-6 col-md-4" key={product.id}>
          <div className="card border-0 shadow-sm h-100">
            <img src={product.img} alt={product.title} className="card-img-top" />
            <div className="card-body text-center">
              <h6 className="fw-semibold">{product.title}</h6>
              <p className="text-muted text-decoration-line-through m-0">
                ${product.oldPrice}
              </p>
              <p className="fw-bold text-dark">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
