import React from "react";
import ContentCardWork from "./ContentCardWork";
import ImageCardWork from "./ImageCardWork";
import { urlFor } from "../../utils/imageBuilder";

const RecentWork = ({ item }) => {
  return (
    <div>
      <div className="mt-6 mb-10 lg:mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-6">
          <div className="hidden lg:block">
            <ImageCardWork imgUrl={urlFor(item?.thumbnail).url()} />
          </div>
          <div className="col-span-1 lg:col-span-3">
            <ContentCardWork item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
