import React from "react";

export const BriefcaseIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="76.333" height="73.417">
      <defs>
        <filter
          id="a"
          x="0"
          y="0"
          width="76.333"
          height="73.417"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood flood-opacity=".161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <path data-name="Path 1" d="M3.167.167h70v70h-70Z" fill="none" />
      <g transform="translate(-.003 -.003)" filter="url(#a)">
        <path
          data-name="Path 2"
          d="M61.5 17.667H49.833v-5.834A5.813 5.813 0 0 0 44 6H32.333a5.813 5.813 0 0 0-5.833 5.833v5.833H14.833a5.788 5.788 0 0 0-5.8 5.833L9 55.583a5.813 5.813 0 0 0 5.833 5.833H61.5a5.813 5.813 0 0 0 5.833-5.833V23.5a5.813 5.813 0 0 0-5.833-5.833Zm-17.5 0H32.333v-5.834H44Z"
          fill="#fff"
        />
      </g>
    </svg>
  );
};
