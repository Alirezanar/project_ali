import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  return (
    <div className="hidden lg:block flex fixed flex-col top-[35%] left-0">
      <ul>
        {/* Start Linkedin */}
        <li className="w-[150px] h-[40px] ml-[-100px] pt-1 pr-2 justify-between items-center hover:ml-[-10px] duration-300 bg-blue-500">
          <a
            href="/"
            className="flex justify-between items-center w-full text-white"
          >
            Linkedin
            <FaLinkedin size={30} />
          </a>
        </li>
        {/* Start Github */}
        <li className="w-[150px] h-[40px] ml-[-100px] pt-1 pr-2 justify-between items-center hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            href="/"
            className="flex justify-between items-center w-full text-white"
          >
            Github
            <FaGithub size={30} />
          </a>
        </li>
        {/* Start Insta */}
        <li className="w-[150px] h-[40px] ml-[-100px] pt-1 pr-2 justify-between items-center hover:ml-[-10px] duration-300 bg-[#BD4391]">
          <a
            href="/"
            className="flex justify-between items-center w-full text-white"
          >
            Insta
            <FaInstagram size={30} />
          </a>
        </li>
        {/* Start Email */}
        <li className="w-[150px] h-[40px] ml-[-100px] pt-1 pr-2 justify-between items-center hover:ml-[-10px] duration-300 bg-[#DF5A59]">
          <a
            href="/"
            className="flex justify-between items-center w-full text-white"
          >
            Email
            <HiOutlineMail size={30} />
          </a>
        </li>
        {/* Start CV */}
        <li className="w-[150px] h-[40px] ml-[-100px] pt-1 pr-2 justify-between items-center hover:ml-[-10px] duration-300 bg-[#E79D30]">
          <a
            href="/"
            className="flex justify-between items-center w-full text-white"
          >
            Resume
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
