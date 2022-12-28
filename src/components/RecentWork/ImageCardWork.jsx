import React from "react";

const ImageCardWork = ({ imgUrl }) => {
  return (
    <div>
      <img src={imgUrl} alt="project-image" className="h-full" />
    </div>
  );
};

export default ImageCardWork;
