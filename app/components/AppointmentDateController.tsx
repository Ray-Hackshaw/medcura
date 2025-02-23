"use client";

import { ChevronLeft, ChevronRight, Plus, Edit } from "lucide-react";
import { useState } from "react";
import { format, addDays, subDays } from "date-fns";
import LiveTimer from "./LiveTime";

export const AppointmentDateController = ({ amount }: { amount: number }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeDate = (days: number) => {
    setSelectedDate((prev) => (days > 0 ? addDays(prev, 1) : subDays(prev, 1)));
  };

  return (
    <div className="relative space-y-2">
      <p className="font-bold">Today, you have {amount} bookings.</p>
      <div className="w-full">
        <LiveTimer timeOnly={true} />
      </div>
      <div className="w-full flex-col md:flex-row flex items-center justify-between">
        <div className="flex items-center justify-center gap-4 font-semibold text-sm py-2 lg:text-lg">
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

        <div className="flex gap-2 items-center">
          <button className="hover:shadow-xl transition-all duration-200 shadow-sm p-2 w-fit whitespace-nowrap text-white bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex gap-2 items-center">
            <p>Add new</p>
            <Plus />
          </button>
          <button className="hover:shadow-xl transition-all duration-200 shadow-sm p-2 w-fit whitespace-nowrap rounded-lg text-white bg-gradient-to-br from-slate-700 to-slate-600 flex gap-2 items-center">
            <p>Edit existing</p>
            <Edit />
          </button>
        </div>
      </div>
    </div>
  );
};
