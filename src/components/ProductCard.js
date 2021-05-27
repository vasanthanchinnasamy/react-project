import { React } from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="product-card">
      <div>
        <h2 className="product-name">{product.product_name}</h2>
      </div>

      <div className="additional-detail"></div>
    </div>
  );
};
