import React, { useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import { useLocation } from "react-router-dom";
import { FiLayout } from "react-icons/fi";

import Layout from "../../components/Layout";
import { urlFor } from "../../utils/imageBuilder";
import {
  formatDateToLocalstring,
  getFullYearFromDate,
} from "../../utils/functions";
import Heading from "../../components/Heading";
import useSanityQuery from "../../hooks/useSanityQuery";
import Spinner from "../../components/Spinner";
import { serializers } from "../../utils/serializers";
import ModalImageSlide from "../../components/ModalImageSlide";

const DetailProject = () => {
  const { state } = useLocation();
  const { data, isLoading } = useSanityQuery(
    `*[_type == 'projects' && _id == "${state.projectId}"][0]`,
    state.projectId
  );
  const [isShowModal, setIsShowModal] = useState(false);
  const [slideActive, setSlideActive] = useState(0);

  const checkDataIsAvailable = () => {
    return data.length !== 0;
  };

  return (
    <>
      {isShowModal && (
        <ModalImageSlide
          slides={checkDataIsAvailable() && data?.screenshots}
          slideActive={slideActive}
          setIsShowModal={setIsShowModal}
        />
      )}
      <Layout isHeader={false}>
        {isLoading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <main className="my-4">
            <div className="mb-6">
              <h1 className="text-3xl lg:text-5xl font-bold">
                {checkDataIsAvailable() && data?.title}
              </h1>
              <div className="flex gap-4 items-center mt-6 mb-3">
                <div className="flex gap-2">
                  {checkDataIsAvailable() &&
                    data?.technologies.map((tech, index) => {
                      return (
                        <span
                          className="text-cyan-500 bg-cyan-900 bg-opacity-40 px-2 py-1"
                          key={index}
                        >
                          {tech}
                        </span>
                      );
                    })}
                </div>
              </div>
              <div className="opacity-50">
                <span className="text-xl">
                  {formatDateToLocalstring(
                    new Date(checkDataIsAvailable() && data?.publishedAt)
                  )}
                </span>
              </div>
            </div>
            <div className="mt-2 mb-6 bg-gray-800">
              <div className="px-4 pt-4">
                <img
                  src={
                    data.length !== 0 &&
                    urlFor(checkDataIsAvailable() && data?.thumbnail).url()
                  }
                  alt="image item"
                  className="w-full"
                />
              </div>
              <a
                href={checkDataIsAvailable() && data?.link}
                target="_blank"
                className="flex items-center gap-x-2 bg-cyan-500 hover:bg-cyan-600 text-gray-50 hover:text-gray-300 text-center py-3 px-3 justify-center"
              >
                <span className="text-lg font-semibold">Live Preview</span>
                <FiLayout color="white" size={20} />
              </a>
            </div>

            <div>
              <BlockContent
                blocks={checkDataIsAvailable() && data?.body}
                imageOptions={{ fit: "max" }}
                serializers={serializers}
              />
            </div>

            <div className="my-6">
              <Heading title="SCREENSHOTS" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                {data.length !== 0 &&
                  data?.screenshots.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setSlideActive(index);
                          setIsShowModal(true);
                        }}
                      >
                        <img src={urlFor(item).url()} alt="screenshot item" />
                      </div>
                    );
                  })}
              </div>
            </div>
          </main>
        )}
      </Layout>
    </>
  );
};

export default DetailProject;
