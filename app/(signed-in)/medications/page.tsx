"use client";

import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/app/components/DataTable";
import { cn } from "@/lib/utils";
import { X, Search } from "lucide-react";

interface Medication {
  id: number;
  name: string;
  riskAssess: "low" | "med" | "high";
  sideEffects: string[];
  treatmentAreas: string[];
}

const medications: Medication[] = [
  {
    id: 1,
    name: "Ibuprofen",
    riskAssess: "low",
    sideEffects: ["nausea", "dizziness"],
    treatmentAreas: ["pain", "inflammation"],
  },
  {
    id: 2,
    name: "Paracetamol",
    riskAssess: "low",
    sideEffects: ["rash", "liver damage (rare)", "nausea"],
    treatmentAreas: ["fever", "pain"],
  },
  {
    id: 3,
    name: "Aspirin",
    riskAssess: "med",
    sideEffects: ["stomach pain", "bleeding risk"],
    treatmentAreas: ["pain", "fever", "blood thinning"],
  },
  {
    id: 4,
    name: "Amoxicillin",
    riskAssess: "med",
    sideEffects: ["diarrhea", "rash", "nausea"],
    treatmentAreas: ["bacterial infections"],
  },
  {
    id: 5,
    name: "Ciprofloxacin",
    riskAssess: "high",
    sideEffects: ["tendon rupture", "dizziness"],
    treatmentAreas: ["bacterial infections"],
  },
  {
    id: 6,
    name: "Metformin",
    riskAssess: "med",
    sideEffects: ["nausea", "bloating", "diarrhea"],
    treatmentAreas: ["diabetes"],
  },
  {
    id: 7,
    name: "Lisinopril",
    riskAssess: "med",
    sideEffects: ["cough", "dizziness", "low blood pressure"],
    treatmentAreas: ["high blood pressure"],
  },
  {
    id: 8,
    name: "Atorvastatin",
    riskAssess: "med",
    sideEffects: ["muscle pain", "liver damage"],
    treatmentAreas: ["cholesterol management"],
  },
  {
    id: 9,
    name: "Albuterol",
    riskAssess: "low",
    sideEffects: ["tremors", "nervousness"],
    treatmentAreas: ["asthma"],
  },
  {
    id: 10,
    name: "Prednisone",
    riskAssess: "high",
    sideEffects: ["weight gain", "immune suppression"],
    treatmentAreas: ["inflammation", "autoimmune disorders"],
  },
  {
    id: 11,
    name: "Warfarin",
    riskAssess: "high",
    sideEffects: ["bleeding", "bruising"],
    treatmentAreas: ["blood clot prevention"],
  },
  {
    id: 12,
    name: "Omeprazole",
    riskAssess: "low",
    sideEffects: ["headache", "diarrhea"],
    treatmentAreas: ["acid reflux", "ulcers"],
  },
  {
    id: 13,
    name: "Simvastatin",
    riskAssess: "med",
    sideEffects: ["muscle pain", "liver damage"],
    treatmentAreas: ["cholesterol management"],
  },
  {
    id: 14,
    name: "Gabapentin",
    riskAssess: "med",
    sideEffects: ["drowsiness", "dizziness"],
    treatmentAreas: ["nerve pain", "seizures"],
  },
  {
    id: 15,
    name: "Sertraline",
    riskAssess: "med",
    sideEffects: ["nausea", "insomnia"],
    treatmentAreas: ["depression", "anxiety"],
  },
  {
    id: 16,
    name: "Losartan",
    riskAssess: "med",
    sideEffects: ["dizziness", "fatigue"],
    treatmentAreas: ["high blood pressure"],
  },
  {
    id: 17,
    name: "Hydrochlorothiazide",
    riskAssess: "low",
    sideEffects: ["dehydration", "low potassium levels"],
    treatmentAreas: ["high blood pressure"],
  },
  {
    id: 18,
    name: "Doxycycline",
    riskAssess: "med",
    sideEffects: ["sun sensitivity", "nausea"],
    treatmentAreas: ["bacterial infections"],
  },
  {
    id: 19,
    name: "Fluoxetine",
    riskAssess: "med",
    sideEffects: ["nausea", "insomnia"],
    treatmentAreas: ["depression", "anxiety"],
  },
  {
    id: 20,
    name: "Tramadol",
    riskAssess: "high",
    sideEffects: ["drowsiness", "addiction risk"],
    treatmentAreas: ["pain"],
  },
  {
    id: 21,
    name: "Clopidogrel",
    riskAssess: "high",
    sideEffects: ["bleeding", "bruising"],
    treatmentAreas: ["blood clot prevention"],
  },
  {
    id: 22,
    name: "Levothyroxine",
    riskAssess: "low",
    sideEffects: ["heart palpitations", "insomnia"],
    treatmentAreas: ["thyroid disorders"],
  },
  {
    id: 23,
    name: "Furosemide",
    riskAssess: "med",
    sideEffects: ["dehydration", "electrolyte imbalance"],
    treatmentAreas: ["fluid retention", "heart failure"],
  },
  {
    id: 24,
    name: "Montelukast",
    riskAssess: "low",
    sideEffects: ["headache", "dizziness"],
    treatmentAreas: ["asthma", "allergies"],
  },
  {
    id: 25,
    name: "Tamsulosin",
    riskAssess: "med",
    sideEffects: ["dizziness", "low blood pressure"],
    treatmentAreas: ["prostate enlargement"],
  },
  {
    id: 26,
    name: "Metoprolol",
    riskAssess: "med",
    sideEffects: ["fatigue", "low heart rate"],
    treatmentAreas: ["high blood pressure", "heart conditions"],
  },
  {
    id: 27,
    name: "Ranitidine",
    riskAssess: "low",
    sideEffects: ["headache", "nausea"],
    treatmentAreas: ["acid reflux"],
  },
  {
    id: 28,
    name: "Diazepam",
    riskAssess: "high",
    sideEffects: ["drowsiness", "addiction risk"],
    treatmentAreas: ["anxiety", "muscle spasms"],
  },
  {
    id: 29,
    name: "Cetirizine",
    riskAssess: "low",
    sideEffects: ["drowsiness", "dry mouth"],
    treatmentAreas: ["allergies"],
  },
  {
    id: 30,
    name: "Loratadine",
    riskAssess: "low",
    sideEffects: ["drowsiness", "dry mouth"],
    treatmentAreas: ["allergies"],
  },
];

