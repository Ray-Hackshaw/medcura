import { AppointmentDateController } from "@/app/components/AppointmentDateController";
import { BookmarkedAppointments } from "@/app/components/BookmarkedAppointments";
import { CurrentAppointment } from "@/app/components/CurrentAppointment";
import { AppointmentSlot } from "@/app/lib/types";
import { cn } from "@/app/lib/utils";
import {
  Calendar,
  CheckCircleIcon,
  CircleDashed,
  CircleSlash,
  ClockIcon,
} from "lucide-react";

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
    status: "Booked",
    reason: "Flu symptoms",
  },
  {
    time: "8:30",
    name: "Samantha Lee",
    image: undefined,
    status: "Booked",
    reason: "Knee pain",
  },
  {
    time: "10:00",
    name: "Carlos Mendoza",
    image: undefined,
    status: "Booked",
    reason: "Allergy check-up",
  },
  {
    time: "10:30",
    name: "Emily Carter",
    image: undefined,
    status: "Booked",
    reason: undefined,
  },
  {
    time: "1:00",
    name: "David Richardson",
    image: undefined,
    status: "Booked",
    reason: "Routine check-up",
  },
  {
    time: "3:30",
    name: "Sophia Martinez",
    image: undefined,
    status: "Booked",
    reason: undefined,
  },
];

const getScheduleWithPlaceholders = (): AppointmentSlot[] => {
  return times.map((time) => {
    const appointment = appointments.find((slot) => slot.time === time);
    return (
      appointment || {
        time,
        name: "",
        image: undefined,
        status: "Available",
        reason: undefined,
      }
    );
  });
};

const isCurrentCheck = (time: string) => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const [hourStr, minuteStr] = time.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  const isPM = time.toLowerCase().includes("pm");
  if (isPM && hour !== 12) hour += 12;
  if (!isPM && hour === 12) hour = 0;

  console.log(hour, minute);

  return hour === currentHour && minute <= currentMinute;
};

const getCurrentAppointment = (
  slots: AppointmentSlot[]
): AppointmentSlot | undefined => {
  return slots.find((appointment) => {
    return isCurrentCheck(appointment.time);
  });
};

export default async function DashboardPage() {
  const slots = getScheduleWithPlaceholders();
  const currentAppointment = getCurrentAppointment(slots);

  console.log(currentAppointment);

  return (
    <div className='space-y-4 overflow-y-auto px-2 overflow-x-hidden'>
      <AppointmentDateController amount={10} />

      <div className='flex flex-col lg:flex-row gap-4'>
        <CurrentAppointment currentAppointment={currentAppointment} />

        <div className='w-full mx-auto'>
          <div className='border shadow-lg rounded-md overflow-hidden'>
            <div className='flex items-center gap-4 bg-gradient-to-br from-slate-700 to-slate-500 text-white border-b border-black p-2 font-semibold'>
              <Calendar />
              <p>Today&apos;s Appointments</p>
            </div>

            <div className='flex flex-col gap-2 py-4 bg-white md:max-h-[300px] lg:max-h-[320px] xl:max-h-[350px] 2xl:max-h-[400px] overflow-auto'>
              {slots.map((appointment) => (
                <Appointment key={appointment.time} details={appointment} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <BookmarkedAppointments hasBookmarks={false} />
    </div>
  );
}

const Appointment = ({ details }: { details: AppointmentSlot }) => {
  const isCurrent = isCurrentCheck(details.time);
  const isAvailable = details.status === "Available";
  return (
    <div
      className='flex items-center gap-4 px-2 cursor-pointer group'
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
          details.status === "Booked" && "bg-gray-300/50",
          isCurrent &&
            "bg-gradient-to-l from-slate-700 to-slate-500 text-white border-black",
          details.status === "Cancelled" && "bg-gray-300/30",
          isAvailable && "border-dashed"
        )}
      >
        <div
          className={cn(
            "rounded-full w-8 h-8 bg-black/40 border-2 flex-shrink-0",
            isAvailable && "bg-transparent border-2 border-dashed"
          )}
        />
        <div className='w-full'>
          <p
            className={cn(
              isCurrent && "font-bold",
              "truncate max-w-[18ch] text-sm lg:text-base"
            )}
          >
            {details.name}
            {isAvailable && "No booking"}
          </p>
          <p className='text-xs lg:text-sm'>
            {details.reason && !isAvailable && details.reason}
            {!details.reason && !isAvailable && "Undisclosed"}
            {isAvailable && "Time is currently free"}
          </p>
        </div>
        {details.status === "Available" && (
          <CircleDashed className='text-slate-300' />
        )}
        {details.status === "Booked" && !isCurrent && (
          <CheckCircleIcon className='text-green-400' />
        )}
        {isCurrent && <ClockIcon className='text-blue-400' />}
        {details.status === "Cancelled" && (
          <CircleSlash className='text-slate-700' />
        )}
      </div>
    </div>
  );
};
