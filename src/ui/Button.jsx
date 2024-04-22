import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ children, disabled, to, type }) => {
  const baseStyle =
    "bg-yellow-400 uppercase tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed font-semibold text-stone-800  inline-block ";

  const styles = {
    primary: baseStyle + " py-3 px-4 md:px-6 md:py-4",
    small: baseStyle + " px-4 py-2 sm:px-5 sm:py-2.5 text-xs",
    changed: "py-3 px-4 sm:px-5 sm:py-2.5",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
