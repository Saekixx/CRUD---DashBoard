import type { Product } from "./product";

export type ProductFormData = Pick<
  Product,
  "id_product" | "nombre" | "descripcion" | "stock" | "id_categoria"
>;
