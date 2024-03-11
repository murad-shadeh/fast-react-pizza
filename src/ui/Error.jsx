import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  // this component has access to the error occurred
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😥</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default Error;
