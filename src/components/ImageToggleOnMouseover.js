import React, { useRef } from "react";

const ImageToggleOnMouseover = ({ primaryImg, secondaryImg, width, alt }) => {
  const imageRef = useRef(null);

  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      src={primaryImg}
      width={width}
      alt={alt}
      ref={imageRef}
    />
  );
};

export default ImageToggleOnMouseover;
