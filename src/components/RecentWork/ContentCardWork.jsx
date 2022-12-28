import React from "react";
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";

import { formatSlug, getFullYearFromDate } from "../../utils/functions";

const ContentCardWork = ({ item }) => {
  return (
    <article>
      <Link
        to={`/projects/${formatSlug(item.title)}`}
        state={{ projectId: item?._id }}
        className="text-2xl lg:text-xl font-bold cursor-pointer underline decoration-1 text-white hover:text-gray-400"
      >
        {item.title}
      </Link>
      <div className="flex items-center mt-2">
        <div className="mr-2">
          <span className="text-cyan-500 bg-cyan-900 bg-opacity-40 px-2 py-1">
            {getFullYearFromDate(new Date(item.publishedAt))}
          </span>
        </div>
        <span className="text-lg lg:text-base opacity-80">{item.keyword}</span>
      </div>
      <div className="mt-3 text-xl font-serif italic opacity-50 truncate hover:text-clip h-14">
        {/* <p className="text-xl font-serif italic opacity-50 truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor
          deleniti sapiente labore repellendus placeat recusandae!
        </p> */}
        <PortableText value={item.body} />
      </div>
    </article>
  );
};

export default ContentCardWork;
