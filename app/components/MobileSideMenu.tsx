"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../lib/utils";
import PulsingBackground from "./PulsingBackground";
import { TransitionLink } from "./TransitionLink";
import Image from "next/image";

const menuItems = [
  "Appointments",
  "Patients",
  "Medications",
  "Billing",
  "Staff",
  "Reports",
  "Messages",
];

export const MobileSideMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex md:hidden w-full z-[50] flex-1 items-center justify-end p-4">
      <button
        className={cn("z-[60]", open && "hidden")}
        onClick={() => setOpen(true)}
      >
        <Menu />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/80 z-[40]"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed top-0 left-0 h-screen w-screen flex flex-col text-black z-[50] transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="absolute inset-0 z-[45]">
          <PulsingBackground />
        </div>

        <div className="space-y-2 z-[55] relative">
          <div className="flex w-full items-center justify-between">
            <Image
              src="/logo.png"
              width="200"
              height="200"
              alt="Med Cura white logo"
            />

            <button
              className="w-full justify-end flex p-4"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs px-4 pb-2">
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

        <div className="flex flex-col z-[55] relative text-black">
          {menuItems.map((item) => (
            <Link
              href={`/${item.toLowerCase()}`}
              key={item}
              className="px-4 border-t text-xl last:border-b border-slate-800/40 py-2 md:py-4"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
