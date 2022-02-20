import React from "react";

export default function RecruitbotLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 58">
      <defs>
        <filter
          id="b"
          x="10.358"
          y="-8.332"
          width="63.269"
          height="84.359"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feFlood floodOpacity=".302" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="c"
          x="-13"
          y="-6.066"
          width="257"
          height="80"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="4" result="blur-2" />
          <feFlood floodOpacity=".302" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
        <clipPath id="a">
          <path d="M0 0h231v58H0z" />
        </clipPath>
      </defs>
      <g data-name="Recruitbot v2 Graphic 2" clipPath="url(#a)">
        <g data-name="Recruitbot Graphic 3">
          <g data-name="Group 1">
            <g
              data-name="Ellipse 7"
              transform="translate(42 10.173)"
              fill="#3abe52"
              stroke="#3abe52"
            >
              <ellipse cx="30" cy="17" rx="30" ry="17" stroke="none" />
              <ellipse cx="30" cy="17" rx="29.5" ry="16.5" fill="none" />
            </g>
            <path
              data-name="Path 8"
              d="m46.186 35.784 6.881 3.564a12.041 12.041 0 0 1-3.898 2.381 7.7 7.7 0 0 1-3.954.617c-6.359-.343-5.113-5.069-5.113-5.069a10.572 10.572 0 0 0 6.084-1.493Z"
              fill="#3abe52"
            />
            <g
              data-name="Group 2"
              transform="translate(-72.582 -77.962)"
              fill="#fff"
            >
              <circle
                data-name="Ellipse 8"
                cx="6"
                cy="6"
                r="6"
                transform="translate(120.082 98.896)"
                opacity=".6"
              />
              <circle
                data-name="Ellipse 9"
                cx="6"
                cy="6"
                r="6"
                transform="translate(139.082 98.896)"
                opacity=".8"
              />
              <circle
                data-name="Ellipse 10"
                cx="6"
                cy="6"
                r="6"
                transform="translate(158.082 98.896)"
              />
            </g>
          </g>
          <g filter="url(#b)" transform="translate(0 .004)">
            <text
              data-name="e"
              transform="matrix(.98 -.17 .17 .98 31.33 49)"
              fill="#fff"
              stroke="#a1afa0"
              fontSize="48"
              fontFamily="Ubuntu-MediumItalic, Ubuntu"
              fontWeight="500"
              fontStyle="italic"
            >
              <tspan x="0" y="0">
                e
              </tspan>
            </text>
          </g>
          <g filter="url(#c)" transform="translate(0 .004)">
            <text
              data-name="R cruitbot"
              transform="translate(0 46.93)"
              fill="#fff"
              stroke="#a1afa0"
              fontSize="48"
              fontFamily="Ubuntu-MediumItalic, Ubuntu"
              fontWeight="500"
              fontStyle="italic"
            >
              <tspan x="0" y="0" xmlSpace="preserve">
                R cruitbot
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}
