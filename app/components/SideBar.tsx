import { SideMenu } from "./SideMenu";
import { TransitionLink } from "./TransitionLink";

export const SideBar = () => {
  return (
    <div className="md:max-w-[300px] w-full overflow-hidden bg-black/60 text-white ">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 p-4 ">
          <div className="w-full max-w-4 md:max-w-8 aspect-square rounded-full bg-black border-2" />
          <div>
            <p className="text-gray-100 text-sm md:text-base">Welcome, user</p>
            <div className="md:flex items-center gap-2 text-sm">
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
        <SideMenu />
      </div>
    </div>
  );
};
