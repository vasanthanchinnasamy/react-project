import { React, useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// import "./HomePage.scss";

export const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const response = await fetch(`http://localhost:3004/products`);
      const data = await response.json();
      setProducts(data);
    };
    fetchAllProducts();
  }, []);

  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className="app-name">Products</h1>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};
