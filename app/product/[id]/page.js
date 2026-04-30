"use client"
import React, {useState} from "react";

// export async function generateStaticParams() {
//   return [1,2,3,4,5,6,7,8,9,10].map((id) => ({
//     id: id.toString()
//   }));
// }
// export const dynamicParams = false;


export default  function Home({params}) {

  const random = Math.floor(Math.random() * 100);
  return (
      <main>
        <p>{random}</p>
      </main>
  );
}
