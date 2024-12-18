"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../lib/utils";
import PulsingBackground from "./PulsingBackground";

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
            <button
              className="z-[2]  w-full justify-end flex p-4"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
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
