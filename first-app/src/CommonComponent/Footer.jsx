import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee as faSolidCoffee } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard as faRegularAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="pt-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-baseline relative">
          <div className="w-full md:w-7/12">
            <div className="flex gap-2  mb-2">
              <span className="text-gray-400">
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
              </span>
              <h2 className="text-gray-500 text-lg font-normal">
                Subscribe to Newsletter
              </h2>
            </div>
            <form action="" className="flex gap-3">
              <div className="name">
                <input
                  className="border px-3 border-gray- rounded-md py-2"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="email">
                <input
                  className="border px-3 border-gray- rounded-md py-2"
                  type="text"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="submit">
                <button
                  className="border px-6 bg-[#3b5d50] border-gray- rounded-md py-2"
                  type="submit"
                >
                  <FontAwesomeIcon
                    icon="fa-solid fa-paper-plane"
                    className="text-white"
                  />
                </button>
              </div>
            </form>
          </div>

          <div className="w-full absolute right-0 bottom-[-4rem] md:w-2/6">
            <img className="" src="images/sofa.png" alt="" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/3">
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>

            <div className="icons ul flex gap-4">
              <li className="inline-block">
                <FaFacebookF className="bg-gray-200 p-1 " />
              </li>

              <li className="inline-block">
                <FaTwitter className="bg-gray-200 p-3 " />
              </li>

              <li className="inline-block">
                <FaInstagram className="bg-gray-200 p-3 " />
              </li>

              <li className="inline-block">
                <FaLinkedinIn className="bg-gray-200 p-3 " />
              </li>
            </div>
          </div>

          <div className="w-full md:w-2/3"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
