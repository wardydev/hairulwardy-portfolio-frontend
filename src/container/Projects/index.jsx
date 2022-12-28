import React, { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import RecentWork from "../../components/RecentWork";
import Spinner from "../../components/Spinner";
import useSanityQuery from "../../hooks/useSanityQuery";

const Projects = () => {
  const { data, isLoading } = useSanityQuery(`*[_type == "projects"]`);

  return (
    <Layout isHeader={true} titleHeader="My Projects">
      {isLoading ? (
        <Spinner />
      ) : (
        data?.map((item) => {
          return (
            <div key={item._id}>
              <RecentWork item={item} />
            </div>
          );
        })
      )}
    </Layout>
  );
};

export default Projects;
