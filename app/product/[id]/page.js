import React from "react";

export async function generateStaticParams() {
  return [1,2,3,4,5,6,7,8,9,10].map((id) => ({
    id: id.toString()
  }));
}
export const dynamicParams = false;


export default async function Home({params}) {
  const { id } = await params;
  return (
      <main>
        <p>{id}</p>
      </main>
  );
}
