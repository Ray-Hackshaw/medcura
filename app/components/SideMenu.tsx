"use client";

import Link from "next/link";

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

export const SideMenu = () => {
  return (
    <div className="w-full py-1 hidden md:flex md:flex-col md:flex-1">
      {menuItems.map((item) => (
        <Link
          href={`/${item.toLowerCase()}`}
          key={item}
          className="hover:font-bold transition-all px-4 md:text-xl hover:indent-2 hover:bg-white/20 duration-200 border-t last:border-b border-black/40 py-2 md:py-4"
        >
          {item}
        </Link>
      ))}
    </div>
  );
};
