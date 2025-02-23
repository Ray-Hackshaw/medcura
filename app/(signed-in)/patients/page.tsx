"use client";

import { PatientCard } from "@/app/components/Patient";
import { patientList } from "@/app/lib/patients";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import React, { useState } from "react";

export default function PatientsPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredPatients = patientList
    .filter((patient) =>
      patient.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "status") {
        return a.careStatus.localeCompare(b.careStatus);
      } else if (sortBy === "lastSeen") {
        return b.lastSeenDate.getTime() - a.lastSeenDate.getTime();
      }
      return 0;
    });

  return (
    <div className="w-full mx-auto bg-transparent overflow-y-auto flex-1 flex flex-col gap-4 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
        <div className="flex items-center border rounded-md bg-white shadow-sm max-w-md w-full py-1 px-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full p-2 outline-none cursor-pointer"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 items-center">
          <p>Sort by:</p>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="status">Status</SelectItem>
              <SelectItem value="lastSeen">Last Seen</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[65vh] md:max-h-none overflow-y-auto md:h-[70vh]">
        {filteredPatients.map((patient) => (
          <PatientCard key={patient.id} {...patient} />
        ))}
      </div>
    </div>
  );
}
