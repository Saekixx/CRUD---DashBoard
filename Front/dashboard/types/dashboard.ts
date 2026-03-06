export interface invertarioResumen {
  TotalProductos: number;
  ProductosActivos: number;
  ProductosInactivos: number;
  StockTotal: number;
}

export interface ProdAt {
  id_product: number;
  nombre: string;
  descripcion: string;
  stock: number;
  id_categoria: number;
  nombreCategoria: string;
  activo: number;
  create_at: string;
  update_at: string;
}

export interface TotalStock {
  id_categoria: number;
  total_stock: number;
}

export interface TopProduct {
  categoria: string;
  total: number;
}
