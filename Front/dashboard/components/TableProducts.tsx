"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "../components/ui/table";
import type { Product } from "../types/product";
import { useProduct } from "../hooks/useProduct";
import { Button } from "../components/ui/button";

interface TableProductsProps {
  products: Product[];
}

function TableProducts({ products }: TableProductsProps) {
  const { removeProduct, activeProduct } = useProduct();

  const InfoTableBody = products.map((p) => {
    return (
      <TableRow key={p.id_product}>
        <TableCell>{p.id_product}</TableCell>
        <TableCell>{p.nombre}</TableCell>
        <TableCell>{p.descripcion}</TableCell>
        <TableCell>{p.stock}</TableCell>
        <TableCell>{p.Categoria}</TableCell>
        <TableCell>{p.activo ? "No" : "Si"}</TableCell>
        <TableCell className="flex gap-2">
          <Button variant="warning">Editar</Button>
          {p.activo ? (
            <Button
              variant="default"
              onClick={() => {
                if (window.confirm("¿Estas seguro de activar el producto?")) {
                  activeProduct(p.id_product);
                }
              }}
            >
              Activar
            </Button>
          ) : (
            <Button
              variant="destructive"
              onClick={() => {
                if (window.confirm("¿Estas seguro de inactivar el producto?")) {
                  removeProduct(p.id_product);
                }
              }}
            >
              Eliminar
            </Button>
          )}
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div>
      <Table>
        <TableCaption>Mi Tabla de Productos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID Producto</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Descripcion</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Activo</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{InfoTableBody}</TableBody>
      </Table>
    </div>
  );
}

export default TableProducts;
