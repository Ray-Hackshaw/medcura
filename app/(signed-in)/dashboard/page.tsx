import LiveTimer from "@/app/components/LiveTime";
import { cn } from "@/app/lib/utils";
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
    title: "Patients",
    href: "/patients",
    icon: <User />,
    description: "3",
  },
  {
    title: "Messages",
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

const quickLinks = [
  { label: "About MedCura", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact an Admin", href: "/contact-admin" },
  { label: "Report a Problem", href: "/report" },
  { label: "Security Statement", href: "/security" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Customer Support", href: "/support" },
];

const QuickLinks = () => (
  <div className="w-full bg-white shadow-xl p-1 rounded-md border border-slate-200 overflow-hidden">
    <p className="px-4 py-2 text-lg md:text-xl text-center font-semibold">
      Resources
    </p>
    <div className="grid grid-cols-2 gap-2 p-4 text-xs font-semibold text-gray-700 lg:grid-cols-3">
      {quickLinks.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className="uppercase underline hover:text-slate-500 transition-all duration-200 hover:font-bold"
          target="_blank"
        >
          {label}
        </Link>
      ))}
    </div>
  </div>
);

export default async function DashboardPage() {
  return (
    <div className="w-full mx-auto h-full py-4 flex-1 px-2 lg:px-0 items-center flex flex-col gap-4 md:gap-0 md:justify-between md:py-0">
      <div className="text-center w-full bg-white shadow-md p-1 lg:p-4 rounded-md border-slate-200 border overflow-hidden">
        <p className="text-lg md:text-xl font-bold">Welcome back.</p>
        <LiveTimer />
      </div>
      <div className="w-full bg-white shadow-xl p-1 lg:p-4 rounded-md border-slate-200 border overflow-hidden">
        <p className="font-semibold text-xl md:text-2xl py-4 text-center">
          Your day at a glance:
        </p>
        <div className="grid gap-1 grid-cols-2 lg:gap-4">
          {quickStartItems.map((item, id) => (
            <Link
              href={item.href ?? ""}
              key={item.title}
              className={cn(
                "group p-4 text-center border shadow-lg rounded-md bg-gradient-to-tr from-slate-500 to-slate-700 text-white transition-all duration-200 hover:shadow-2xl hover:border-black",
                id === 1 && "bg-gradient-to-br",
                id === 2 && "bg-gradient-to-tl",
                id === 3 && "bg-gradient-to-bl"
              )}
            >
              <div className="w-full items-center flex justify-between">
                <p className="text-sm w-full md:text-2xl group-hover:font-bold font-semibold transition-all duration-200">
                  {item.title}
                </p>
              </div>

              <p className="md:text-4xl flex items-center py-2 gap-2 justify-center text-lg">
                {" "}
                {item.icon} {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <QuickLinks />

      <div className="absolute bottom-0">© MedCura - 2025</div>
    </div>
  );
}
