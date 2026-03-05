import { useState, useEffect, use } from "react";
import type { Product } from "../types/product.ts";
import {
  getProducts,
  getProductsInactivos,
  deleteProduct,
  activateProduct,
} from "../api/product.api";

export function useProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsInactive, setProductsInactive] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
    getProductsInactivos().then(setProductsInactive);
  }, []);

  const removeProduct = async (id: number) => {
    const product = products.find((p) => p.id_product === id);
    if (!product) return;

    await deleteProduct(id);

    setProducts((prev) => prev.filter((p) => p.id_product !== id));

    setProductsInactive((prev) => [...prev, { ...product, activo: true }]);
  };

  const activeProduct = async (id: number) => {
    const product = productsInactive.find((p) => p.id_product === id);
    if (!product) return;

    await activateProduct(id);

    setProductsInactive((prev) => prev.filter((p) => p.id_product !== id));
    setProducts((prev) => [...prev, { ...product, activo: false }]);
  };

  return {
    products,
    productsInactive,
    removeProduct,
    activeProduct,
  };
}
