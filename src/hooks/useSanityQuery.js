import { useState, useEffect } from "react";
import sanityClient from "../config/client";

const useSanityQuery = (query, id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const queryData = async () => {
    setIsLoading(true);
    try {
      const res = await sanityClient.fetch(query);
      if (res.length !== 0) {
        setData(res);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    queryData();
  }, [id]);

  return { data, isLoading };
};

export default useSanityQuery;
