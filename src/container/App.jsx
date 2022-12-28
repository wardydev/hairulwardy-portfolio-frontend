import React, { useState, useEffect } from "react";

import CardBlog from "../components/CardBlog";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import MoreAction from "../components/MoreAction";
import RecentWork from "../components/RecentWork";
import Spinner from "../components/Spinner";
import useSanityQuery from "../hooks/useSanityQuery";

const App = () => {
  const { data, isLoading } = useSanityQuery(`*[_type == "projects"]`);
  const posts = useSanityQuery(`*[_type == "blog"]`);

  const filteredProjects = data?.slice(0, 2);
  const filteredPosts = posts?.data?.slice(0, 2);

  return (
    <Layout>
      <Hero />
      <div className="mb-20">
        <Heading title="I'VE' DONE THIS BEFORE👇" />
        <div className="mt-6">
          {isLoading ? (
            <Spinner />
          ) : (
            filteredProjects?.map((item) => {
              return (
                <div key={item._id}>
                  <RecentWork item={item} />
                </div>
              );
            })
          )}
        </div>
        <div className="mt-6">
          <MoreAction href="/projects" />
        </div>
      </div>
      <div className="mb-12">
        <Heading title="I ALSO WRITE HERE 📝" />
        <div className="mt-6">
          {posts.isLoading ? (
            <Spinner />
          ) : (
            filteredPosts.length !== 0 &&
            filteredPosts.map((post) => {
              return (
                <div key={post._id}>
                  <CardBlog item={post} />
                </div>
              );
            })
          )}
        </div>
        <div className="mt-6">
          <MoreAction href="/blog" />
        </div>
      </div>
    </Layout>
  );
};

export default App;
