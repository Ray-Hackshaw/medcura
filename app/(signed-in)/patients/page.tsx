"use client";

import { cn } from "@/app/lib/utils";
import { User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface Patient {
  id: number;
  name: string;
  lastSeenDate: Date;
  lastSeenReason: string;
  followUpScheduled: boolean;
  careStatus: "standard" | "monitor" | "urgent";
}

export const patientList: Patient[] = [
  {
    id: 1,
    name: "Liam Carter",
    lastSeenDate: new Date("2024-02-10"),
    lastSeenReason: "Routine checkup",
    followUpScheduled: false,
    careStatus: "standard",
  },
  {
    id: 2,
    name: "Sophia Reynolds",
    lastSeenDate: new Date("2024-02-05"),
    lastSeenReason: "Flu symptoms",
    followUpScheduled: true,
    careStatus: "monitor",
  },
  {
    id: 3,
    name: "Ethan Bennett",
    lastSeenDate: new Date("2024-02-12"),
    lastSeenReason: "Post-surgery follow-up",
    followUpScheduled: true,
    careStatus: "urgent",
  },
  {
    id: 4,
    name: "Olivia Hayes",
    lastSeenDate: new Date("2024-01-30"),
    lastSeenReason: "Blood pressure check",
    followUpScheduled: false,
    careStatus: "standard",
  },
  {
    id: 5,
    name: "Mason Brooks",
    lastSeenDate: new Date("2024-02-08"),
    lastSeenReason: "Annual physical",
    followUpScheduled: false,
    careStatus: "standard",
  },
  {
    id: 6,
    name: "Ava Mitchell",
    lastSeenDate: new Date("2024-02-14"),
    lastSeenReason: "Diabetes management",
    followUpScheduled: true,
    careStatus: "monitor",
  },
  {
    id: 7,
    name: "Lucas Foster",
    lastSeenDate: new Date("2024-02-01"),
    lastSeenReason: "Neurology consult",
    followUpScheduled: true,
    careStatus: "urgent",
  },
  {
    id: 8,
    name: "Harper Collins",
    lastSeenDate: new Date("2024-02-11"),
    lastSeenReason: "Medication review",
    followUpScheduled: false,
    careStatus: "monitor",
  },
  {
    id: 9,
    name: "Noah Griffin",
    lastSeenDate: new Date("2024-02-03"),
    lastSeenReason: "Stress test",
    followUpScheduled: false,
    careStatus: "standard",
  },
  {
    id: 10,
    name: "Emma Sullivan",
    lastSeenDate: new Date("2024-02-09"),
    lastSeenReason: "Physical therapy",
    followUpScheduled: true,
    careStatus: "monitor",
  },
  {
    id: 11,
    name: "James Parker",
    lastSeenDate: new Date("2024-02-07"),
    lastSeenReason: "Fracture follow-up",
    followUpScheduled: true,
    careStatus: "urgent",
  },
  {
    id: 12,
    name: "Isabella Reed",
    lastSeenDate: new Date("2024-02-06"),
    lastSeenReason: "Vision screening",
    followUpScheduled: false,
    careStatus: "standard",
  },
  {
    id: 13,
    name: "Benjamin Cooper",
    lastSeenDate: new Date("2024-02-02"),
    lastSeenReason: "Allergy testing",
    followUpScheduled: true,
    careStatus: "monitor",
  },
  {
    id: 14,
    name: "Charlotte Edwards",
    lastSeenDate: new Date("2024-01-28"),
    lastSeenReason: "Dermatology consult",
    followUpScheduled: false,
    careStatus: "standard",
  },
  {
    id: 15,
    name: "William Turner",
    lastSeenDate: new Date("2024-02-13"),
    lastSeenReason: "Work-related stress",
    followUpScheduled: true,
    careStatus: "urgent",
  },
  {
    id: 16,
    name: "Amelia Ross",
    lastSeenDate: new Date("2024-02-04"),
    lastSeenReason: "Sleep disorder consultation",
    followUpScheduled: true,
    careStatus: "monitor",
  },
  {
    id: 17,
    name: "Henry Hughes",
    lastSeenDate: new Date("2024-02-10"),
    lastSeenReason: "Cardiac assessment",
    followUpScheduled: false,
    careStatus: "urgent",
  },
  {
    id: 18,
    name: "Mia Price",
    lastSeenDate: new Date("2024-02-15"),
    lastSeenReason: "Pregnancy checkup",
    followUpScheduled: true,
    careStatus: "monitor",
  },
  {
    id: 19,
    name: "Alexander Rivera",
    lastSeenDate: new Date("2024-02-12"),
    lastSeenReason: "Hearing test",
    followUpScheduled: false,
    careStatus: "standard",
  },
];

export default function PatientsPage() {
  const [search, setSearch] = useState("");

  const filteredPatients = patientList.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full mx-auto max-h-[100vh] bg-transparent pb-40 overflow-y-auto flex-1 flex flex-col gap-4 px-6">
      <input
        type="text"
        placeholder="Search patients..."
        className="w-full max-w-md p-2 border rounded-md shadow-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
        {filteredPatients.map((patient) => (
          <Link
            key={patient.name}
            href={`/patients/${patient.id}`}
            className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center"
          >
            <div className="w-16 h-16 flex items-center justify-center relative bg-gray-300 rounded-full mb-3">
              <User className="w-12 h-12 text-black/20" />
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
                patient.careStatus === "urgent" && "text-red-600",
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
