import PropTypes from "prop-types";

const Card = ({ children, className }) => {
  return (
    <div
      className={`card flex flex-col items-center justify-center gap-8 rounded-2xl px-8 py-16 ${className}`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
