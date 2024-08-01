// src/components/common/Button.jsx
import PropTypes from "prop-types";

const Button = ({ children, type, onClick, className }) => {
  return (
    <button
      type={type}
      className={`rounded-full bg-accent px-12 py-4 text-center text-[16px] font-semibold tracking-widest text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
};

export default Button;
