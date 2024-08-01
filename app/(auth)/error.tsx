"use client";

import { Button } from "@/components/ui/button";
import { ServerCrash } from "lucide-react";

export default function ErrorBoundry({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto flex flex-col w-full items-center justify-center p-5">
      <span className="text-3xl md:text-6xl font-bold capitalize items-center flex">
        <ServerCrash className="mx-3 w-8 h-8 md:w-10 md:h-10" /> ERROR
      </span>
      <p>{error.message}</p>
      <Button onClick={reset}>Try Reset</Button>
    </div>
  );
}
