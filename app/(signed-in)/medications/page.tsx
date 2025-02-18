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
    title: "Reports",
    href: "/reports",
    icon: <File />,
    description: "0",
  },
];

export default async function PatientsPage() {
  return (
    <div className="w-full mx-auto h-full flex-1 items-center flex flex-col gap-4 md:gap-0 md:justify-evenly md:py-0 py-8">
      <div className="text-center">
        <p className="text-lg md:text-xl">Welcome back.</p>
        <LiveTimer />
      </div>
      <div className="w-full border-2 border-black">
        <p className="font-semibold md:text-2xl py-2">Your day at a glance:</p>
        <div className="flex flex-col lg:grid gap-4 grid-cols-2">
          {quickStartItems.map((item) => (
            <Link
              href={item.href ?? ""}
              key={item.title}
              className="group p-4 w-full md:min-w-[350px] border border-black/30 rounded-md bg-white/70 transition-all duration-200 shadow-md hover:shadow-xl"
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
