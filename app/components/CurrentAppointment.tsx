import { ClockIcon, ExternalLink } from "lucide-react";
import { AppointmentSlot } from "../lib/types";
import Link from "next/link";

export const CurrentAppointment = ({
  currentAppointment,
}: {
  currentAppointment?: AppointmentSlot;
}) => {
  return (
    <div className="flex flex-col">
      <div className=" lg:border relative lg:flex h-full lg:bg-white lg:shadow-lg lg:items-center lg:justify-center lg:rounded-lg w-full lg:min-w-[320px] lg:overflow-hidden ">
        <div className="hidden lg:absolute lg:flex w-full lg:top-0 items-center gap-4 bg-gradient-to-br from-slate-700 to-slate-500 text-white border-b border-black p-2 font-semibold">
          <ClockIcon />
          <p>Current Appointment</p>
        </div>
        {!!currentAppointment && (
          <div className="p-2 rounded-md shadow-xl text-white bg-gradient-to-bl from-slate-500 to-slate-800">
            <Link
              className="font-bold underline flex items-center text-xl gap-2 text-center justify-center md:justify-start"
              href={`/appointments/edit`}
            >
              {currentAppointment.name} <ExternalLink />
            </Link>
            <div className="py-2">
              <p>Reason for appointment:</p>
              <p className="italic">
                &apos;{currentAppointment.reason || "Not provided."}&apos;
              </p>
            </div>
            <div className="py-2">
              <p>Regular GP: Dr. Richards</p>
              <p>Last seen: 30/01/2023</p>
            </div>
          </div>
        )}
        {!currentAppointment && (
          <div>
            <p>You have no current appointment.</p>
          </div>
        )}
      </div>
    </div>
  );
};
