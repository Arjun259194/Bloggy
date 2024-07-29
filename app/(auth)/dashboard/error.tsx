"use client";

export default function ErrorBoundry() {
  return (
    <div className="container mx-auto flex w-full items-center justify-center p-5">
      <span className="text-3xl font-bold capitalize">
        There was an error while loading this page
      </span>
    </div>
  );
}
