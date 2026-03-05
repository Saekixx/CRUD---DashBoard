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
import { useProduct } from "../hooks/useProduct";
import { Button } from "../components/ui/button";
function TableProducts() {
  const { products } = useProduct();

  const InfoTableBody = products.map((p) => {
    return (
      <TableRow>
        <TableCell>{p.id_product}</TableCell>
        <TableCell>{p.nombre}</TableCell>
        <TableCell>{p.descripcion}</TableCell>
        <TableCell>{p.stock}</TableCell>
        <TableCell>{p.Categoria}</TableCell>
        <TableCell>{p.activo ? "No" : "Si"}</TableCell>
        <TableCell className="flex gap-2">
          <Button variant="warning" aria-label="Submit">
            Editar
          </Button>
          <Button variant="destructive" aria-label="Delete">
            Eliminar
          </Button>
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
