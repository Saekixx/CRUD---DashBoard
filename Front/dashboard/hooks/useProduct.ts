import { useState, useEffect } from "react";
import type { Product } from "../types/product.ts";
import type { ProductFormData } from "../types/productForm.ts";
import {
  getProducts,
  getProductsInactivos,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
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

  const updateFormProduct = async (id: number, data: ProductFormData) => {
    if (id === null || data.id_product === null) return;
    await updateProduct(id, data);

    setProducts((prev) =>
      prev.map((p) =>
        p.id_product === id
          ? {
              ...p,
              nombre: data.name ?? p.nombre,
              descripcion: data.description ?? p.descripcion,
              stock: data.stock ?? p.stock,
              id_categoria: data.id_categoria ?? p.id_categoria,
            }
          : p,
      ),
    );

    setProductsInactive((prev) =>
      prev.map((p) =>
        p.id_product === id
          ? {
              ...p,
              nombre: data.name,
              descripcion: data.description,
              stock: data.stock,
              id_categoria: data.id_categoria,
            }
          : p,
      ),
    );
  };

  const createFormProduct = async (data: ProductFormData) => {
    const id = await createProduct(data);

    const newProduct = await getProductById(id);

    if (newProduct) {
      setProducts((prev) => [...prev, newProduct]);
    }
  };

  return {
    products,
    productsInactive,
    removeProduct,
    activeProduct,
    updateFormProduct,
    createFormProduct,
  };
}
