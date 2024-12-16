import LiveTimer from "@/app/components/LiveTime";
import Link from "next/link";
import React from "react";

interface OverviewItem {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
}

const quickStartItems: OverviewItem[] = [
  {
    title: "Appointments",
    href: "/appointments",
    icon: "",
    description: "8",
  },
  {
    title: "New patients",
    href: "/patients",
    icon: "",
    description: "3",
  },
  {
    title: "New messages",
    href: "/messages",
    icon: "",
    description: "2",
  },
  {
    title: "Reports pending",
    href: "/reports",
    icon: "",
    description: "0",
  },
];

export default async function DashboardPage() {
  return (
    <div className="w-full mx-auto h-full flex-1 items-center flex flex-col justify-evenly">
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-tr from-gray-500 to-gray-800 text-gradient">
          MedCura
        </h1>
        <p className="text-xl">Welcome back.</p>
        <LiveTimer />
      </div>
      <div>
        <p className="font-semibold text-2xl py-2">Your day at a glance:</p>
        <div className="flex flex-col lg:grid gap-4 grid-cols-2">
          {quickStartItems.map((item) => (
            <Link
              href={item.href ?? ""}
              key={item.title}
              className="group p-4 min-w-[250px] border-2 rounded-md bg-white/70 transition-all duration-200 shadow-md hover:shadow-xl"
            >
              <p className="text-2xl group-hover:font-semibold transition-all duration-200">
                {item.title}
              </p>
              <p className="text-4xl">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
