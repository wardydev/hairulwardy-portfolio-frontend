import React from "react";
import { useState } from "react";
import { urlFor } from "../../utils/imageBuilder";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const ModalImageSlide = ({ slides, slideActive, setIsShowModal }) => {
  const [slide, setSlide] = useState(slideActive);
  const showImage = () => {
    const imgSource = slides[slide];
    return <img src={urlFor(imgSource).url()} alt="screenshot" width={650} />;
  };
  return (
    <div className="h-full w-full fixed bg-black bg-opacity-60 flex items-center justify-center z-10">
      <div
        className="absolute top-12 right-2/4 lg:right-20 bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-30 cursor-pointer"
        onClick={() => setIsShowModal(false)}
      >
        <IoClose size={26} />
      </div>
      <div className="relative">
        <button
          disabled={slide <= 0 && true}
          onClick={() => setSlide(slide - 1)}
          className="w-12 h-12 rounded-full bg-gray-300 hover:bg-opacity-90 flex items-center justify-center absolute lg:-left-6 lg:top-56 -bottom-20 left-36"
        >
          <BiChevronLeft size={32} className="text-cyan-600" />
        </button>
        {showImage()}
        <button
          disabled={slide >= slides.length - 1 && true}
          onClick={() => setSlide(slide + 1)}
          className="w-12 h-12 rounded-full bg-gray-300 hover:bg-opacity-90 flex items-center justify-center absolute lg:-right-6 lg:top-56 -bottom-20 right-36"
        >
          <BiChevronRight size={32} className="text-cyan-600" />
        </button>
      </div>
    </div>
  );
};

export default ModalImageSlide;
