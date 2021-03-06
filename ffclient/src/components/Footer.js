import React from "react";
import { Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <div
      style={{
        width: "90vw",
        margin: "auto",
        marginTop: "15px",
        padding: "15px",
        textAlign: "center",
        backgroundColor: "lightgray",
        borderRadius: "6px 6px 0 0",
      }}
    >
      Thank you for visiting |{" "}
      <a
        href="https://github.com/mavrik83/flosfastis"
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
        style={{ color: "grey" }}
      >
        source <Icon name="github" />
      </a>
    </div>
  );
};

export default Footer;
