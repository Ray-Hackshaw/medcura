import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold py-2">404</h1>
      <div className="text-lg text-gray-500 py-4">
        <p className="mb-6">
          The page could not be found. Maybe I am still building it?
        </p>
        <p>
          Or maybe you&apos;re just <span className="font-bold">lost?</span>
        </p>
      </div>
      <Link
        href="/"
        className="px-6 py-3 text-white bg-gradient-to-tr rounded-lg shadow-md from-slate-600 to-slate-900 transition"
      >
        Go home
      </Link>
    </div>
  );
}
