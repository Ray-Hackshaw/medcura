import { ClockIcon } from "lucide-react";

export const CurrentAppointment = ({
  nextAppointmentTime,
}: {
  nextAppointmentTime: string;
}) => {
  return (
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
  );
};
