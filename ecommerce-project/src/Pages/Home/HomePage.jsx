import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { ProductGrid } from "./ProductGrid";

export function HomePage({ cart ,cartData}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products")
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <Header cart={cart} />
      <title>Ecommerce Project</title>
      <div className="home-page">
        <ProductGrid products={products} cartData={cartData}/>
      </div>
    </>
  );
}
