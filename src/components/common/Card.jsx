import PropTypes from "prop-types";

const Card = ({ children, className }) => {
  return (
    <div
      className={`card flex flex-col items-center justify-center gap-4 rounded-2xl px-4 py-8 lg:gap-8 lg:px-8 lg:py-16 ${className}`}
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
