import type { Metadata } from "next";
import { SideBar } from "../components/SideBar";

export const metadata: Metadata = {
  title: "MedCura | Dashboard",
  description: "Transforming Healthcare with Every Connection.",
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="mx-auto p-8 md:p-20 xl:px-40 flex flex-col relative h-screen"
      id="dashboard-layout"
    >
      <div className="w-full flex-1 shadow-xl rounded-lg overflow-hidden flex flex-col">
        <div className="w-full md:flex flex-1">
          <SideBar />
          <div className="w-full border-black border-l p-4 bg-white/80">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
