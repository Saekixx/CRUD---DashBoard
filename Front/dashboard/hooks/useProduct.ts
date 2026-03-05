import { useState, useEffect, use } from "react";
import type { Product } from "../types/product.ts";
import {
  getProducts,
  getProductsInactivos,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/product.api";

export function useProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return {
    products,
  };
}
