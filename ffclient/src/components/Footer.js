import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        padding: "2em",
        position: "absolute",
        bottom: "0",
        margin: "auto",
        textAlign: "right",
        color: "grey",
        width: "50%",
      }}
    >
      Thank you for visiting |{" "}
      <a
        href="https://github.com/mavrik83/flosfastis"
        target="_blank"
        style={{ color: "grey" }}
      >
        source
      </a>
    </div>
  );
};

export default Footer;
