import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-950 text-white">
      <SignIn />
         
    </div>
  );
}
