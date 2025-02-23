import { CircleUser } from "lucide-react";
import { cn } from "../lib/utils";
import Link from "next/link";
import { Patient } from "../lib/patients";

export const PatientCard = ({
  name,
  id,
  lastSeenDate,
  lastSeenReason,
  careStatus,
  followUpScheduled,
}: Patient) => {
  return (
    <Link
      key={name}
      href={`/patients/${id}`}
      className="p-4 border rounded-lg h-[250px] hover:shadow-xl hover:opacity-90 transition-all duration-150 shadow-md bg-gradient-to-br from-slate-700 to-slate-900 text-white flex flex-col items-center"
    >
      <div className="w-16 h-16 flex items-center justify-center relative border rounded-full mb-3">
        <CircleUser className="w-12 h-12 text-slate-200" />
      </div>
      <p className="text-lg font-semibold">{name}</p>
      <div className="py-2 text-left">
        <p className="text-xs w-full">
          Last Seen: {lastSeenDate.toDateString()}
        </p>
        <p className="text-xs w-full">Reason: {lastSeenReason}</p>
        <p className="w-full text-xs">
          Follow-Up: {followUpScheduled ? "Yes" : "No"}
        </p>
      </div>

      <p
        className={cn(
          "text-sm text-center font-semibold text-green-600",
          careStatus === "high risk" && "text-red-600",
          careStatus === "monitor" && "text-yellow-600"
        )}
      >
        {careStatus.charAt(0).toUpperCase() + careStatus.slice(1)}
      </p>
    </Link>
  );
};
