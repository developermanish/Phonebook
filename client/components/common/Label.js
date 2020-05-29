import React from "react";
// import PropTypes from "prop-types";

const Label = (props) => {
  const { id, required, label } = props;
  return (
    <label htmlFor={id} className="text-sm mb-1 text-gray-700 font-medium uppercase">
      <>
        {label}
        {required && <span className="font-medium"> *</span>}
      </>
    </label>
  );
};

export default Label;
