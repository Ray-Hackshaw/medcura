"use client";

import { ChevronLeft, ChevronRight, Plus, Edit } from "lucide-react";
import { useState } from "react";
import { format, addDays, subDays } from "date-fns";

export const AppointmentDateController = ({ amount }: { amount: number }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeDate = (days: number) => {
    setSelectedDate((prev) => (days > 0 ? addDays(prev, 1) : subDays(prev, 1)));
  };

  return (
    <div className="relative h-full space-y-2">
      <p className="font-bold">Today, you have {amount} bookings.</p>

      <div className="flex items-center justify-center gap-4 font-semibold">
        <button
          onClick={() => changeDate(-1)}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <ChevronLeft />
        </button>
        <span>{format(selectedDate, "EEEE, MMM d, yyyy")}</span>
        <button
          onClick={() => changeDate(1)}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <ChevronRight />
        </button>
      </div>

      <button className="border shadow-sm p-2 text-white bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex gap-2 items-center">
        <p>Add new</p>
        <Plus />
      </button>
      <button className="border shadow-sm p-2 rounded-lg text-white bg-gradient-to-br from-slate-700 to-slate-600 flex gap-2 items-center">
        <p>Edit existing</p>
        <Edit />
      </button>
    </div>
  );
};
