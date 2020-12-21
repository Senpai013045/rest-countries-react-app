import React from "react";

const Backdrop = ({ clicked }) => {
  return (
    <div
      onClick={clicked}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 100,
        backgroundColor: "transparent",
      }}
    ></div>
  );
};

export default Backdrop;
