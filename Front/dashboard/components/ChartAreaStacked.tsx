"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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

export function ChartAreaStacked() {
  const { topProductosCategoria } = useDashboard();

  const chartData = topProductosCategoria.map((p) => ({
    categoria: p.categoria,
    total: p.total,
  }));

  const chartConfig = {
    total: {
      label: "Total",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Productos por Categoria</CardTitle>
        <CardDescription>Cuantos Productos hay por Categoria</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="categoria"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="total"
              type="natural"
              fill="var(--color-total)"
              fillOpacity={0.4}
              stroke="var(--color-total)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
