import { MobileSideMenu } from "./MobileSideMenu";
import { SideMenu } from "./SideMenu";
import { TransitionLink } from "./TransitionLink";

export const SideBar = () => {
  return (
    <div className="z-[20] relative md:max-w-[200px] lg:max-w-[300px] w-full overflow-hidden text-white ">
      <div className="flex md:flex-col md:gap-4 w-full bg-black/60 md:h-full">
        <div className="flex items-center gap-2 p-4 md:flex-col">
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-tr from-gray-100 to-gray-400 text-gradient">
            MedCura
          </p>
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
