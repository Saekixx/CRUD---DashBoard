"use client";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { Cell } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { useDashboard } from "@/hooks/useDashboard";

export function ChartBarLabel() {
  const { productosPorCategoria } = useDashboard();

  const categorias: Record<number, string> = {
    1: "Electronica",
    2: "Hogar",
    3: "Ropa",
    4: "Deportes",
  };

  const colores: Record<number, string> = {
    1: "var(--chart-1)",
    2: "var(--chart-2)",
    3: "var(--chart-3)",
    4: "var(--chart-4)",
  };

  const chartData = productosPorCategoria.map((item) => ({
    categoria: categorias[item.id_categoria],
    stock: item.total_stock,
    color: colores[item.id_categoria],
  }));

  const chartConfig = {
    electronica: {
      label: "Electronica",
      color: "var(--chart-1)",
    },
    hogar: {
      label: "Hogar",
      color: "var(--chart-2)",
    },
    ropa: {
      label: "Ropa",
      color: "var(--chart-3)",
    },
    deportes: {
      label: "Deportes",
      color: "var(--chart-4)",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock Categoria</CardTitle>
        <CardDescription>El Stock por Categoria</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData} margin={{ top: 20 }}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="categoria"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Bar dataKey="stock" radius={8} barSize={60}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}

              <LabelList
                dataKey="stock"
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
              <LabelList
                dataKey="stock"
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
