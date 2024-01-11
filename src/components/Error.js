import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops... something went wrong!</h1>
      <h4>
        {error.status}-{error.statusText}
      </h4>
    </div>
  );
}

export default Error;
