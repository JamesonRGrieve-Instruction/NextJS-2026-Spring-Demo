import React from "react";

export async function generateMetadata(
  { params },
){
  const { slug } = await params
  return {
    title:  slug,
  }
}
export async function generateStaticParams() {
  return ["hello", "welcome", "goodbye"].map((slug) => ({
    slug: slug.toString()
  }));
}
export const dynamicParams = false;

export default  function Home({params}) {
  const nowParams = React.use(params);
  return (
      <h2>{nowParams.slug.toUpperCase()}</h2>
  );
}
