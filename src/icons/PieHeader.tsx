import * as React from "react";
const PieHeader = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
    <g clipPath="url(#a)">
      <path
        fill="#B2BBCE"
        d="M15 0a15 15 0 1 0 15 15A15.016 15.016 0 0 0 15 0Zm11.966 11.4-11.135 2.165a6.17 6.17 0 0 1-.46-.849l-4.175-9.625a12.483 12.483 0 0 1 15.77 8.309ZM15 27.5A12.494 12.494 0 0 1 8.905 4.098l4.173 9.613a8.764 8.764 0 0 0 2.708 3.465l8.316 6.365A12.459 12.459 0 0 1 15 27.5Zm10.625-5.944-7.656-5.86 9.476-1.841c.034.375.058.759.058 1.145a12.407 12.407 0 0 1-1.878 6.556Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PieHeader;
