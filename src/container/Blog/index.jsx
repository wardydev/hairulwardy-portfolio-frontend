import React from "react";
import CardBlog from "../../components/CardBlog";
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import useSanityQuery from "../../hooks/useSanityQuery";

const Blog = () => {
  const { data, isLoading } = useSanityQuery(`*[_type == "blog"]`);
  const isDataAvailable = () => {
    return data?.length !== 0;
  };
  return (
    <Layout isHeader={true} titleHeader="My Blog">
      {isLoading ? (
        <Spinner />
      ) : (
        isDataAvailable() &&
        data.map((post) => {
          return (
            <div key={post._id}>
              <CardBlog item={post} />
            </div>
          );
        })
      )}
    </Layout>
  );
};

export default Blog;
