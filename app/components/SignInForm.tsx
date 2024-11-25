"use client";

import { useState } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";

export const SignInForm = () => {
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  const disabled = !password || !email;

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-5 z-[5]">
      <div className="max-w-md space-y-8 w-full h-auto md:h-[400px] border-2 rounded-lg overflow-hidden bg-white/80 p-4 shadow-xl">
        <div className="">
          <h1 className="text-xl md:text-3xl">MedCura</h1>
          <h2 className="text-base md:text-lg text-gray-500">
            Transforming healthcare with every connection.
          </h2>
        </div>
        <div className="flex-col flex w-full space-y-2 text-sm">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email here"
            className="p-3 rounded-md text-black bg-white/60"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
              }
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="p-3 rounded-md text-black bg-white/60"
            placeholder="Enter your password"
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
              }
            }}
          />
        </div>
        <button
          className={cn(
            "flex w-full border-2 rounded-lg justify-center py-2 bg-gray-800 text-white transition-all duration-100",
            disabled && "bg-gray-600 opacity-50"
          )}
          disabled={disabled}
        >
          Continue
        </button>
      </div>
      <div className="w-full max-w-md pt-6 flex flex-col gap-2 text-sm text-white px-2">
        <Link
          href="/reset-password"
          className="underline transition-all duration-100 hover:indent-2 hover:font-bold hover:before:content-['>_']"
        >
          Forgot something?
        </Link>
        <Link
          href="/help"
          className="underline transition-all duration-100 hover:indent-2 hover:font-bold hover:before:content-['>_']"
        >
          Contact an admin
        </Link>
      </div>
    </div>
  );
};
