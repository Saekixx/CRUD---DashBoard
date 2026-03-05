import TableProducts from "@/components/TableProducts";

function page() {
  return (
    <div className="flex flex-col py-2">
      <div className="bg-cyan-700 rounded-2xl text-white text-3xl p-4 mb-4">
        <h1>Tabla de Productos</h1>
      </div>

      <div>
        <TableProducts />
      </div>
    </div>
  );
}

export default page;
