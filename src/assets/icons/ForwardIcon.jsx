import React from "react";

export const ForwardIcon = ({ height = 40, width = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0702 19.302C27.4745 19.7064 27.458 20.3669 27.034 20.7506L16.3391 30.4269C15.8272 30.8901 15.0367 30.8506 14.5735 30.3386C14.1103 29.8267 14.1499 29.0362 14.6618 28.5731L24.1874 19.9547L14.6166 10.3839C14.1284 9.89573 14.1284 9.10427 14.6166 8.61612C15.1047 8.12796 15.8962 8.12796 16.3843 8.61612L27.0702 19.302Z"
        fill="white"
      />
    </svg>
  );
};