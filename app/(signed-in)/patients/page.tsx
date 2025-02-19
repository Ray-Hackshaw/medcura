"use client";

import { patientList } from "@/app/lib/patients";
import { cn } from "@/app/lib/utils";
import { CircleUser, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function PatientsPage() {
  const [search, setSearch] = useState("");

  const filteredPatients = patientList.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full mx-auto max-h-[100vh] bg-transparent pb-40 overflow-y-auto flex-1 flex flex-col gap-4 px-6">
      <div className="flex items-center border rounded-md bg-white shadow-sm max-w-md w-full py-1 px-2">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search patients..."
          className="w-full p-2 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
        {filteredPatients.map((patient) => (
          <Link
            key={patient.name}
            href={`/patients/${patient.id}`}
            className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center"
          >
            <div className="w-16 h-16 flex items-center justify-center relative bg-slate-100 border rounded-full mb-3">
              <CircleUser className="w-12 h-12 text-slate-500" />
            </div>
            <h2 className="text-lg font-semibold">{patient.name}</h2>
            <div className="py-2">
              <p className="text-xs w-full text-left text-gray-600">
                Last Seen: {patient.lastSeenDate.toDateString()}
              </p>
              <p className="text-xs w-full text-left text-gray-600">
                Reason: {patient.lastSeenReason}
              </p>
              <p className="text-left w-full text-xs text-gray-600">
                Follow-Up: {patient.followUpScheduled ? "Yes" : "No"}
              </p>
            </div>

            <p
              className={cn(
                "text-sm font-semibold text-green-600",
                patient.careStatus === "high risk" && "text-red-600",
                patient.careStatus === "monitor" && "text-yellow-600"
              )}
            >
              {patient.careStatus.charAt(0).toUpperCase() +
                patient.careStatus.slice(1)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
