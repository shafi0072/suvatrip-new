import React from "react";

const VideoComponents = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <iframe
          class="w-full aspect-video md:aspect-square "
          src="https://www.youtube.com/embed/59DTooUKOsA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="col-md-6">
        <iframe
          class="w-full aspect-video md:aspect-square"
          src="https://www.youtube.com/embed/FJ0r2DWqKMA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponents;
