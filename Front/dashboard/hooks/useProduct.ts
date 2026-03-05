import { useState, useEffect, use } from "react";
import type { Product } from "../types/product.ts";
import {
  getProducts,
  getProductsInactivos,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  activateProduct,
} from "../api/product.api";

export function useProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsInactive, setProductsInactive] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, [products]);

  useEffect(() => {
    getProductsInactivos().then(setProductsInactive);
  }, [productsInactive]);

  const removeProduct = async (id: number) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id_product !== id));
  };

  const activeProduct = async (id: number) => {
    await activateProduct(id);
    setProductsInactive((prev) => prev.filter((p) => p.id_product !== id));
  };

  return {
    products,
    productsInactive,
    removeProduct,
    activeProduct,
  };
}
