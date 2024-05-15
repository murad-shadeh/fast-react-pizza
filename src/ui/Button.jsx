import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ children, disabled, to, type, onClick }) => {
  const baseStyle =
    "bg-yellow-400 text-sm uppercase tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed font-semibold text-stone-800  inline-block ";

  const styles = {
    primary: baseStyle + " py-3 px-4 md:px-6 md:py-4",
    small: baseStyle + " px-4 py-2 sm:px-5 sm:py-2.5 text-xs",
    secondary:
      "border-2 text-sm border-stone-300 py-2.5 px-4 md:px-6 md:py-3.5 uppercase tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed font-semibold text-stone-400  inline-block",
    changed: "py-3 px-4 sm:px-5 sm:py-2.5",
    round: baseStyle + " px-2.5 py-1 sm:px-3.5 sm:py-2 text-sm",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
