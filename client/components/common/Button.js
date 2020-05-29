import React from "react";

import styles from "./Button.module.css";

const Button = ({ children, ...btnProps }) => (
  <button
    type="button"
    className={`${styles[btnProps.kind]} px-3 py-3 w-full capitalize outline-none cursor-pointer text-lg font-semibold`}
    {...btnProps}
  >
    {children}
  </button>
);

export default Button;
