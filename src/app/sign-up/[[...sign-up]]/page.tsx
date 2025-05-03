import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function signUp() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <SignUp />
    </div>
  );
}
