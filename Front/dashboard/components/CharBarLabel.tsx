"use client";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

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

const chartData = [
  { categoria: "Electronica", stock: 186, fill: "var(--chart-1)" },
  { categoria: "Hogar", stock: 305, fill: "var(--chart-2)" },
  { categoria: "Ropa", stock: 237, fill: "var(--chart-3)" },
  { categoria: "Deportes", stock: 73, fill: "var(--chart-4)" },
];

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

export function ChartBarLabel() {
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

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Bar dataKey="stock" fill="var(--chart-1)" radius={8} barSize={60}>
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
