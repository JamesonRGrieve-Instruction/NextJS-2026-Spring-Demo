import React from "react";
import { redirect } from "next/navigation";

export async function generateMetadata(
  { params },
){
  const { slug } = await params
  return {
    title:  slug,
  }
}

export default  function Home({params}) {
  const nowParams = React.use(params);

  if (["hello", "welcome", "goodbye"].includes(nowParams.slug))
  {
    redirect(`/render-slug/${nowParams.slug}`)
  }

  return (
      <h2>{nowParams.slug.toUpperCase()}</h2>
  );
}
