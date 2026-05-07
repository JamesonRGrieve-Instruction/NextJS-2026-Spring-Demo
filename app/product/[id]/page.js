"use client"
import React, {useActionState, useState} from "react";
import useSWR, {mutate} from "swr";
import { doAThing } from "@/app/actions";
// export async function generateStaticParams() {
//   return [1,2,3,4,5,6,7,8,9,10].map((id) => ({
//     id: id.toString()
//   }));
// }
// export const dynamicParams = false;


export default  function Home({params}) {
  const [state, formAction, isPending] = useActionState(doAThing, null);
  const { data, isLoading, error } = useSWR('joke', async () => {
    return await (await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist&type=single")).json();
  }, {
    fallbackData: {
      joke: "Knock knock..."
    }
  })
  console.log(data);
  return (
      <main>
        <p>{data.joke}</p>
        <h1>State</h1>
        <p>{state?.success ?? "Nothing"} {isPending ? "Yes" : "No"}</p>
        <button onClick={() => mutate("joke")}>New Joke</button>
        <form action={formAction}>
          <button type="submit">Submit</button>
        </form>
      </main>
  );
}
