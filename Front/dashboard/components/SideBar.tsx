import Link from "next/link";

function SideBar() {
  return (
    <nav className="bg-gray-800 text-white p-4 h-screen sticky top-0">
      <h2 className="text-lg font-bold mb-4 text-center">CRUD</h2>
      <div className="flex flex-col gap-4">
        <Link href="/dashboard/home" className="hover:text-blue-400">Dashboard</Link>
        <Link href="/dashboard/product" className="hover:text-blue-400">Product</Link>
      </div>
    </nav>
  )
}

export default SideBar