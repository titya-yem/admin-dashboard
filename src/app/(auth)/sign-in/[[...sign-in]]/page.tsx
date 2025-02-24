import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center mt-8 md:ml-24 lg:ml-48 xl:ml-96">
      <SignIn signUpFallbackRedirectUrl="/" />
    </div>
  );
}
