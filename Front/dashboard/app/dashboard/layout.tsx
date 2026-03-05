import SideBar from "../../components/SideBar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <div className="grid grid-cols-[120px_1fr] min-h-screen">
  
    <SideBar></SideBar>

    <main className="p-6">
      {children}
    </main>

  </div>
)
}

