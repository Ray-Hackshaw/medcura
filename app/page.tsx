import { SignInForm } from "./components/SignInForm";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col md:flex-row items-center justify-center">
      <SignInForm />
    </div>
  );
}
