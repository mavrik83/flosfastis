import React from "react";

const compare = (a, b) => {
  return a.props.by - b.props.by;
};

const Sort = ({ children, by }) => {
  if (!by) {
    return children;
  }
  return React.Children.toArray(children).sort(compare);
};

export default Sort;
