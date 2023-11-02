import React from "react";

const DropdownArrow = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="icon / arrow / dropdown">
        <path
          id="img / btn / right / dark"
          d="M10 11.204L5.35925 7.20111C5.04273 6.92809 4.53595 6.93376 4.22733 7.21379C3.91871 7.49381 3.92513 7.94214 4.24166 8.21516L9.4412 12.7H10.5588L15.7583 8.21516C16.0749 7.94214 16.0813 7.49381 15.7727 7.21379C15.4641 6.93376 14.9573 6.92809 14.6407 7.20111L10 11.204Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

export default DropdownArrow;
