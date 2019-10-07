import React from "react";
import ImageToggleOnMouseover from "../src/components/ImageToggleOnMouseover";

const ImageChangeHover = () => {
  return (
    <div>
      <ImageToggleOnMouseover
        primaryImg="/static/headshot-bw.jpg"
        secondaryImg="/static/headshot.jpg"
        width="50%"
        alt=""
      />
      <ImageToggleOnMouseover
        primaryImg="/static/river-bw.jpg"
        secondaryImg="/static/river.jpg"
        width="50%"
        alt=""
      />
    </div>
  );
};

export default ImageChangeHover;
