export interface Product {
  id_product: number | null;
  nombre: string;
  descripcion: string;
  stock: number;
  id_categoria: number | null;
  Categoria?: string;
  DetallCate?: string;
  activo?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
