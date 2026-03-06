"use client";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useDashboard } from "@/hooks/useDashboard";

export function SectionCards() {
  const { resumenInventario } = useDashboard();

  return (
    <div className="grid grid-cols-4 gap-4 px-4 lg:px-6 w-full">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Productos Activos</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {resumenInventario?.ProductosActivos}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Tenemos estos productos activos
          </div>
          <div className="text-muted-foreground">
            El número de productos activos en el inventario
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Productos Inactivos</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {resumenInventario?.ProductosInactivos}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Atención a productos inactivos
          </div>
          <div className="text-muted-foreground">
            El número de productos inactivos en el inventario
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total de Productos</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {resumenInventario?.TotalProductos}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Total de productos en el inventario
          </div>
          <div className="text-muted-foreground">Sigamos por más</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Stock Total</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {resumenInventario?.StockTotal}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Stock total de Productos
          </div>
          <div className="text-muted-foreground">
            Stock total en el inventario
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
