import React from "react";
// import PropTypes from "prop-types";

import Label from "./Label";
import Tooltip from "./Tooltip";

const TextInput = ({
  id, label, required = false, error, ...inputProps
}) => (
  <div className="flex flex-col mb-3 max-w-full relative">
    <Label id={id} label={label} error={error} required={required} />
    <input id={id} className="shadow appearance-none leading-tight max-w-full p-2 bg-white text-black outline-none border-0 border-b-2 text-lg" required={required} {...inputProps} />
    {error && <Tooltip message={error} />}
  </div>
);

export default TextInput;
