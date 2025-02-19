"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { User } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { patientList } from "@/app/lib/patients";

export default function PatientPage() {
  const searchParams: { id: string } = useParams();
  const patient = patientList.find((p) => p.id === +searchParams.id);
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  if (!patient) {
    return <p className="text-center text-red-500">Patient not found.</p>;
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessageSent(true);
      setTimeout(() => {
        setMessage("");
        setMessageSent(false);
      }, 2000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-md bg-white mt-10">
      <div className="flex flex-col items-center mb-4">
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
            patient.careStatus === "high risk" && "text-red-600",
            patient.careStatus === "monitor" && "text-yellow-600"
          )}
        >
          {patient.careStatus.charAt(0).toUpperCase() +
            patient.careStatus.slice(1)}
        </p>
      </div>

      <div className="mt-6 border-t pt-4">
        <label className="block font-semibold mb-2">Send a message:</label>
        <textarea
          className="w-full p-2 border rounded-md"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleSendMessage}
        >
          Send
        </button>
        {messageSent && <p className="text-green-600 mt-2">Message sent!</p>}
      </div>
    </div>
  );
}
