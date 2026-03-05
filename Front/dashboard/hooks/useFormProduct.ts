import { useState } from "react";
import {
  getProductById,
} from "../api/product.api";
import type { Product } from "../types/product.ts";
import { useProduct } from "@/hooks/useProduct";

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

  const handleEdit = async (id: number) => {
    await getByIdData(id);
    setModalEdit(true);
  };

  return {
    initialValues,
    modalEdit,
    setModalEdit,
    handleEdit,
  };
}
