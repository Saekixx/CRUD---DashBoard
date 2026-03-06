import type { ProductFormData } from "../types/productForm.ts";

const CONST_URL = "http://localhost:3000";

export const getProducts = async () => {
  try {
    const response = await fetch(`${CONST_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsInactivos = async () => {
  try {
    const response = await fetch(`${CONST_URL}/products/inactivos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await fetch(`${CONST_URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (product: ProductFormData) => {
  try {
    const response = await fetch(`${CONST_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data.id_product;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (id: number, product: ProductFormData) => {
  try {
    const response = await fetch(`${CONST_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Error al actualizar el producto");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const response = await fetch(`${CONST_URL}/products/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const activateProduct = async (id: number) => {
  try {
    const response = await fetch(`${CONST_URL}/products/activate/${id}`, {
      method: "POST",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getResumenInventario = async () => {
  try {
    const response = await fetch(`${CONST_URL}/dashboard/resumen-inventario`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUltimoProductoInsertado = async () => {
  try {
    const response = await fetch(
      `${CONST_URL}/dashboard/ultimo-producto-ingresado`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUltimoProductoModificado = async () => {
  try {
    const response = await fetch(
      `${CONST_URL}/dashboard/ultimo-producto-modificado`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductosPorCategoria = async () => {
  try {
    const response = await fetch(
      `${CONST_URL}/dashboard/productos-por-categoria`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
