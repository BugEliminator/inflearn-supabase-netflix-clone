"use client";

import UI from "./ui";

export default function MovieDetail({ params }) {
  return (
    <main className="flex items-center pt-16 bg-blue-gray-100 w-full absolute top-0 bottom-0 left-0 right-0">
      <UI id={params.id} />
    </main>
  );
}
