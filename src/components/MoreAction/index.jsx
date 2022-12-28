import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const MoreAction = ({ href }) => {
  return (
    <Link
      to={href}
      className="text-xl text-white hover:text-cyan-500 flex items-center"
    >
      <span>More</span>
      <BsArrowRightShort size={30} />
    </Link>
  );
};

export default MoreAction;
