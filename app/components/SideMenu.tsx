"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const menuItems = [
  "Appointments",
  "Patients",
  "Medications",
  // "Billing",
  "Staff",
  "Reports",
  "Messages",
];

export const SideMenu = () => {
  const path = usePathname();
  return (
    <div className="w-full py-1 hidden md:flex md:flex-col md:flex-1">
      {menuItems.map((item) => (
        <Link
          href={`/${item.toLowerCase()}`}
          key={item}
          className={cn(
            path.includes(item.toLowerCase()) &&
              "font-bold bg-white/20 indent-2",
            "hover:font-bold transition-all px-4 md:text-xl hover:indent-2 hover:bg-white/20 duration-200 border-t last:border-b border-white/20 py-2 md:py-4"
          )}
        >
          {item}
        </Link>
      ))}
    </div>
  );
};
