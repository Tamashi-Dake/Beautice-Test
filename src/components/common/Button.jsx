// src/components/common/Button.jsx
import PropTypes from "prop-types";

const Button = ({ children, type, onClick, className }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`rounded-full bg-accent px-12 py-4 text-center text-[16px] font-semibold tracking-widest text-white transition-all hover:-translate-y-1 hover:shadow-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
