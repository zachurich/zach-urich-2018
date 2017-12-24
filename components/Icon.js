import React from "react";

const Icon = props => {
  return (
    <div className="icon">
      <i className={`${props.className} ${props.animate ? "animate" : ""}`}>
        {props.children}
      </i>
    </div>
  );
};

export default Icon;
