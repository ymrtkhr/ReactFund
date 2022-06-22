import React from "react";

export const ColorFulMessage = (props) => {
  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorFulMessage;
