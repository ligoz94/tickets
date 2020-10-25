import React from "react";

export const getIcon = (name, color) => {
  switch (name) {
    case "arrow-left":
      return (
        <svg
          width="8px"
          height="10px"
          viewBox="18 18 8 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            id="Left-Iocn"
            stroke="none"
            fill="#444A59"
            fillRule="evenodd"
            transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) "
            points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"
          ></polygon>
        </svg>
      );
    case "arrow-right":
      return (
        <svg
          width="7px"
          height="10px"
          viewBox="19 18 7 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            id="Left-Iocn"
            stroke="none"
            fill="#444A59"
            fillRule="evenodd"
            points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"
          ></polygon>
        </svg>
      );

    case "bag":
      return (
        <svg
          width="17px"
          height="18px"
          viewBox="36 8 17 18"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z"
            id="Bag-Icon"
            stroke="none"
            fill="#444A59"
            fillRule="evenodd"
          ></path>
        </svg>
      );
    case "whishlist":
      return (
        <svg
          id="wishlist"
          width="20px"
          height="20px"
          viewBox="0 6 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            id="Wishlist-Icon"
            stroke="none"
            fill="#444A59"
            fillRule="evenodd"
            points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"
          ></polygon>
        </svg>
      );
    default:
      break;
  }
};
