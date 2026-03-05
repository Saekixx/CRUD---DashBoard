"use client";

import TableProducts from "@/components/TableProducts";
import FilterActive from "@/components/FilterActive";
import ModalForm from "@/components/ModalForm";
import { useState } from "react";
import { useProduct } from "@/hooks/useProduct";
import { useFormProduct } from "@/hooks/useFormProduct";

function page() {
  const { products, productsInactive, activeProduct, removeProduct, updateFormProduct } =
    useProduct();
  const {
    initialValues,
    modalEdit,
    setModalEdit,
    handleEdit,
  } = useFormProduct();
  const [activeFilter, setActiveFilter] = useState<number>(0);
  const displayedProducts = activeFilter === 0 ? products : productsInactive;

  return (
    <div className="flex flex-col py-2">
      <div className="bg-cyan-700 rounded-2xl text-white text-3xl p-4 mb-4">
        <h1>Tabla de Productos</h1>
      </div>

      <FilterActive onChange={(value) => setActiveFilter(value)}></FilterActive>

      <div>
        <TableProducts
          key={activeFilter}
          products={displayedProducts}
          onRemove={removeProduct}
          onActivate={activeProduct}
          showModal={handleEdit}
        />

        {modalEdit && (
          <ModalForm
            open={modalEdit}
            setOpen={setModalEdit}
            initialValues={initialValues}
            onSubmit={updateFormProduct}
          />
        )}
      </div>
    </div>
  );
}

export default page;
