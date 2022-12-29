import React from "react";
import useSanityQuery from "../../hooks/useSanityQuery";
import { urlFor } from "../../utils/imageBuilder";
import Spinner from "../Spinner";

const Hero = () => {
  const { data, isLoading } = useSanityQuery(`*[_type == "hero"]`);

  return (
    <div className="mb-28 lg:mb-34 text-center pt-8 lg:pt-12">
      <div className="flex items-center justify-center">
        {isLoading && <Spinner />}
      </div>
      {data.length !== 0 &&
        data?.map((item) => {
          return (
            <div key={item._id} className="mb-8">
              <img
                src={urlFor(item.profile).width(75).url()}
                alt="profil-image"
                className="rounded-full mb-8 mx-auto"
              />
              <h3 className="text-base lg:text-lg font-bold">
                {item?.greeting}
              </h3>
              <h1 className="text-3xl lg:text-5xl font-bold mt-3 mb-2 lg:mb-4">
                {item?.heading}
              </h1>
              <p className="text-lg lg:text-xl opacity-80 font-serif italic">
                {item?.description}
              </p>
            </div>
          );
        })}
      <a href="./Resume-Hairul-Wardi.pdf" download={true}>
        <span className="bg-cyan-500 py-4 lg:px-6 w-full lg:w-2/5 mx-auto hover:bg-cyan-600 text-white hover:text-gray-200 font-semibold ">
          Download My Resume Here📄
        </span>
      </a>
    </div>
  );
};

export default Hero;
