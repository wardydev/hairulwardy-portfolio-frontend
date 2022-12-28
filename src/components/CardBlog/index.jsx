import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/functions";
const CardBlog = ({ item }) => {
  return (
    <div className="mt-6">
      <p className="text-xl font-serif italic opacity-50">
        {formatDate(new Date(item?.publishedAt))}
      </p>
      <Link
        to={`/blog/${item?.slug?.current}`}
        state={{ postId: item?._id }}
        className="text-2xl text-white hover:text-gray-400 font-bold cursor-pointer underline decoration-2"
      >
        {item?.title}
      </Link>
    </div>
  );
};

export default CardBlog;
