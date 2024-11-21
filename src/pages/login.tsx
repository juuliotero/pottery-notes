import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="min-w-screen flex min-h-screen w-full items-center justify-center">
      <div className="flex rounded-2xl bg-cream shadow-lg">
        <div className="p-4">
          <SignIn></SignIn>
        </div>
        <div className="hidden sm:block">
          <img className="w-96" src="marca.png"></img>
        </div>
      </div>
    </div>
  );
}
