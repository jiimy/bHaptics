import React from "react";

const Close20 = ({ fill = "#0072e3", onClick }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <g id="Group">
        <rect
          id="Rectangle Copy"
          x="4.69669"
          y="5.87518"
          width="1.66667"
          height="13.3333"
          transform="rotate(-45 4.69669 5.87518)"
          fill={fill}
        />
        <rect
          id="Rectangle Copy 2"
          x="14.1248"
          y="4.69672"
          width="1.66667"
          height="13.3333"
          transform="rotate(45 14.1248 4.69672)"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default Close20;
