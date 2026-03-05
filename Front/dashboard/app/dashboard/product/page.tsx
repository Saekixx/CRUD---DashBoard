"use client";

import TableProducts from "@/components/TableProducts";
import FilterActive from "@/components/FilterActive";
import { useState } from "react";
import { useProduct } from "@/hooks/useProduct";

function page() {
  const { products, productsInactive } = useProduct();
  const [activeFilter, setActiveFilter] = useState<number>(0);

  return (
    <div className="flex flex-col py-2">
      <div className="bg-cyan-700 rounded-2xl text-white text-3xl p-4 mb-4">
        <h1>Tabla de Productos</h1>
      </div>

      <FilterActive onChange={(value) => setActiveFilter(value)}></FilterActive>

      <div>
        {activeFilter === 0 ? (
          <TableProducts products={products} />
        ) : (
          <TableProducts products={productsInactive} />
        )}
      </div>
    </div>
  );
}

export default page;
