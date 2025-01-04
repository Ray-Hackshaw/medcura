import { cn } from "@/app/lib/utils";
import { Calendar, CheckCircleIcon, ClockIcon } from "lucide-react";

interface AppointmentSlot {
  time: string;
  name: string;
  image?: string;
  status: "Upcoming" | "Ongoing" | "Done" | "Cancelled";
  reason?: string;
  flag?: boolean;
}

const slots: AppointmentSlot[] = [
  {
    time: "8:00",
    name: "John Watson",
    image: undefined,
    status: "Done",
    reason: "Sore throat",
  },
  {
    time: "8:30",
    name: "James Fielder",
    image: undefined,
    status: "Done",
    reason: "Broken arm",
  },
  {
    time: "9:30",
    name: "Marissa Verner",
    image: undefined,
    status: "Done",
    reason: undefined,
  },
  {
    time: "10:00",
    name: "Ashley Greene",
    image: undefined,
    status: "Ongoing",
    reason: "Vampirism",
  },
  {
    time: "10:30",
    name: "Jon Hopkins",
    image: undefined,
    status: "Upcoming",
    reason: undefined,
  },
];

export default async function DashboardPage() {
  return (
    <div className="p-4 max-w-lg">
      <div className="border border-black rounded-md overflow-hidden">
        <div className="flex items-center gap-4 bg-black/40 text-white border-b border-black p-2 font-semibold">
          <Calendar />
          <p>Today&apos;s Appointments</p>
        </div>

        <div className="flex flex-col gap-2 py-4 bg-white">
          {slots.map((appointment) => (
            <Appointment key={appointment.time} details={appointment} />
          ))}
        </div>
      </div>
    </div>
  );
}
const Appointment = ({ details }: { details: AppointmentSlot }) => {
  const isCurrent = details.status === "Ongoing";
  return (
    <div
      className="flex items-center gap-4 px-2 cursor-pointer group"
      key={details.time}
    >
      <p className="min-w-[40px] group-hover:font-semibold transition-all duration-200">
        {details.time}
      </p>
      <div
        className={cn(
          "border-2 rounded-md p-2 flex items-center gap-2 w-full group-hover:border-black group-hover:bg-gray-300/10 transition-all duration-200",
          details.status === "Done" && "bg-gray-300/50",
          details.status === "Upcoming" && "bg-gray-300/30"
        )}
      >
        <div className="rounded-full w-8 h-8 bg-black/40 border-2 flex-shrink-0" />
        <div className="w-full">
          <p className={cn(isCurrent && "font-bold", "truncate max-w-[18ch]")}>
            {details.name}
          </p>
          <p className="text-sm">{details.reason ?? "Undisclosed"}</p>
        </div>
        {details.status === "Done" && (
          <CheckCircleIcon className="text-green-400" />
        )}
        {details.status === "Ongoing" && (
          <ClockIcon className="text-blue-400" />
        )}
      </div>
    </div>
  );
};
