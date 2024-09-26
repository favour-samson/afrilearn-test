import * as React from "react";
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
    <g clipPath="url(#a)">
      <path
        fill="#75819A"
        d="M10 20C4.486 20 0 15.514 0 10S4.486 0 10 0s10 4.486 10 10-4.486 10-10 10Zm0-18.333c-4.595 0-8.333 3.738-8.333 8.333 0 4.595 3.738 8.333 8.333 8.333 4.595 0 8.333-3.738 8.333-8.333 0-4.595-3.738-8.333-8.333-8.333ZM14.167 10a.833.833 0 0 0-.834-.833h-2.5V5a.833.833 0 1 0-1.666 0v5c0 .46.373.833.833.833h3.333c.461 0 .834-.372.834-.833Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ClockIcon;
