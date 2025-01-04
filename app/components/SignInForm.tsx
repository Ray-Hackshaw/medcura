"use client";

import { useState } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import { TransitionLink } from "./TransitionLink";

export const SignInForm = () => {
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  const disabled = !password || !email;

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center px-5 z-[5]"
      id="sign-in-form"
    >
      <div className="max-w-md space-y-8 w-full h-auto md:h-[400px] border-2 rounded-lg overflow-hidden bg-white/80 p-4 shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-tr from-gray-500 to-gray-800 text-gradient">
            MedCura
          </h1>
          <h2 className="text-sm md:text-lg text-gray-500 px-5 font-semibold">
            Transforming healthcare with every connection.
          </h2>
        </div>
        <div className="flex-col flex w-full space-y-2 text-sm">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email here"
            className="p-3 rounded-md text-black bg-white/60 transition-all duration-200 hover:ring-2 ring-black/10 focus:ring-2 focus:ring-black focus:ring-opacity-30 focus:outline-none"
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
            className="p-3 rounded-md text-black bg-white/60 transition-all duration-200 hover:ring-2 ring-black/10 focus:ring-2 focus:ring-black focus:ring-opacity-30 focus:outline-none"
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
            "flex w-full border-2 rounded-lg justify-center py-2 cursor-pointer bg-gray-800 text-white transition-all duration-100",
            disabled && "bg-gray-600 opacity-50 cursor-not-allowed"
          )}
          disabled={disabled}
        >
          Continue
        </button>
      </div>
      <div className="w-full max-w-md pt-6 flex flex-col gap-2 text-sm text-white px-2">
        <Link
          href="/reset-password"
          className="transition-all duration-100 hover:font-bold"
        >
          Forgot something?
        </Link>
        <TransitionLink
          href="/dashboard"
          transitionId="sign-in-form"
          className="transition-all duration-100 hover:font-bold"
        >
          Contact an admin
        </TransitionLink>
      </div>
    </div>
  );
};
