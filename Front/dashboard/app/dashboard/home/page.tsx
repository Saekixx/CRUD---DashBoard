import { SectionCards } from "@/components/section-cards";

function page() {
  return (
    <div className="p-2 bg-slate-50 overflow-y-aut">
      <div className="w-full mx-auto ">
        <div className="bg-cyan-700 rounded-2xl text-white text-3xl p-4 mb-4">
          <h1>Dashboard</h1>
        </div>
        <SectionCards />
      </div>
    </div>
  );
}

export default page;
