import { useState } from "react";
import {
  getProductById,
  createProduct,
  updateProduct,
} from "../api/product.api";
import type { Product } from "../types/product.ts";
import type { ProductFormData } from "../types/productForm.ts";

export function useFormProduct() {
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Product>({
    id_product: null,
    nombre: "",
    descripcion: "",
    stock: 0,
    id_categoria: null,
  });

  const getByIdData = async (id: number) => {
    const product = await getProductById(id);
    setInitialValues(product);
  };

  const updateFormProduct = async (id: number, data: ProductFormData) => {
    if (id === null || data.id_product === null) return;
    await updateProduct(id, data);
  };

  const handleEdit = async (id: number) => {
    await getByIdData(id);
    setModalEdit(true);
  };

  return {
    initialValues,
    modalEdit,
    setModalEdit,
    updateFormProduct,
    handleEdit,
  };
}
