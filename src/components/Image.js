import React from "react";

export const Image = ({ src, alt, ...props }) => {
  return (
    <img
      src={`https://static.llllllllllll.com/eniko/anniekostolany/${src}`}
      alt={alt}
      loading="lazy"
      {...props}
    />
  );
};

export default Image;
