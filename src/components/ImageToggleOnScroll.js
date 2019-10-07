import React, { useRef, useEffect, useState } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg, alt }) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    setIsLoading(false);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isLoading]);

  const [inView, setInView] = useState(false);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };

  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };

  return isLoading ? null : (
    <div>
      <img
        src={inView ? secondaryImg : primaryImg}
        height="500"
        alt={alt}
        ref={imageRef}
      />
    </div>
  );
};

export default ImageToggleOnScroll;
