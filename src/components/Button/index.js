import React from "react";

import "components/Button/Button.scss";

export default function Button({ children, classes , ...otherButtonAttr }) {
  return (
    <button className={`${classes} app-button`} {...otherButtonAttr}>
        {children}
    </button>
  );
}
