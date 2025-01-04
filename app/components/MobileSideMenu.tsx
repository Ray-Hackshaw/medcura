"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../lib/utils";
import PulsingBackground from "./PulsingBackground";
import { TransitionLink } from "./TransitionLink";

const menuItems = [
  "Appointments",
  "Patients",
  "Orders",
  "Medications",
  "Labs",
  "Billing",
  "Staff",
  "Reports",
  "Messages",
];

export const MobileSideMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex md:hidden w-full z-[2] flex-1 items-center justify-end p-4">
      <button className="" onClick={() => setOpen(true)}>
        <Menu />
      </button>

      <div
        className={cn(
          "h-screen w-screen absolute top-0 z-[8] bg-black/80 inset-0",
          !open && "hidden"
        )}
      >
        <div>
          <div>
            <div className="p-4 space-y-2">
              <div className="flex w-full items-center justify-between">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-tr from-gray-100 to-gray-400 text-gradient">
                  MedCura
                </p>
                <button
                  className="z-[2] w-full justify-end flex"
                  onClick={() => setOpen(false)}
                >
                  <X />
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-4 h-4 rounded-full bg-white" />
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
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <Link
                  href={`/${item.toLowerCase()}`}
                  key={item}
                  className="px-4 border-t last:border-b border-white/40 py-2 md:py-4"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={cn(!open && "hidden")}>
        <PulsingBackground />
      </div>
    </div>
  );
};
