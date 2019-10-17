import React, { useRef } from "react";

const ImageToggleOnMouseover = ({
  primaryImg,
  secondaryImg,
  height,
  width,
  alt,
  className
}) => {
  const imageRef = useRef(null);

  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      className={className}
      src={primaryImg}
      height={height}
      width={width}
      alt={alt}
      ref={imageRef}
    />
  );
};

export default ImageToggleOnMouseover;
