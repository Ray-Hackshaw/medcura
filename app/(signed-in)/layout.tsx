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
      className="mx-auto md:p-12 xl:px-40 flex flex-col relative h-screen"
      id="dashboard-layout"
    >
      <div className="w-full flex-1 shadow-xl md:rounded-lg flex flex-col max-w-[1440px] mx-auto relative">
        <div className="w-full md:flex flex-1 overflow-y-auto">
          <SideBar />
          <div className="w-full py-2 border-black border-l md:px-4 md:py-8 bg-white/80 flex-1 h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
