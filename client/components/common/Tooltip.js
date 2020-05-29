import React from "react";

import styles from "./Tooltip.module.css";

const Tooltip = ({ message }) => (
  <div className="relative">
    <div className={`${styles.tooltip} p-1 px-2 border-solid border-1 text-white border-gray-800 font-normal text-sm bg-gray-800`}>
      {message}
    </div>
  </div>
);
export default Tooltip;
