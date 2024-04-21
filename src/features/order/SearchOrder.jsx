import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    //   return if there is no query
    if (!query) return;
    // otherwise navigate to that page (using the useNavigate hook)
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search for order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-4 py-2 text-sm placeholder:text-stone-400 w-28 sm:w-64 focus:w-72 transition-all duration-300 sm:focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
      />
    </form>
  );
};

export default SearchOrder;
