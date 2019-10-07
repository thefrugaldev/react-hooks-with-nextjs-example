import React from "react";
import ImageToggleOnScroll from "../src/components/ImageToggleOnScroll";

const ImageChangeScroll = () => {
  return (
    <div>
      <ImageToggleOnScroll
        primaryImg="/static/headshot-bw.jpg"
        secondaryImg="/static/headshot.jpg"
      />
      <ImageToggleOnScroll
        primaryImg="/static/island-bw.jpg"
        secondaryImg="/static/island.jpg"
      />
      <ImageToggleOnScroll
        primaryImg="/static/mountain-bw.jpg"
        secondaryImg="/static/mountain.jpg"
      />
      <ImageToggleOnScroll
        primaryImg="/static/railroad-bw.jpg"
        secondaryImg="/static/railroad.jpg"
      />
      <ImageToggleOnScroll
        primaryImg="/static/river-bw.jpg"
        secondaryImg="/static/river.jpg"
      />
      <ImageToggleOnScroll
        primaryImg="/static/sign-bw.jpg"
        secondaryImg="/static/sign.jpg"
      />
      <ImageToggleOnScroll
        primaryImg="/static/town-bw.jpg"
        secondaryImg="/static/town.jpg"
      />
    </div>
  );
};

export default ImageChangeScroll;
