import Link from "next/link";
import { MobileSideMenu } from "./MobileSideMenu";
import { SideMenu } from "./SideMenu";
import { TransitionLink } from "./TransitionLink";
import Image from "next/image";

export const SideBar = () => {
  return (
    <div className="z-[20] relative md:max-w-[200px] lg:max-w-[300px] w-full overflow-hidden text-white ">
      <div className="flex md:flex-col md:gap-4 w-full bg-gradient-to-br from-slate-700 to-slate-900 md:h-full">
        <div className="flex items-center gap-2 md:flex-col">
          <Link href="/dashboard">
            <Image
              src="/logo-white.png"
              width="200"
              height="200"
              alt="Med Cura white logo"
            />
          </Link>
          <div className="flex gap-2 items-center">
            <div className="hidden md:block w-full min-w-4 md:w-8 md:h-8 rounded-full bg-black border-2" />
            <div className="md:flex-col">
              <p className="text-gray-100 hidden md:visible md:text-base">
                Welcome, user
              </p>
              <div className="hidden md:block text-sm">
                <div className="underline cursor-not-allowed">Settings</div>
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
        <SideMenu />
        <MobileSideMenu />
      </div>
    </div>
  );
};
