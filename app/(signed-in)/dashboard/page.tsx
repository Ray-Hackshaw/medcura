import LiveTimer from "@/app/components/LiveTime";
import { Calendar, File, Mail, User } from "lucide-react";
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
    icon: <Calendar />,
    description: "8",
  },
  {
    title: "New patients",
    href: "/patients",
    icon: <User />,
    description: "3",
  },
  {
    title: "New messages",
    href: "/messages",
    icon: <Mail />,
    description: "2",
  },
  {
    title: "Reports pending",
    href: "/reports",
    icon: <File />,
    description: "0",
  },
];

export default async function DashboardPage() {
  return (
    <div className="w-full mx-auto h-full flex-1 items-center flex flex-col gap-4 md:gap-0 md:justify-evenly md:py-0 py-8">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-tr from-gray-500 to-gray-800 text-gradient">
          MedCura
        </h1>
        <p className="text-lg md:text-xl">Welcome back.</p>
        <LiveTimer />
      </div>
      <div>
        <p className="font-semibold md:text-2xl py-2">Your day at a glance:</p>
        <div className="flex flex-col lg:grid gap-4 grid-cols-2">
          {quickStartItems.map((item) => (
            <Link
              href={item.href ?? ""}
              key={item.title}
              className="group p-4 md:min-w-[250px] border-2 rounded-md bg-white/70 transition-all duration-200 shadow-md hover:shadow-xl"
            >
              <div className="w-full items-center flex justify-between">
                <p className="text-base md:text-2xl group-hover:font-bold font-semibold transition-all duration-200">
                  {item.title}
                </p>
                {item.icon}
              </div>

              <p className="md:text-4xl text-lg">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
