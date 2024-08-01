import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const NoBlogFound = () => {
  return (
    <div className="w-screen space-y-5 h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl capitalize font-semibold">No Blog found</h1>
      <p>Try refreshing or go back</p>
      <Button asChild>
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

export default NoBlogFound;
