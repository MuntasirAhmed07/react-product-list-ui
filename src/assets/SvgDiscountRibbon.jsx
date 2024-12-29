import React from 'react';

const SvgDiscountRibbon = () => {
  return (
    <svg
      width="66"
      height="30"
      viewBox="0 0 66 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 4C0.5 1.79086 2.29086 0 4.5 0H53.5V24H0.5V4Z"
        fill="url(#paint0_linear_260_292)"
      />
      <path
        d="M53.5 24H62.2639C63.7507 24 64.7177 22.4354 64.0528 21.1056L53.5 0V24Z"
        fill="#D66F00"
      />
      <path
        d="M53.5 0H62.2639C63.7507 0 64.7177 1.56462 64.0528 2.89443L53.5 24V0Z"
        fill="#F7B166"
      />
      <path d="M0.5 24H4.5V30L0.5 24Z" fill="url(#paint1_linear_260_292)" />
      <defs>
        <linearGradient
          id="paint0_linear_260_292"
          x1="53.5"
          y1="24"
          x2="-1.49253"
          y2="17.8674"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFA03B" />
          <stop offset="1" stop-color="#F27D00" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_260_292"
          x1="2.5"
          y1="30"
          x2="2.5"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F7B166" />
          <stop offset="1" stop-color="#D66F00" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SvgDiscountRibbon;
