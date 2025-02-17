import { cn } from "@/app/lib/utils";
import {
  Bookmark,
  Calendar,
  CheckCircleIcon,
  ClockIcon,
  Edit,
  Plus,
} from "lucide-react";

interface AppointmentSlot {
  time: string;
  name: string;
  image?: string;
  status: "Upcoming" | "Ongoing" | "Done" | "Cancelled";
  reason?: string;
  flag?: boolean;
}

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
  {
    time: "11:30",
    name: "Jon Hopkins",
    image: undefined,
    status: "Upcoming",
    reason: undefined,
  },
  {
    time: "1:00",
    name: "Jon Hopkins",
    image: undefined,
    status: "Upcoming",
    reason: undefined,
  },
  {
    time: "1:30",
    name: "Jon Hopkins",
    image: undefined,
    status: "Upcoming",
    reason: undefined,
  },
  {
    time: "2:30",
    name: "Jon Hopkins",
    image: undefined,
    status: "Upcoming",
    reason: undefined,
  },
  {
    time: "3:30",
    name: "Jon Hopkins",
    image: undefined,
    status: "Upcoming",
    reason: undefined,
  },
  {
    time: "4:00",
    name: "Jon Hopkins",
    image: undefined,
    status: "Upcoming",
    reason: undefined,
  },
];

export default async function DashboardPage() {
  const nextAppointmentTime = "8:00AM";

  const bookmarkedAppointments = [];

  const hasBookmarks = bookmarkedAppointments.length > 0;

  const amount = 10;

  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-4">
          <div className="relative h-full space-y-2">
            <p>You have {amount} bookings today.</p>
            <button className="border shadow-sm p-2 text-white bg-black/90 rounded-lg flex gap-2 items-center">
              <p>Add new</p>
              <Plus />
            </button>
            <button className="border shadow-sm p-2 rounded-lg text-white bg-black/90 flex gap-2 items-center">
              <p>Edit existing</p>
              <Edit />
            </button>
          </div>
          <div className="lg:border relative lg:flex h-full lg:bg-white lg:shadow-lg lg:items-center lg:justify-center lg:rounded-lg w-full min-w-[320px] lg:overflow-hidden ">
            <div className="hidden lg:absolute lg:flex w-full lg:top-0 items-center gap-4 bg-black/80 text-white border-b border-black p-2 font-semibold">
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
            <div className="flex items-center gap-4 bg-black/80 text-white border-b border-black p-2 font-semibold">
              <Calendar />
              <p>Today&apos;s Appointments</p>
            </div>

            <div className="flex flex-col gap-2 py-4 bg-white max-h-[500px] overflow-auto">
              {times.map((time) => {
                const appointment = slots.find((x) => x.time === time);

                if (!appointment) {
                  return <div key={time}></div>;
                }
                return <Appointment key={time} details={appointment} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border shadow-lg rounded-md w-full mx-auto lg:max-w-full overflow-hidden">
        <div className="flex items-center gap-4 bg-black/80  text-white border-b border-black p-2 font-semibold">
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
          <p
            className={cn(
              isCurrent && "font-bold",
              "truncate max-w-[18ch] text-sm lg:text-base"
            )}
          >
            {details.name}
          </p>
          <p className="text-xs lg:text-sm">
            {details.reason ?? "Undisclosed"}
          </p>
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
