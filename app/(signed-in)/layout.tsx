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
      className="mx-auto md:p-12 xl:px-40 flex flex-col relative min-h-screen overflow-hidden"
      id="dashboard-layout"
    >
      <div className="w-full flex-1 flex flex-col md:flex-row max-w-[1440px] overflow-hidden mx-auto md:rounded-lg relative bg-white/80">
        <SideBar />
        <div className="w-full py-2 flex-1 md:px-4 md:py-8 h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
