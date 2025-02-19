import { AppointmentDateController } from "@/app/components/AppointmentDateController";
import { cn } from "@/app/lib/utils";
import {
  Bookmark,
  Calendar,
  CheckCircleIcon,
  CircleDashed,
  CircleSlash,
  ClockIcon,
} from "lucide-react";

interface AppointmentSlot {
  time: string;
  name?: string;
  image?: string;
  status: "Available" | "Upcoming" | "Ongoing" | "Done" | "Cancelled";
  reason?: string;
  flag?: boolean;
}

// List of all available times
const times = [
  "8:00",
  "8:30",
  "9:30",
  "10:00",
  "10:30",
  "11:30",
  "1:00",
  "1:30",
  "2:30",
  "3:30",
  "4:00",
];

// Appointments with shuffled names and some removed slots
const appointments: AppointmentSlot[] = [
  {
    time: "8:00",
    name: "Michael Lawson",
    image: undefined,
    status: "Done",
    reason: "Flu symptoms",
  },
  {
    time: "8:30",
    name: "Samantha Lee",
    image: undefined,
    status: "Done",
    reason: "Knee pain",
  },
  {
    time: "10:00",
    name: "Carlos Mendoza",
    image: undefined,
    status: "Ongoing",
    reason: "Allergy check-up",
  },
  {
    time: "10:30",
    name: "Emily Carter",
    image: undefined,
    status: "Upcoming",
    reason: undefined,
  },
  {
    time: "1:00",
    name: "David Richardson",
    image: undefined,
    status: "Upcoming",
    reason: "Routine check-up",
  },
  {
    time: "3:30",
    name: "Sophia Martinez",
    image: undefined,
    status: "Upcoming",
    reason: undefined,
  },
];

const getScheduleWithPlaceholders = (): AppointmentSlot[] => {
  return times.map((time) => {
    const appointment = appointments.find((slot) => slot.time === time);
    return (
      appointment || {
        time,
        name: undefined,
        image: undefined,
        status: "Available",
        reason: undefined,
      }
    );
  });
};

export default async function DashboardPage() {
  const nextAppointmentTime = "8:00AM";

  const bookmarkedAppointments = [];

  const hasBookmarks = bookmarkedAppointments.length > 0;

  const amount = 10;

  const slots = getScheduleWithPlaceholders();

  return (
    <div className="p-4 space-y-4">
      <AppointmentDateController amount={amount} />

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-4">
          <div className="lg:border relative lg:flex h-full lg:bg-white lg:shadow-lg lg:items-center lg:justify-center lg:rounded-lg w-full min-w-[320px] lg:overflow-hidden ">
            <div className="hidden lg:absolute lg:flex w-full lg:top-0 items-center gap-4 bg-gradient-to-br from-slate-700 to-slate-500 text-white border-b border-black p-2 font-semibold">
              <ClockIcon />
              <p>Current Appointment</p>
            </div>
            <div className="p-2 lg:flex-col lg:w-full lg:text-center">
              <p>You have no current appointment.</p>
              <p>
                Your next appointment is at{" "}
                <span className="font-semibold">{nextAppointmentTime}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto">
          <div className="border shadow-lg rounded-md overflow-hidden">
            <div className="flex items-center gap-4 bg-gradient-to-br from-slate-700 to-slate-500 text-white border-b border-black p-2 font-semibold">
              <Calendar />
              <p>Today&apos;s Appointments</p>
            </div>

            <div className="flex flex-col gap-2 py-4 bg-white md:max-h-[300px] lg:max-h-[320px] xl:max-h-[350px] 2xl:max-h-[400px] overflow-auto">
              {slots.map((appointment) => (
                <Appointment key={appointment.time} details={appointment} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border shadow-lg rounded-md w-full mx-auto lg:max-w-full overflow-hidden">
        <div className="flex items-center gap-4 bg-gradient-to-br from-slate-700 to-slate-500 text-white border-b border-black p-2 font-semibold">
          <Bookmark />
          <p>Bookmarked Appointments</p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row p-2 bg-white">
          {!hasBookmarks && (
            <div className="text-sm md:text-base text-center w-full ">
              You have not bookmarked any appointments.
              <p>
                Click on an appointment and click on the{" "}
                <span className="inline-flex align-middle">
                  <Bookmark />
                </span>{" "}
                icon to flag it for later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Appointment = ({ details }: { details: AppointmentSlot }) => {
  const isCurrent = details.status === "Ongoing";
  const isAvailable = details.status === "Available";
  return (
    <div
      className="flex items-center gap-4 px-2 cursor-pointer group"
      key={details.time}
    >
      <p
        className={cn(
          isCurrent && "font-semibold",
          "min-w-[40px] group-hover:font-semibold transition-all duration-200"
        )}
      >
        {details.time}
      </p>
      <div
        className={cn(
          "border-2 rounded-md p-2 flex items-center gap-2 w-full group-hover:border-black group-hover:bg-gray-300/10 transition-all duration-200",
          details.status === "Done" && "bg-gray-300/50",
          isCurrent &&
            "bg-gradient-to-l from-slate-700 to-slate-500 text-white border-black",
          details.status === "Upcoming" && "bg-gray-300/30",
          isAvailable && "border-dashed"
        )}
      >
        <div
          className={cn(
            "rounded-full w-8 h-8 bg-black/40 border-2 flex-shrink-0",
            isAvailable && "bg-transparent border-2 border-dashed"
          )}
        />
        <div className="w-full">
          <p
            className={cn(
              isCurrent && "font-bold",
              "truncate max-w-[18ch] text-sm lg:text-base"
            )}
          >
            {details.name}
            {isAvailable && "No booking"}
          </p>
          <p className="text-xs lg:text-sm">
            {details.reason && !isAvailable && details.reason}
            {!details.reason && !isAvailable && "Undisclosed"}
            {isAvailable && "Time is currently free"}
          </p>
        </div>
        {details.status === "Available" && (
          <CircleDashed className="text-slate-300" />
        )}
        {details.status === "Done" && (
          <CheckCircleIcon className="text-green-400" />
        )}
        {details.status === "Ongoing" && (
          <ClockIcon className="text-blue-400" />
        )}
        {details.status === "Upcoming" && (
          <CircleSlash className="text-slate-700" />
        )}
      </div>
    </div>
  );
};
