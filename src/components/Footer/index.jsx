import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex gap-4">
      <a
        target="_blank"
        href="https://www.instagram.com/hrlwardy/"
        className="text-xl font-serif italic text-white hover:text-gray-400 underline decoration-1"
      >
        <BsInstagram />
      </a>
      <a
        target="_blank"
        href="https://github.com/wardydev"
        className="text-xl font-serif italic text-white hover:text-gray-400 underline decoration-1"
      >
        <BsGithub />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/hairul-wardi-166574231/"
        className="text-xl font-serif italic text-white hover:text-gray-400 underline decoration-1"
      >
        <BsLinkedin />
      </a>
      <a
        href="mailto:wardydev@gmail.com"
        className="text-xl font-serif italic text-white hover:text-gray-400 underline decoration-1"
      >
        <SiGmail />
      </a>
    </div>
  );
};

export default Footer;
