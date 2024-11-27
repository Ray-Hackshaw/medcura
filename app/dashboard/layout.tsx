import type { Metadata } from "next";
import { TransitionLink } from "../components/TransitionLink";

export const metadata: Metadata = {
  title: "MedCura | Dashboard",
  description: "Transforming Healthcare with Every Connection.",
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="mx-auto p-20 xl:px-40 flex flex-col relative h-screen"
      id="dashboard-layout"
    >
      <div className="w-full border-2 bg-white/80 flex-1 shadow-xl p-4 rounded-lg overflow-hidden flex flex-col">
        <div className="border-2 border-red-300 w-full flex flex-1">
          <div className="md:max-w-[300px] w-full border-green-300 border p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-black border-2"></div>
                <div>
                  <p className="text-gray-800">Welcome back, user</p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="underline">Settings</div>
                    <TransitionLink
                      href="/"
                      className="underline"
                      transitionId="dashboard-layout"
                    >
                      Log out
                    </TransitionLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-blue-300 border p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
