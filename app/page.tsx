import Image from "next/image";
import { SignInForm } from "./components/SignInForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col md:flex-row items-center justify-center">
      <SignInForm />
      <Link
        href="https://www.github.com/Ray-Hackshaw"
        target="_blank"
        className="absolute bottom-0 flex gap-2 items-center text-black z-[7] hover:bg-slate-400/80 hover:text-white hover:font-bold rounded-md transition-all duration-300 hover:p-2"
      >
        <Image alt="Github Logo" src="/github.svg" width="20" height="20" />
        <p>Ray Hackshaw</p>
      </Link>
    </div>
  );
}
