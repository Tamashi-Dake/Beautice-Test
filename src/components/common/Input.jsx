import PropTypes from "prop-types";

const Input = ({ elementType, inputType, placeholder, inputID, classname }) => {
  // elementType = input, textarea
  // inputType = text, email, password, number
  // placeholder = placeholder for input
  // id = unique id for input
  // classname = classes for input

  return (
    <>
      {elementType === "input" ? (
        <input
          type={inputType}
          id={inputID}
          placeholder={placeholder}
          className={`rounded-lg border border-[#D9DDFE] px-8 py-4 placeholder:tracking-widest ${classname}`}
        />
      ) : (
        <textarea
          id={inputID}
          placeholder={placeholder}
          rows={8}
          className={`h-auto resize-y rounded-lg border border-[#D9DDFE] px-8 py-6 placeholder:tracking-widest ${classname}`}
        ></textarea>
      )}
    </>
  );
};

Input.propTypes = {
  elementType: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputID: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
};

export default Input;
