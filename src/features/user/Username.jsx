import { useSelector } from "react-redux";

const Username = () => {
  // to gain access to the data from redux we use the useSelector hook to access it.
  const username = useSelector((state) => state.user.username);
  if (!username) return null;
  return (
    <div className="text-sm font-semibold hidden md:block">{username}</div>
  );
};

export default Username;
