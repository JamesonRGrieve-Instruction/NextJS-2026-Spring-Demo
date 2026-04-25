"use client"
import { useRouter } from 'next/navigation';

import React, { useEffect } from "react";
export default function Dynamic({searchParams}) {
  const queryParams = React.use(searchParams);
  const router = useRouter();
  useEffect(() => {
    if (!queryParams.firstName || !queryParams.lastName)
    {
      router.push("prompt");
    }
  }, [router, queryParams]);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>{queryParams.firstName} {queryParams.lastName}</h1>
      </main>
    </div>
  );
}
