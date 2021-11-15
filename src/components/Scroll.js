import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "3px solid darkgreen",
        height: "1000px",
        marginTop: "50px",
        padding: "25px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
