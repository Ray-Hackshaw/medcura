import { SignInForm } from "./components/SignInForm";
import PulsingBackground from "./components/PulsingBackground";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col md:flex-row items-center justify-center">
      <PulsingBackground />
      <SignInForm />
      {/* <div className="absolute w-full h-screen md:relative">
        <Image
          src="/3.jpg"
          fill
          alt="Photo of nature by Colin Watts @colinwatts"
          objectPosition="-100px 0px"
          className="object-cover"
        />
      </div> */}
      <Link
        href="/demo"
        className="absolute bottom-0 right-0 p-2 text-white text-3xl z-[6] hover:font-bold transition-all duration-100"
      >
        Watch a demo &#9658;
      </Link>
    </div>
  );
}
