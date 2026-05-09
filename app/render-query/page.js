import React from "react";


export default  function Home({searchParams}) {
  const nowParams = React.use(searchParams);

  return (
      <h2>{nowParams.query.toUpperCase()}</h2>
  );
}
