import Link from "next/link";
import { MobileSideMenu } from "./MobileSideMenu";
import { SideMenu } from "./SideMenu";
import Image from "next/image";

export const SideBar = () => {
  return (
    <div className="z-[20] relative md:max-w-[200px] lg:max-w-[300px] w-full overflow-hidden text-white ">
      <div className="flex md:flex-col md:gap-4 w-full bg-gradient-to-br from-slate-700 to-slate-900 md:h-full">
        <div className="flex items-center gap-2 md:flex-col border-b border-white/20">
          <Link href="/dashboard">
            <Image
              src="/logo-white.png"
              width="200"
              height="200"
              alt="Med Cura white logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-2 items-center p-2">
          <div className="hidden md:block w-full min-w-4 md:w-8 md:h-8 rounded-full bg-gradient-to-bl from-slate-500 to-slate-200 border-2" />
          <div className="md:flex-col text-white">
            <p className="hidden md:flex md:text-base">John Doe</p>
            <div className="hidden md:flex gap-2 text-sm">
              <div className="underline cursor-not-allowed">Settings</div>
              <Link href="/" className="underline">
                Log out
              </Link>
            </div>
          </div>
        </div>
        <SideMenu />
        <MobileSideMenu />
      </div>
    </div>
  );
};
