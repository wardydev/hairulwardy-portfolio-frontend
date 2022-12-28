import React from "react";
import { useLocation } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";

import Layout from "../../components/Layout";
import useSanityQuery from "../../hooks/useSanityQuery";
import { formatDateToLocalstring } from "../../utils/functions";
import { urlFor } from "../../utils/imageBuilder";
import { serializers } from "../../utils/serializers";
import Spinner from "../../components/Spinner";

const DetailBlog = () => {
  const { state } = useLocation();
  const { data, isLoading } = useSanityQuery(
    `*[_type == 'blog' && _id == "${state?.postId}"][0]`,
    state?.postId
  );
  // const posts = useSanityQuery(`*[_type == "blog"]`);
  const isDataAvailable = () => {
    return data?.length !== 0;
  };
  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <p className="text-lg mb-2 font-medium opacity-50">
              {formatDateToLocalstring(
                new Date(isDataAvailable() && data.publishedAt)
              )}
            </p>
            <h1 className="text-3xl lg:text-6xl font-bold">
              {isDataAvailable() && data.title}
            </h1>
            <div className="text-xl mt-2 mb-8 flex gap-3 opacity-75">
              <span>#react</span>
              <span>#react</span>
              <span>#react</span>
              <span>#react</span>
            </div>
            <img
              src={data.length !== 0 && urlFor(data?.thumbnail).url()}
              alt="image blog"
            />
          </div>
          <div className="mt-4">
            <BlockContent
              blocks={isDataAvailable() && data?.body}
              imageOptions={{ fit: "max" }}
              serializers={serializers}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DetailBlog;