export default function MedicationsPage() {
  const [search, setSearch] = useState("");
  const [activeEffects, setActiveEffects] = useState<string[]>([]);
  const [activeAreas, setActiveAreas] = useState<string[]>([]);

  const columns: ColumnDef<Medication>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "riskAssess",
      header: "Risk",
      cell: ({ row }) => {
        const risk = row.getValue("riskAssess") as Medication["riskAssess"];
        return (
          <div
            className={cn(
              "px-2 py-1 text-xs text-center uppercase font-medium rounded-md",
              risk === "low" && "bg-green-500 text-white",
              risk === "med" && "bg-yellow-500 text-white",
              risk === "high" && "bg-red-500 text-white"
            )}
          >
            {risk.charAt(0).toUpperCase() + risk.slice(1)}
          </div>
        );
      },
    },
    {
      accessorKey: "sideEffects",
      header: "Side Effects",
      cell: ({ row }) => {
        const sideEffects = row.getValue("sideEffects") as string[];
        return (
          <div className="flex flex-wrap gap-1">
            {sideEffects.map((effect, index) => (
              <button
                key={index}
                className={cn(
                  "bg-gray-200 capitalize text-gray-700 px-2 py-1 rounded-md",
                  activeEffects.includes(effect) &&
                    "bg-slate-800 text-white font-bold"
                )}
                onClick={() => toggleEffect(effect)}
              >
                {effect}
              </button>
            ))}
          </div>
        );
      },
    },
    {
      accessorKey: "treatmentAreas",
      header: "Treatment Areas",
      cell: ({ row }) => {
        const treatmentAreas = row.getValue("treatmentAreas") as string[];
        return (
          <div className="flex flex-wrap gap-1">
            {treatmentAreas.map((area, index) => (
              <button
                key={index}
                className={cn(
                  "bg-blue-200 text-blue-700 px-2 py-1 rounded-md capitalize",
                  activeAreas.includes(area) &&
                    "text-white font-bold bg-blue-400"
                )}
                onClick={() => toggleTreatment(area)}
              >
                {area}
              </button>
            ))}
          </div>
        );
      },
    },
  ];

  const toggleEffect = (effect: string) => {
    setActiveEffects((prevEffects) =>
      prevEffects.includes(effect)
        ? prevEffects.filter((e) => e !== effect)
        : [...prevEffects, effect]
    );
  };

  const toggleTreatment = (treatment: string) => {
    setActiveAreas((prevAreas) =>
      prevAreas.includes(treatment)
        ? prevAreas.filter((t) => t !== treatment)
        : [...prevAreas, treatment]
    );
  };

  const filteredMedications = medications
    .filter((med) => {
      const matchesSearch = med.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesEffects =
        activeEffects.length === 0 ||
        med.sideEffects.some((eff) => activeEffects.includes(eff));

      const matchesAreas =
        activeAreas.length === 0 ||
        med.treatmentAreas.some((area) => activeAreas.includes(area));

      return matchesSearch && matchesEffects && matchesAreas;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const hasActiveEffects = activeEffects.length > 0;
  const hasActiveAreas = activeAreas.length > 0;

  const handleResetTags = () => {
    setActiveAreas([]);
    setActiveEffects([]);
  };

  return (
    <div className="w-full mx-auto bg-transparent h-[80vh] overflow-y-auto flex-1 flex flex-col px-2">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center border rounded-md bg-white shadow-sm max-w-md w-full py-1 px-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search medications..."
            className="w-full p-2 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {(hasActiveEffects || hasActiveAreas) && (
          <button className="underline" onClick={handleResetTags}>
            Reset tags
          </button>
        )}
      </div>
      {!hasActiveEffects && !hasActiveAreas && (
        <p className="py-2 mt-2 text-muted-foreground">
          No filters selected. Click on some tags to get started.
        </p>
      )}
      {hasActiveEffects && (
        <div className="flex items-center gap-2 py-2 mt-2">
          Side Effects:
          {activeEffects.map((effect) => (
            <button
              key={effect}
              className=" bg-slate-500 capitalize flex gap-2 items-center text-white px-2 py-1 rounded-md text-sm"
              onClick={() => toggleEffect(effect)}
            >
              {effect} <X />
            </button>
          ))}
        </div>
      )}
      {hasActiveAreas && (
        <div className="flex items-center gap-2 py-2 mt-2">
          Treament Areas:
          {activeAreas.map((area) => (
            <button
              key={area}
              className="bg-blue-500 capitalize flex gap-2 items-center text-white px-2 py-1 rounded-md text-sm"
              onClick={() => toggleTreatment(area)}
            >
              {area} <X />
            </button>
          ))}
        </div>
      )}
      <div className="py-2">
        <DataTable columns={columns} data={filteredMedications} />
      </div>
    </div>
  );
}
